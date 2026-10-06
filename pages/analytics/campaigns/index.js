'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar, RefreshCw, Layers, Monitor, ExternalLink, AlertCircle } from 'lucide-react';
import Sidebar from '../comp/Sidebar';
import Link from 'next/link';
import NoDataVector from '@/pages/components/NoDataVector';

export default function CampaignDataDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const formatDate = (date) => date.toISOString().split('T')[0];
  const today = formatDate(new Date());
  const yesterday = formatDate(new Date(Date.now() - 86400000));

  const [startDate, setStartDate] = useState(searchParams.get('start_date') || yesterday);
  const [endDate, setEndDate] = useState(searchParams.get('end_date') || today);
  const [activity, setActivity] = useState(searchParams.get('activity') || '');
  const [platform, setPlatform] = useState(searchParams.get('platform') || '');

  const [campData, setCampData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateParams = (paramsObj) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(paramsObj).forEach(([k, v]) => (v ? params.set(k, v) : params.delete(k)));
    router.push(`?${params.toString()}`);
  };

  const fetchCampaignData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token') || '';
      const query = new URLSearchParams({ start_date: startDate, end_date: endDate, activity, platform });
      const res = await fetch(`/api/campaign-data?${query}`, {
        headers: { accept: 'application/json', Authorization: token },
      });
      const result = await res.json();
      if (res.ok && result?.status === 'success') {
        setCampData(result.data || []);
      } else {
        setCampData(result?.data || []);
        setError(result?.message || 'Failed to fetch data.');
      }
    } catch {
      setError('Network error or server unreachable.');
    } finally {
      setLoading(false);
    }
  }, [startDate, endDate, activity, platform]);

  useEffect(() => {
    fetchCampaignData();
  }, [fetchCampaignData]);

  const handleFilterChange = (setter, key) => (e) => {
    const val = e.target.value;
    setter(val);
    updateParams({ start_date: startDate, end_date: endDate, activity, platform, [key]: val });
  };
  function formatDateTo(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();

    // Get ordinal suffix
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const formattedHours = hours % 12 || 12;
    const ampm = hours >= 12 ? "pm" : "am";

    return `${day}${getOrdinal(day)} ${month} ${year} at ${formattedHours}:${minutes} ${ampm}`;
  }

  return (
    <div className="min-h-screen bg-gray-50/60 text-gray-800 flex flex-col md:flex-row">
      <Sidebar />

      <main className="flex-1 p-3 sm:p-6 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Campaign Analytics</h1>
            <p className="text-xs text-gray-500 hidden sm:block">Monitor conversion activity & platform sources</p>
          </div>
          <button
            onClick={fetchCampaignData}
            disabled={loading}
            className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className='py-4'>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3.5 sm:p-4 mb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-gray-600 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" /> Start
              </label>
              <input
                type="date"
                value={startDate}
                onChange={handleFilterChange(setStartDate, 'start_date')}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-1.5 text-xs font-medium focus:outline-none focus:border-[#179bad]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-gray-600 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" /> End
              </label>
              <input
                type="date"
                value={endDate}
                min={startDate}
                onChange={handleFilterChange(setEndDate, 'end_date')}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-1.5 text-xs font-medium focus:outline-none focus:border-[#179bad]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-gray-600 flex items-center gap-1">
                <Layers className="w-3 h-3 text-gray-400" /> Event
              </label>
              <select
                value={activity}
                onChange={handleFilterChange(setActivity, 'activity')}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-1.5 text-xs font-medium focus:outline-none focus:border-[#179bad]"
              >
                <option value="">All Events</option>
                <option value="INSTALLED">INSTALLED</option>
                <option value="REGISTERED">REGISTERED</option>
                <option value="BOOKED">BOOKED</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-gray-600 flex items-center gap-1">
                <Monitor className="w-3 h-3 text-gray-400" /> Platform
              </label>
              <select
                value={platform}
                onChange={handleFilterChange(setPlatform, 'platform')}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-1.5 text-xs font-medium focus:outline-none focus:border-[#179bad]"
              >
                <option value="">All Platforms</option>
                <option value="google">Google</option>
                <option value="meta">Meta</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>
          </div>
        </div>
        </div>
        

        {error && (
          <div className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-600">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 font-semibold uppercase">
                  <th scope="col" className="p-3 hidden md:table-cell">ID</th>
                  {/* <th scope="col" className="p-3 hidden sm:table-cell">Device ID</th> */}
                  <th scope="col" className="p-3">Platform</th>
                  <th scope="col" className="p-3">Device Id</th>
                  <th scope="col" className="p-3">Activity</th>
                  <th scope="col" className="p-3">Message</th>
                  <th scope="col" className="p-3 hidden lg:table-cell">Phone</th>
                  <th scope="col" className="p-3">Booking</th>
                  <th scope="col" className="p-3 text-right">Amount</th>
                  <th scope="col" className="p-3 hidden md:table-cell">Created On</th>
                  <th scope="col" className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="10" className="py-12 text-center">
                      <div className="w-6 h-6 border-2 border-[#179bad] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <span className="text-xs text-gray-400">Loading...</span>
                    </td>
                  </tr>
                ) : campData?.length > 0 ? (
                  campData.map((item, idx) => (
                    <tr key={item._id || idx} className="hover:bg-gray-50/80 text-sm">
                      <td className="p-3 font-mono text-gray-400 hidden md:table-cell">{item.activity_id || '-'}</td>
                      {/* <td className="p-3 font-mono font-medium text-gray-700 hidden sm:table-cell truncate max-w-[100px]">{item.device_id || '-'}</td> */}
                      <td className="p-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded font-semibold  capitalize  bg-gray-50  ${item.platform == 'organic' ? 'text-green-600' : 'text-blue-600'}`}>
                          {item.platform}
                        </span>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded capitalize font-semibold text-green-600">
                          {item.device_id || '-'}
                        </span>
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded capitalize font-semibold text-orange-600">
                          {item.activity.replace('_', ' ').toLowerCase() || '-'}
                        </span>
                      </td>
                      <td className="p-3 max-w-[140px] sm:max-w-xs  text-gray-600">{item.message}</td>
                      <td className="p-3 font-mono hidden lg:table-cell">{item.user_phone || '-'}</td>
                      <td className="p-3 font-mono font-medium">{item.booking_id || '-'}</td>
                      <td className="p-3 text-right font-mono font-semibold text-gray-900">
                        {item.booking_amount ? `₹${item.booking_amount}` : '-'}
                      </td>
                      <td className="p-3 text-gray-400 font-mono text-[10px] hidden md:table-cell">{formatDateTo(item.created_on) || '-'}</td>
                      <td className="p-3 text-center">
                        {item.booking_id ? (
                          <Link
                            href={`/analytics/booking-details/${item.booking_id}`}
                            className="inline-flex items-center gap-0.5 text-[#179bad] font-semibold hover:underline"
                          >
                            <span>View</span>
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        ) : (
                          '-'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="py-10 text-center">
                      <NoDataVector/>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}