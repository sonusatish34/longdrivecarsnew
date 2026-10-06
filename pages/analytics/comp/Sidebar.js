'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutDashboard, Megaphone, LogOut, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', path: '/analytics/dashboard', icon: LayoutDashboard },
    { label: 'Campaigns', path: '/analytics/campaigns', icon: Megaphone },
  ];

  const handleLogout = () => {
    localStorage.getItem('token') && localStorage.removeItem('token');
    router.push('/login');
  };

  // Close mobile sidebar automatically on route change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => router.events?.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  return (
    <>
      {/* ---------------------------------------------------------------- flex
          1. Mobile Top Bar (Visible only below md breakpoint)
         ---------------------------------------------------------------- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between z-30">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          {/* <span className="font-bold text-gray-800 text-base">Analy==tics</span> */}
          <Image src={'/logo-white.webp'} height={500} width={500} className='w-2/4' alt='ds' />
        </div>
      </div>

      {/* ----------------------------------------------------------------
          2. Backdrop Overlay for Mobile
         ---------------------------------------------------------------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* ----------------------------------------------------------------
          3. Drawer / Sidebar Container (Slides in from Left on Mobile)
         ---------------------------------------------------------------- */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 md:z-auto h-screen w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top Section: Logo & Nav Links */}
        <div>
          {/* Header & Close Button */}
          <div className="px-3 py-3 mb-4 border-b border-gray-100 flex items-center justify-between">
            {/* <h1 className="text-xl font-bold text-gray-800 tracking-wide">
              Analytics
            </h1> */}
                      <Image src={'/logo-white.webp'} height={500} width={500} className='w-2/4 lg:w-full' alt='ds' />

            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = router.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-600 font-semibold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Logout Button */}
        <div className="border-t border-gray-100 pt-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;