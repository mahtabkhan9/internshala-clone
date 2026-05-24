import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* col 1 */}
          <div className="flex flex-col space-y-3.5">
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">About us</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">We're hiring</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Hire interns for your company</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Post a Job</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Competitions</a>
          </div>

          {/* col 2 */}
          <div className="flex flex-col space-y-3.5">
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Team Diary</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Blog</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Our Services</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Free Job Alerts</a>
          </div>

          {/* col 3 */}
          <div className="flex flex-col space-y-3.5">
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Contact us</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Annual Returns</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Grievance Redressal</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Resume Maker</a>
          </div>

          {/* col 4 */}
          <div className="flex flex-col space-y-3.5">
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Sitemap</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">College TPO registration</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">List of Companies</a>
            <a href="#" className="hover:text-gray-300 text-[14px] font-medium transition-colors">Jobs for Women</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* app store buttons */}
            <a href="#" className="border border-white rounded-md px-3 py-1.5 flex items-center gap-2 hover:bg-white hover:text-black transition-colors group">
              <FaGooglePlay className="text-[18px]" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] leading-none mb-0.5">GET IT ON</span>
                <span className="text-[13px] font-semibold leading-none">Google Play</span>
              </div>
            </a>
            <a href="#" className="border border-white rounded-md px-3 py-1.5 flex items-center gap-2 hover:bg-white hover:text-black transition-colors group">
              <FaApple className="text-[22px] -mt-1" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] leading-none mb-0.5">Download on the</span>
                <span className="text-[13px] font-semibold leading-none">App Store</span>
              </div>
            </a>

            {/* social icons */}
            <div className="flex items-center gap-5 ml-2 md:ml-4">
              <a href="#" className="text-white hover:text-gray-300"><FaInstagram className="w-[18px] h-[18px]" /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter className="w-[18px] h-[18px]" /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaYoutube className="w-[18px] h-[18px]" /></a>
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedinIn className="w-[18px] h-[18px]" /></a>
            </div>
          </div>

          <div className="text-white text-[13px] leading-relaxed">
            <p>© Copyright 2026 Internshala</p>
            <p>(Scholiverse Educare Private Limited)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
