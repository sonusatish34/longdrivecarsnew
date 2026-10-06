'use client';

import React from 'react';
import { Calendar, RefreshCw, ArrowRight } from 'lucide-react';

export default function DateFilterForm({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onSubmit,
  loading,
}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if start date is after end date
    if (startDate && endDate && startDate > endDate) {
      alert('Start date cannot be greater than end date.');
      return;
    }

    if (onSubmit) {
      onSubmit(e);
    }
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    // Auto-adjust end date if start date goes past current end date
    if (endDate && newStartDate > endDate) {
      setEndDate(newStartDate);
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    // Auto-adjust start date if end date goes before current start date
    if (startDate && newEndDate < startDate) {
      setStartDate(newEndDate);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto"
    >
      {/* Date Range Input Pill Group */}
      <div className="flex items-center justify-between bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/80 focus-within:border-[#179bad] focus-within:ring-4 focus-within:ring-[#179bad]/10 rounded-xl px-3 py-2 sm:py-1.5 transition-all duration-200 shadow-sm w-full sm:w-auto">
        <div className="flex items-center text-gray-400 mr-2 flex-shrink-0">
          <Calendar className="w-4 h-4 text-[#179bad]" />
        </div>

        {/* Start Date */}
        <div className="relative flex-1 sm:flex-initial flex items-center justify-center">
          <input
            type="date"
            value={startDate}
            max={endDate || undefined} // Prevents picking dates beyond endDate
            onChange={handleStartDateChange}
            className="w-full bg-transparent text-gray-800 focus:outline-none text-xs font-semibold cursor-pointer tracking-tight text-center sm:text-left"
            required
          />
        </div>

        {/* Separator Divider */}
        <span className="text-xs font-medium text-gray-400 px-2 select-none flex-shrink-0">
          to
        </span>

        {/* End Date */}
        <div className="relative flex-1 sm:flex-initial flex items-center justify-center">
          <input
            type="date"
            value={endDate}
            min={startDate || undefined} // Prevents picking dates before startDate
            onChange={handleEndDateChange}
            className="w-full bg-transparent text-gray-800 focus:outline-none text-xs font-semibold cursor-pointer tracking-tight text-center sm:text-left"
            required
          />
        </div>
      </div>

      {/* Modern Gradient Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#179bad] to-[#127e8d] hover:from-[#138393] hover:to-[#0f6b78] text-white text-xs font-semibold px-5 py-2.5 sm:py-2 rounded-xl shadow-sm shadow-[#179bad]/25 hover:shadow-md hover:shadow-[#179bad]/30 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 w-full sm:w-auto"
      >
        {loading ? (
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <>
            <span>Apply</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}