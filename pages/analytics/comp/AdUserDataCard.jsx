'use client';

import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Image from 'next/image';
import CardHeader from './CardHeader';
import NoDataVector from '@/pages/components/NoDataVector';

ChartJS.register(ArcElement, Tooltip, Legend);

const PLATFORM_COLORS = {
  meta: '#4285F4',
  google: '#24C1E0',
  organic: '#34A853',
  default: '#A0AEC0',
};

const CHART_PALETTE = [
  '#4285F4', '#24C1E0', '#34A853', '#A142F4',
  '#FBBC05', '#E91E63', '#673AB7', '#00BCD4',
];

const getPlatformColor = (platform = '', index = 0) =>
  PLATFORM_COLORS[platform.toLowerCase()] || CHART_PALETTE[index % CHART_PALETTE.length];

const calcPercentage = (count, total) =>
  total > 0 ? ((count / total) * 100).toFixed(2) : '0.00';

export default function AdUserDataCard({ adUserData = [], onRefresh, loading }) {
  const totalAdCount = useMemo(
    () => adUserData.reduce((acc, curr) => acc + curr.count, 0),
    [adUserData]
  );

  const doughnutChartData = useMemo(
    () => ({
      labels: adUserData.map((item) => item.platform),
      datasets: [
        {
          data: adUserData.map((item) => item.count),
          backgroundColor: adUserData.map((item, idx) => getPlatformColor(item.platform, idx)),
          borderWidth: 2,
          borderColor: '#ffffff',
          hoverOffset: 4,
        },
      ],
    }),
    [adUserData]
  );

  const doughnutOptions = useMemo(
    () => ({
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => {
              const val = context.raw || 0;
              const percentage = calcPercentage(val, totalAdCount);
              return ` ${context.label}: ${val} (${percentage}%)`;
            },
          },
        },
      },
      maintainAspectRatio: false,
    }),
    [totalAdCount]
  );

  const hasData = adUserData && adUserData.length > 0;

  return (
    <div className="px-4 lg:px-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between min-h-[320px]">
      <CardHeader
        titleLeft="Media source"
        titleRight="User count"
        onRefresh={onRefresh}
        loading={loading}
      />

      {/* Render Chart & List when data exists */}
      {hasData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-6">
          <div className="h-48 w-48 mx-auto relative flex items-center justify-center">
            <Doughnut data={doughnutChartData} options={doughnutOptions} />
          </div>

          <div className="space-y-2.5 pl-2">
            {adUserData.map((item, index) => {
              const percentage = calcPercentage(item.count, totalAdCount);
              const color = getPlatformColor(item.platform, index);

              return (
                <div key={item.platform} className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 truncate">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="capitalize font-medium text-gray-700 truncate">{item.platform}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-right">
                    <span className="text-gray-400 font-mono">({item.count})</span>
                    <span className="font-semibold text-gray-800 w-12">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Perfectly centered "No Data" state across the card */
        !loading && (
          <div className="flex flex-col items-center justify-center  w-full my-auto">
            <NoDataVector/>
          </div>
        )
      )}
    </div>
    </div>
    
  );
}