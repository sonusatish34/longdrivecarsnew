'use client';

import React from 'react';
import { RefreshCw, Filter } from 'lucide-react';

export default function CardHeader({ titleLeft, titleRight, onRefresh, loading }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span>Show top</span>
        <span className="font-medium bg-gray-100 px-2.5 py-1 rounded border border-gray-200 text-gray-700">
          {titleLeft}
        </span>
        <span>by</span>
        <span className="font-medium bg-gray-100 px-2.5 py-1 rounded border border-gray-200 text-gray-700">
          {titleRight}
        </span>
      </div>
      <div className="flex items-center space-x-1 text-gray-400">
        <button onClick={onRefresh} className="p-1.5 hover:bg-gray-100 rounded-lg">
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
        {/* <button className="p-1.5 hover:bg-gray-100 rounded-lg">
          <Filter className="w-4 h-4" />
        </button> */}
      </div>
    </div>
  );
}