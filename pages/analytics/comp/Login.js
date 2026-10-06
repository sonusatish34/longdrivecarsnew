'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // 1. Import useRouter
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter(); // 2. Initialize the router hook

  // Step state: 1 = Phone & Role Input, 2 = OTP Verification
  const [step, setStep] = useState(1);

  // Form states
  const [mobileNumber, setMobileNumber] = useState();
  const [roleId, setRoleId] = useState(38); // Default to Admin (3)
  const [otp, setOtp] = useState('');

  // UI state feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Handle Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!mobileNumber || mobileNumber.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://dev.longdrivecars.com/analytic/send-otp', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile_number: mobileNumber,
          role_id: Number(roleId),
        }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setSuccessMsg(data.message || `OTP Sent.. to ${mobileNumber}`);
        setStep(2);
      } else {
        setError(data.message || 'Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setError('Network error or server unreachable. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Validate OTP
  const handleValidateOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (!otp || otp.length < 4) {
      setError('Please enter a valid OTP.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://dev.longdrivecars.com/analytic/otp-validate', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp: otp,
          mobile_number: mobileNumber,
          role_id: Number(roleId),
        }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        // Save JWT Token (e.g. localStorage or cookie)
        if (data.jwt_token) {
          localStorage.setItem('token', data.jwt_token);
        }
        
        // 3. Redirect to /dashboard
        router.push('/analytics/dashboard');
      } else {
        setError(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Network error or server unreachable. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f5f7] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Log in to your account
          </h2>
          
          {/* Logo Container */}
          <div className="w-28 h-28 flex items-center justify-center mb-2 scale-150">
            <Image
              src="/logo-white.webp" 
              alt="LDC Logo"
              height={600}
              width={600}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/100?text=LDC+Logo';
              }}
            />
          </div>
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 text-sm rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        {/* STEP 1: Enter Phone Number & Role */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            {/* Mobile Number Field */}
            <div>
              <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500">
                <span className="px-3 text-gray-400 border-r border-gray-200 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  required
                  placeholder="eg: 7997651779"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-3 py-2 text-gray-800 focus:outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#179bad] hover:bg-[#138393] text-white font-medium py-2 px-5 rounded-md transition-colors flex items-center space-x-1 disabled:opacity-50"
              >
                <span>{loading ? 'Sending...' : 'Send OTP'}</span>
                {!loading && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Validate OTP */}
        {step === 2 && (
          <form onSubmit={handleValidateOtp} className="space-y-4">
            {/* Success Banner */}
            <div className="bg-[#e6f7fa] border border-[#b2ebf2] text-[#00838f] px-3 py-2 rounded-md text-sm flex items-center space-x-2">
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{successMsg || `OTP Sent.. to ${mobileNumber}`}</span>
            </div>

            {/* OTP Input Field */}
            <div>
              <div className="relative flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500">
                <span className="px-3 text-gray-400 border-r border-gray-200 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </span>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-gray-500 hover:text-gray-700 underline"
              >
                Change Number
              </button>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#5bc0de] hover:bg-[#31b0d5] text-white font-medium py-2 px-5 rounded-md transition-colors flex items-center space-x-1 disabled:opacity-50"
              >
                <span>{loading ? 'Validating...' : 'Validate OTP'}</span>
                {!loading && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}