'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import CardHeader from './CardHeader';
import NoDataVector from '@/pages/components/NoDataVector';

export default function EventsDataCard({ eventsData = [], onRefresh, loading }) {
  const maxEventCount = useMemo(() => {
    const list = eventsData || [];
    if (list.length === 0) return 1;
    return Math.max(...list.map((e) => e.count || 0), 1);
  }, [eventsData]);

  return (
    <div className="px-4 lg:px-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between min-h-[328px]">
        <CardHeader
          titleLeft="Events"
          titleRight="Event count"
          onRefresh={onRefresh}
          loading={loading}
        />

        <div className="space-y-3 overflow-y-auto">
          {eventsData?.map((item) => {
            const barWidthPercent = (item.count / maxEventCount) * 100;
            const formattedName = item.activity?.toLowerCase().replace(/_/g, ' ') || '';

            return (
              <div key={item.activity} className="flex items-center justify-between text-xs group">
                <span className="w-1/3 font-medium text-gray-600 truncate pr-2 capitalize" title={formattedName}>
                  {formattedName}
                </span>

                <div className="w-2/4 px-2">
                  <div className="h-5 w-full bg-gray-100 rounded-sm overflow-hidden flex">
                    <div
                      className="h-full bg-sky-500 rounded-l-sm transition-all duration-300"
                      style={{ width: `${barWidthPercent}%` }}
                    />
                    <div className="h-full w-1 bg-emerald-400" />
                  </div>
                </div>

                <span className="w-1/3 text-right font-semibold text-gray-800 font-mono">
                  {item.count?.toLocaleString() || 0}
                </span>
              </div>
            );
          })}

          {(!eventsData || eventsData.length === 0) && !loading && (
            <NoDataVector />
          )}
        </div>
      </div>
    </div>
  );
}