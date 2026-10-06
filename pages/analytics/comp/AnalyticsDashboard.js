'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './Sidebar';
import DateFilterForm from './DateFilterForm';
import AdUserDataCard from './AdUserDataCard';
import EventsDataCard from './EventsDataCard';
import ActivityTable from './ActivityTable';

export default function AnalyticsDashboard() {
  const formatDate = (date) => date.toISOString().split('T')[0];

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  // ----------------------------------------------------
  // 1. Dashboard State (Top Cards)
  // ----------------------------------------------------
  const [startDate, setStartDate] = useState(formatDate(yesterday));
  const [endDate, setEndDate] = useState(formatDate(today));

  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [dashboardError, setDashboardError] = useState('');
  const [eventsData, setEventsData] = useState([]);
  const [adUserData, setAdUserData] = useState([]);

  // ----------------------------------------------------
  // 2. Activity Table State (Bottom Filter)
  // ----------------------------------------------------
  const [activityStartDate, setActivityStartDate] = useState(formatDate(yesterday));
  const [activityEndDate, setActivityEndDate] = useState(formatDate(today));

  const [activityLoading, setActivityLoading] = useState(false);
  const [activityError, setActivityError] = useState('');
  const [countData, setCountData] = useState([]);

  // ----------------------------------------------------
  // API Call 1: Fetch Dashboard Data
  // ----------------------------------------------------
  const fetchDashboardData = useCallback(async () => {
    setDashboardLoading(true);
    setDashboardError('');

    try {
      const token = localStorage.getItem('token');
      const authHeaders = {
        accept: 'application/json',
        Authorization: token || '',
      };

      const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
      const response = await fetch(`/api/dashboard?${params}`, { headers: authHeaders });
      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setEventsData(result.data?.events_count || []);
        setAdUserData(result.data?.ad_user_count || []);
      } else {
        setDashboardError(result.message || 'Failed to fetch analytics data.');
      }
    } catch (err) {
      setDashboardError('Network error or server unreachable.');
    } finally {
      setDashboardLoading(false);
    }
  }, [startDate, endDate]);

  // ----------------------------------------------------
  // API Call 2: Fetch Activity Data
  // ----------------------------------------------------
  const fetchActivityData = useCallback(async () => {
    setActivityLoading(true);
    setActivityError('');

    try {
      const token = localStorage.getItem('token');
      const authHeaders = {
        accept: 'application/json',
        Authorization: token || '',
      };

      const params = new URLSearchParams({
        start_date: activityStartDate,
        end_date: activityEndDate,
      });

      const response = await fetch(`/api/events-data?${params}`, { headers: authHeaders });
      const result = await response.json();

      if (response.ok) {
        setCountData(result?.data || []);
      } else {
        setActivityError(result.message || 'Failed to fetch activity data.');
      }
    } catch (err) {
      setActivityError('Network error or server unreachable.');
    } finally {
      setActivityLoading(false);
    }
  }, [activityStartDate, activityEndDate]);

  // Initial Fetches on Mount & Date Changes
  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  useEffect(() => {
    fetchActivityData();
  }, [fetchActivityData]);

  // Submit Handlers
  const handleDashboardFilterSubmit = (e) => {
    e.preventDefault();
    fetchDashboardData();
  };

  const handleActivityFilterSubmit = (e) => {
    e.preventDefault();
    fetchActivityData();
  };

  return (
    <div className="min-h-screen bg-gray-50/60 text-gray-800 flex gap-x-20">
      <Sidebar />
      <div className='lg:pt-0 pt-10'>
        {/* Top Header & Date Filter (Dashboard Cards) */}
        <div className="max-w-4xl mx-auto mt-8 mb-2 px-4 lg:px-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Analytics Dashboard</h1>
              <p className="text-xs text-gray-500">Track acquisition sources & system events</p>
            </div>
            <DateFilterForm
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              onSubmit={handleDashboardFilterSubmit}
              loading={dashboardLoading}
            />
          </div>

          {dashboardError && (
            <div className="mt-3 p-3 bg-red-50 text-red-600 border border-red-200 text-xs rounded-lg font-medium">
              {dashboardError}
            </div>
          )}
        </div>

        {/* Analytics Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
          <AdUserDataCard
            adUserData={adUserData}
            onRefresh={fetchDashboardData}
            loading={dashboardLoading}
          />
          <EventsDataCard
            eventsData={eventsData}
            onRefresh={fetchDashboardData}
            loading={dashboardLoading}
          />
        </div>

        {/* Activity Table Header & Separate Date Filter */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-xl font-bold text-gray-800">Activity Filter</h1>
            <DateFilterForm
              startDate={activityStartDate}
              endDate={activityEndDate}
              setStartDate={setActivityStartDate}
              setEndDate={setActivityEndDate}
              onSubmit={handleActivityFilterSubmit}
              loading={activityLoading}
            />
          </div>

          {activityError && (
            <div className="mt-3 p-3 bg-red-50 text-red-600 border border-red-200 text-xs rounded-lg font-medium">
              {activityError}
            </div>
          )}
        </div>

        {/* Activity Breakdown Table */}
        <ActivityTable countData={countData} />
      </div>
    </div>
  );
}