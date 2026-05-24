import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';

const FiltersSidebar = ({ filters, setFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = e.target.checked;
      setFilters(prev => ({ ...prev, [name]: checked }));
    } else {
      setFilters(prev => ({ ...prev, [name]: name === 'stipend' ? parseInt(value) || 0 : value }));
    }
  };

  const clearFilters = () => {
    setFilters({ 
      profile: '', location: '', duration: '', stipend: 0, 
      workFromHome: false, partTime: false, keyword: '',
      startDate: '', maxDuration: '', jobOffer: false, 
      fastResponse: false, earlyApplicant: false, forWomen: false 
    });
  };

  return (
    <div className="sticky top-24">
      <style>{`
        .custom-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          background: #00a5ec;
          border-radius: 4px;
          outline: none;
        }
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00a5ec;
          border: 3px solid white;
          box-shadow: 0 0 0 1.5px #00a5ec;
          cursor: pointer;
        }
        .custom-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00a5ec;
          border: 3px solid white;
          box-shadow: 0 0 0 1.5px #00a5ec;
          cursor: pointer;
        }
      `}</style>
      
      {/* main filters box */}
      <div className="bg-white border border-[#eeeeee] rounded-[4px] p-6 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex justify-center items-center mb-6">
          <FiFilter className="text-[#00a5ec] mr-2 text-lg" />
          <span className="font-semibold text-[#333333] text-[16px]">Filters</span>
        </div>

        <div className="mb-4">
          <label htmlFor="profile" className="block text-[14px] text-[#333] font-medium mb-2">
            Profile
          </label>
          <input
            type="text"
            id="profile"
            name="profile"
            placeholder="e.g. Marketing"
            value={filters.profile || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#e5e5e5] rounded-[3px] focus:outline-none focus:border-[#00a5ec] text-[14px] text-[#333] placeholder-[#999]"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="location" className="block text-[14px] text-[#333] font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g. Delhi"
            value={filters.location || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#e5e5e5] rounded-[3px] focus:outline-none focus:border-[#00a5ec] text-[14px] text-[#333] placeholder-[#999]"
          />
        </div>

        <div className="mb-3">
          <label className="flex items-center text-[14px] text-[#333] cursor-pointer">
            <input
              type="checkbox"
              name="workFromHome"
              checked={filters.workFromHome || false}
              onChange={handleChange}
              className="mr-2.5 h-[15px] w-[15px] rounded border-gray-300 accent-[#00a5ec] cursor-pointer"
            />
            Work from home
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center text-[14px] text-[#333] cursor-pointer">
            <input
              type="checkbox"
              name="partTime"
              checked={filters.partTime || false}
              onChange={handleChange}
              className="mr-2.5 h-[15px] w-[15px] rounded border-gray-300 accent-[#00a5ec] cursor-pointer"
            />
            Part-time
          </label>
        </div>

        <div className="mb-5">
          <label htmlFor="stipend" className="block text-[14px] text-[#333] font-medium mb-5">
            Desired minimum monthly stipend (₹)
          </label>
          <div className="px-2">
            <input
              type="range"
              id="stipend"
              name="stipend"
              min="0"
              max="10000"
              step="2000"
              value={filters.stipend || 0}
              onChange={handleChange}
              className="custom-slider"
            />
            <div className="flex justify-between text-[#777] text-[14px] mt-3 -mx-2">
              <span>0</span>
              <span>2K</span>
              <span>4K</span>
              <span>6K</span>
              <span>8K</span>
              <span>10K</span>
            </div>
          </div>
        </div>

        <div className="mb-6 mt-6">
          <span 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#00a5ec] text-[14px] font-medium cursor-pointer flex items-center hover:underline w-fit"
          >
            {isExpanded ? 'View less filters' : 'View more filters'} 
            {isExpanded ? <MdKeyboardArrowUp className="ml-1 text-lg" /> : <MdKeyboardArrowDown className="ml-1 text-lg" />}
          </span>
        </div>

        {isExpanded && (
          <div className="mb-6">
            <div className="mb-4">
              <label className="block text-[14px] text-[#333] font-medium mb-2">
                Starting from (or after)
              </label>
              <input
                type="text"
                name="startDate"
                placeholder="Choose date"
                value={filters.startDate || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e5e5e5] rounded-[3px] focus:outline-none focus:border-[#00a5ec] text-[14px] text-[#333] placeholder-[#999]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[14px] text-[#333] font-medium mb-2">
                Max. duration (months)
              </label>
              <input
                type="text"
                name="maxDuration"
                placeholder="Choose duration"
                value={filters.maxDuration || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#e5e5e5] rounded-[3px] focus:outline-none focus:border-[#00a5ec] text-[14px] text-[#333] placeholder-[#999]"
              />
            </div>

            <div className="space-y-3.5 mb-2">
              <label className="flex items-center text-[14px] text-[#333] cursor-pointer">
                <input
                  type="checkbox"
                  name="jobOffer"
                  checked={filters.jobOffer || false}
                  onChange={handleChange}
                  className="mr-2.5 h-[15px] w-[15px] rounded border-gray-300 accent-[#00a5ec] cursor-pointer"
                />
                Internships with job offer <BsQuestionCircle className="ml-1.5 text-[#555] text-[13px]" />
              </label>

              <label className="flex items-center text-[14px] text-[#333] cursor-pointer">
                <input
                  type="checkbox"
                  name="fastResponse"
                  checked={filters.fastResponse || false}
                  onChange={handleChange}
                  className="mr-2.5 h-[15px] w-[15px] rounded border-gray-300 accent-[#00a5ec] cursor-pointer"
                />
                Fast response <BsQuestionCircle className="ml-1.5 text-[#555] text-[13px]" />
              </label>

              <label className="flex items-center text-[14px] text-[#333] cursor-pointer">
                <input
                  type="checkbox"
                  name="earlyApplicant"
                  checked={filters.earlyApplicant || false}
                  onChange={handleChange}
                  className="mr-2.5 h-[15px] w-[15px] rounded border-gray-300 accent-[#00a5ec] cursor-pointer"
                />
                Early applicant <BsQuestionCircle className="ml-1.5 text-[#555] text-[13px]" />
              </label>

              <label className="flex items-center text-[14px] text-[#333] cursor-pointer">
                <input
                  type="checkbox"
                  name="forWomen"
                  checked={filters.forWomen || false}
                  onChange={handleChange}
                  className="mr-2.5 h-[15px] w-[15px] rounded border-gray-300 accent-[#00a5ec] cursor-pointer"
                />
                Internships for women <BsQuestionCircle className="ml-1.5 text-[#555] text-[13px]" />
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={clearFilters}
            className="text-[#00a5ec] text-[14px] font-medium hover:underline"
          >
            Clear all
          </button>
        </div>
      </div>

      {/* keyword search box */}
      <div className="bg-white border border-[#eeeeee] rounded-[4px] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-center">
        <h3 className="font-semibold text-[#333] text-[16px] mb-5">Keyword Search</h3>
        <div className="flex">
          <input
            type="text"
            name="keyword"
            placeholder="e.g. Design, Mumbai, Infosys"
            value={filters.keyword || ''}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border border-[#e5e5e5] border-r-0 rounded-l-[3px] focus:outline-none focus:border-[#00a5ec] text-[14px] text-[#333] placeholder-[#999]"
          />
          <button className="bg-[#00a5ec] px-4 rounded-r-[3px] text-white flex items-center justify-center hover:bg-[#008bdc] transition-colors">
            <FaSearch className="text-[14px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
