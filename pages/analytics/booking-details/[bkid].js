'use client';

import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from '../comp/Sidebar';

export default function BookingDetails() {
  const router = useRouter();
  const { isReady, query } = router;
  const bkid = query.bkid;

  const [bookingReviews, setBookingReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBookingReviews = useCallback(async (idToFetch) => {
    if (!idToFetch) return;

    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token') || '';
      const authHeaders = {
        accept: 'application/json',
        Authorization: token,
      };

      const response = await fetch(`/api/booking-reviews?booking_id=${idToFetch}`, {
        method: 'GET',
        headers: authHeaders,
      });

      const result = await response.json();

      if (response.ok && result?.status === 'success') {
        setBookingReviews(result || null);
      } else {
        setError(result?.message || 'Failed to fetch booking reviews.');
      }
    } catch (err) {
      setError('Network error or server unreachable.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only fetch when router parameters are fully ready and bkid exists
    if (isReady && bkid) {
      fetchBookingReviews(bkid);
    }
  }, [isReady, bkid, fetchBookingReviews]);


  // Loading State UI
  if (!isReady || loading) {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-slate-500">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium animate-pulse">Loading calculation details...</p>
          </div>
        </main>
      </div>
    );
  }

  // Error State UI
  if (error || !bookingReviews) {
    return (
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-xl mx-auto mt-12 p-6 bg-red-50/80 border border-red-200 rounded-2xl text-center shadow-sm">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
              ⚠️
            </div>
            <h3 className="text-base font-semibold text-red-800 mb-1">Unable to load booking</h3>
            <p className="text-sm text-red-600 mb-4">{error || 'No data available for this booking.'}</p>
            <button
              onClick={() => fetchBookingReviews(bkid)}
              className="px-4 py-2 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  const bookingDetails = bookingReviews?.booking_details || bookingReviews?.data || {};
  const extensionBookings = bookingReviews?.extension_bookings || [];
  const bd = bookingDetails;

  // --- CALCULATION LOGIC ---
  let customerBookingPrice = bd.booking_price;
  if ((bd.owner_earning_percentage === '45' || bd.owner_earning_percentage === '48') && bd.booking_price < bd.original_booking_price) {
    customerBookingPrice = 1;
  }

  const newDiscount = bd.new_user_discount_applied || 0;
  const regularDiscount = (bd.discount_applied || 0) - newDiscount;
  const walletPointsUsed = (bd.cash_back_used || 0) - (bd.subscription_points_used || 0);
  const subPointsDeduct = bd.subscription_points_to_deduct || 0;

  const remainingCarPrice = customerBookingPrice - (bd.discount_applied || 0) - walletPointsUsed - subPointsDeduct;
  const ownerEarningPercentage = bd.owner_earning_percentage || 0;
  const ldcEarningPercentage = 100 - ownerEarningPercentage;

  const ownerPerAmt = Math.round(remainingCarPrice * (ownerEarningPercentage / 100));
  const ldcPerAmt = Math.round(remainingCarPrice * (ldcEarningPercentage / 100));

  const isHome = bd.booking_origin === 'home_location';
  const isBranch = bd.booking_origin === 'branch';

  const ownerWashing = isHome ? bd.car_wash_price : 0;
  const ownerHomeDelivery = isHome ? bd.home_delivery_charges : 0;
  const ldcWashing = isBranch ? bd.car_wash_price : 0;
  const ldcHomeDelivery = isBranch ? bd.home_delivery_charges : 0;

  const ownerTotalEarnings = ownerPerAmt + ownerHomeDelivery + (bd.late_pickup_charges || 0) + (bd.late_return_charges || 0) + ownerWashing;
  const ldcTotalEarnings = ldcPerAmt + (bd.damage_protection_amount || 0) + (bd.zero_headache_amount || 0) + (bd.convenience_fee || 0) + (bd.modify_booking_fee || 0) + ldcWashing + ldcHomeDelivery;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 pt-20 px-4 py-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">BK id - {bkid}</h1>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Booking Detail Statement</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Detailed earnings breakdown & calculation summary</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
              Origin: <span className="capitalize">{bd.booking_origin?.replace('_', ' ') || 'N/A'}</span>
            </span>
          </div>
        </div>

        {/* Primary Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Booking Summary Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 px-6 py-4 text-white flex justify-between items-center">
              <h2 className="font-semibold text-sm tracking-wider uppercase text-slate-200">
                Primary Calculation
              </h2>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-md text-slate-300 font-mono">
                Base Fare
              </span>
            </div>

            <div className="p-5 sm:p-6 space-y-6 text-xs sm:text-sm">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Base Price & Deductions</h3>
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-600 font-medium">Car Original Price</span>
                    <span className="font-semibold text-slate-900">₹ {customerBookingPrice}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 text-emerald-600">
                    <span>New User Discount</span>
                    <span className="font-medium">- ₹ {newDiscount}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 text-emerald-600">
                    <span>Regular Discount</span>
                    <span className="font-medium">- ₹ {regularDiscount}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 text-emerald-600">
                    <div>
                      <span>Wallet Points Used</span>
                      <span className="text-[11px] text-slate-400 block sm:inline sm:ml-1">
                        (Bal: ₹{bd.user_total_points || 0})
                      </span>
                    </div>
                    <span className="font-medium">- ₹ {walletPointsUsed}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 text-emerald-600">
                    <span>Subscription Points Deducted</span>
                    <span className="font-medium">- ₹ {subPointsDeduct}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-indigo-50/70 border border-indigo-100 p-4 rounded-xl text-indigo-950">
                <span className="font-semibold text-sm">Remaining Car Price</span>
                <span className="font-bold text-lg text-indigo-700">₹ {remainingCarPrice}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Owner Side */}
                <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30 space-y-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-emerald-100">
                    <span className="font-bold text-emerald-900 text-xs uppercase tracking-wide">Owner Share</span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      {ownerEarningPercentage}%
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Base Earnings</span>
                    <span className="font-semibold text-slate-800">₹ {ownerPerAmt}</span>
                  </div>
                  {isHome && (
                    <>
                      <div className="flex justify-between text-slate-600">
                        <span>Car Wash</span>
                        <span className="font-semibold text-slate-800">₹ {bd.car_wash_price || 0}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Home Delivery</span>
                        <span className="font-semibold text-slate-800">₹ {bd.home_delivery_charges || 0}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Late Pickup Fee</span>
                    <span className="font-semibold text-slate-800">₹ {bd.late_pickup_charges || 0}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Late Return Fee</span>
                    <span className="font-semibold text-slate-800">₹ {bd.late_return_charges || 0}</span>
                  </div>
                </div>

                {/* LDC Side */}
                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 space-y-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-blue-100">
                    <span className="font-bold text-blue-900 text-xs uppercase tracking-wide">LDC Share</span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                      {ldcEarningPercentage}%
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Base Share</span>
                    <span className="font-semibold text-slate-800">₹ {ldcPerAmt}</span>
                  </div>
                  {isBranch && (
                    <>
                      <div className="flex justify-between text-slate-600">
                        <span>Home Delivery Fee</span>
                        <span className="font-semibold text-slate-800">₹ {bd.home_delivery_charges || 0}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Car Wash Fee</span>
                        <span className="font-semibold text-slate-800">₹ {bd.car_wash_price || 0}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Damage Protection ({bd.damage_protection_plan || 'N/A'})</span>
                    <span className="font-semibold text-slate-800">₹ {bd.damage_protection_amount || 0}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Zero Headache Pass</span>
                    <span className="font-semibold text-slate-800">₹ {bd.zero_headache_amount || 0}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Convenience Fee</span>
                    <span className="font-semibold text-slate-800">₹ {bd.convenience_fee || 0}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Modification Fee</span>
                    <span className="font-semibold text-slate-800">₹ {bd.modify_booking_fee || 0}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-emerald-600 text-white p-4 rounded-xl shadow-sm">
                  <span className="text-xs uppercase tracking-wider text-emerald-100 block font-medium">Owner Total Earnings</span>
                  <span className="text-xl font-bold">₹ {ownerTotalEarnings}</span>
                </div>
                <div className="bg-indigo-600 text-white p-4 rounded-xl shadow-sm">
                  <span className="text-xs uppercase tracking-wider text-indigo-100 block font-medium">LDC Total Earnings</span>
                  <span className="text-xl font-bold">₹ {ldcTotalEarnings}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Payment Status Summary</h3>
              
              <div className="space-y-3 divide-y divide-slate-100 text-xs sm:text-sm">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Total Booking Amount</span>
                  <span className="font-semibold text-slate-900">₹ {bd.booking_total_amount || 0}</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Advance Paid</span>
                  <div className="text-right">
                    <span className="font-semibold text-slate-900">₹ {bd.amount_tobe_paid_for_ui || 0}</span>
                    <span className="ml-2 text-[10px] uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold">
                      Paid
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">Remaining Amount</span>
                  <span className="font-bold text-amber-600">₹ {bd.booking_remaining_amount || 0}</span>
                </div>
              </div>

              {bd.is_spot_payment === 'yes' && (
                <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs uppercase tracking-wide">
                    <span>⚡ Spot Payment Received</span>
                  </div>
                  <div className="flex justify-between text-amber-900 pt-1">
                    <span>Paid at Branch:</span>
                    <span className="font-bold">- ₹ {bd.booking_remaining_amount_paid_at_branch || 0}</span>
                  </div>
                  <div className="border-t border-amber-200 pt-2 flex justify-between font-bold text-slate-900">
                    <span>Remaining Owner Earnings:</span>
                    <span className="text-emerald-700">
                      ₹ {ownerTotalEarnings - (bd.booking_remaining_amount_paid_at_branch || 0)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Extension Bookings Section */}
        {extensionBookings.length > 0 && (
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
              Extension Details ({extensionBookings.length})
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {extensionBookings.map((ext, idx) => {
                const isPaid = ext.extend_status === 'completed';
                const ownExtPer = (isHome && ext.extend_hours < 24) ? 50 : (ext.owner_extension_earning_percentage || 50);
                const ldcExtPer = 100 - ownExtPer;

                const extAmount = ext.extend_car_price || 0;
                const currentOwnerAmount = Math.round((extAmount * ownExtPer) / 100);
                const ldcOwnerAmount = Math.round((extAmount * ldcExtPer) / 100);
                const convenienceFeePaisa = Math.round((ext.convenience_fee || 0) / 100);

                const extOwnerTotal = Math.round(currentOwnerAmount + (ext.extend_late_fees || 0));
                const extLdcTotal = Math.round(
                  ldcOwnerAmount +
                  (ext.extend_damage_protection_amount || 0) +
                  convenienceFeePaisa +
                  (ext.extend_zero_headache_amount || 0)
                );

                return (
                  <div
                    key={ext.id || idx}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 space-y-4 text-xs sm:text-sm"
                  >
                    <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">Extension #{idx + 1}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${isPaid ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                          {isPaid ? 'Completed / Paid' : 'Pending / Unpaid'}
                        </span>
                      </div>
                      <span className="text-slate-500 text-xs">
                        Extended By: <strong className="text-indigo-600 font-semibold">{ext.extended_by}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Start Time</span>
                        <span className="font-semibold text-slate-700">{ext.extend_time_from?.slice(0, -3)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">End Time</span>
                        <span className="font-semibold text-slate-700">{ext.extend_time_to?.slice(0, -3)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Duration</span>
                        <span className="font-semibold text-slate-700">{ext.extend_hours} Hrs</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Extension Fee</span>
                        <span className="font-bold text-slate-900">₹{extAmount}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
                      <div className="space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Owner Share ({ownExtPer}%)</span>
                          <span className="font-semibold">₹{currentOwnerAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Late Return Fees</span>
                          <span className="font-semibold">₹{ext.late_return_fees || 0}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-slate-500">LDC Share ({ldcExtPer}%)</span>
                          <span className="font-semibold">₹{ldcOwnerAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Damage Protection</span>
                          <span className="font-semibold">₹{ext.extend_damage_protection_amount || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Zero Headache Pass</span>
                          <span className="font-semibold">₹{ext.extend_zero_headache_amount || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Convenience Fee (Razorpay)</span>
                          <span className="font-semibold">₹{convenienceFeePaisa}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-2 pt-3 border-t border-slate-100 font-bold">
                      <div className="text-emerald-700">
                        Owner Extension Earnings: <span className="text-sm">₹{extOwnerTotal}</span>
                      </div>
                      <div className="text-indigo-700">
                        LDC Extension Earnings: <span className="text-sm">₹{extLdcTotal}</span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}