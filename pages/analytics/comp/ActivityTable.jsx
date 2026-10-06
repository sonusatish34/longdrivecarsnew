'use client';

import React from 'react';
import Image from 'next/image';
import NoDataVector from '@/pages/components/NoDataVector';

export default function ActivityTable({ countData }) {
  return (
    <div className="px-4 lg:px-0">
      <div className="py-4 max-w-[433px] mx-aut mb-6">
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600 border-b border-gray-200">
              <tr>
                <th scope="col" className="px-4 py-3 text-lg">Activity</th>
                <th scope="col" className="px-4 py-3 text-right">Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {Array.isArray(countData) && countData.length > 0 ? (
                countData.map((item, index) => (
                  <tr key={item._id || index} className="hover:bg-gray-50 transition-colors text-c">
                    <td className="px-4 py-2.5 text-sm font-semibold text-gray-500 capitalize">{item.activity.toLowerCase().replace(/_/g, ' ')}</td>
                    <td className="px-8 py-2.5 text-right font-semibold text-gray-700">{item.count}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-4 py-8 text-center">
                    <div className="flex justify-center">
                      <NoDataVector />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}