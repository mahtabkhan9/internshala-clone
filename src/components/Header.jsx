import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* logo & mobile menu */ }
          <div className="flex items-center h-full">
            <FaBars className="h-5 w-5 text-gray-500 md:hidden mr-4 cursor-pointer" />
            
            <div className="flex-shrink-0 flex items-center cursor-pointer pl-2">
              <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="Internshala" className="h-7" />
            </div>
          </div>
          
          {/* nav links */}
          <div className="hidden md:flex items-center h-full ml-auto">
            <div className="flex items-center h-full space-x-7">
              {/* internships tab */}
              <div className="h-full flex items-center border-b-[3px] border-brand cursor-pointer pt-[3px]">
                <span className="text-[#484848] font-medium text-[15px]">Internships</span>
                <MdArrowDropDown className="text-[#484848] ml-0.5 text-2xl" />
              </div>
              
              {/* courses tab */}
              <div className="h-full flex items-center cursor-pointer group pt-[3px] border-b-[3px] border-transparent hover:border-brand">
                <span className="text-[#484848] group-hover:text-brand font-medium text-[15px] transition-colors">Courses</span>
                <span className="ml-1.5 bg-[#f89c0e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm tracking-wide">OFFER</span>
                <MdArrowDropDown className="text-[#484848] group-hover:text-brand ml-0.5 text-2xl transition-colors" />
              </div>
              
              {/* jobs tab */}
              <div className="h-full flex items-center cursor-pointer group pt-[3px] border-b-[3px] border-transparent hover:border-brand">
                <span className="text-[#484848] group-hover:text-brand font-medium text-[15px] transition-colors">Jobs</span>
                <MdArrowDropDown className="text-[#484848] group-hover:text-brand ml-0.5 text-2xl transition-colors" />
              </div>
              
              {/* auth links */}
              <div className="h-full flex items-center cursor-pointer group pt-[3px] border-b-[3px] border-transparent hover:border-brand">
                <span className="text-[#484848] group-hover:text-brand font-medium text-[15px] transition-colors">Login / Register</span>
                <MdArrowDropDown className="text-[#484848] group-hover:text-brand ml-0.5 text-2xl transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
