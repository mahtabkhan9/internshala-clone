import React, { useState, useEffect } from 'react';
import FiltersSidebar from './FiltersSidebar';
import InternshipCard from './InternshipCard';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiFilter } from 'react-icons/fi';

const SearchPage = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    profile: '',
    location: '',
    duration: '',
    stipend: 0,
  });

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://internshala.com/hiring/search');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // grab internships using the ordered ids from meta
        const fetchedInternships = data.internship_ids.map(
          id => data.internships_meta[id]
        ).filter(Boolean); // clear out undefined stuff just to be safe
        
        setInternships(fetchedInternships);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  const filteredInternships = internships.filter(internship => {
    // check profile match
    if (filters.profile) {
      const searchProfile = filters.profile.toLowerCase();
      const titleMatch = internship.title?.toLowerCase().includes(searchProfile);
      const profileMatch = internship.profile_name?.toLowerCase().includes(searchProfile);
      if (!titleMatch && !profileMatch) return false;
    }

    // check location match
    if (filters.location) {
      const searchLocation = filters.location.toLowerCase();
      // check wfh flag
      const wfhMatch = 'work from home'.includes(searchLocation) && internship.work_from_home;
      const locationMatch = internship.location_names.some(loc => loc.toLowerCase().includes(searchLocation));
      if (!wfhMatch && !locationMatch) return false;
    }

    // check duration
    if (filters.duration) {
      // api gives strings like "3 months", so parse it
      // then compare with max duration
      const durationMatch = parseInt(internship.duration) <= parseInt(filters.duration);
      if (!durationMatch) return false;
    }

    // check stipend
    if (filters.stipend > 0) {
      // look for a valid number in salaryValue1
      const salaryVal = internship.stipend.salaryValue1 || 0;
      if (salaryVal < filters.stipend) return false;
    }

    return true;
  });

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* top section: breadcrumbs and title */}
      <div className="mb-6">
        <div className="flex items-center text-[13px] text-[#484848] mb-4">
          <span className="cursor-pointer hover:text-[#00a5ec]">Home</span>
          <MdKeyboardArrowRight className="mx-1 text-gray-500 text-base" />
          <span className="text-[#484848]">Internships</span>
        </div>
      </div>

      {/* Mobile Filters Pill Button */}
      <div className="md:hidden flex justify-center mb-6">
        <button 
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex items-center text-[#484848] font-medium text-[14px] border border-gray-300 rounded-full px-5 py-1.5 hover:bg-gray-50"
        >
          Filters <FiFilter className="ml-2 text-[#00a5ec] text-lg" />
        </button>
      </div>

      <div className="md:ml-[304px] lg:ml-[334px] text-center mb-6">
        <h1 className="text-[20px] md:text-[22px] font-semibold text-[#333333] mb-2">
          {filteredInternships.length} Total Internships
        </h1>
        <p className="text-[#666666] text-[14px]">
          Latest Summer Internships in India
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[280px] lg:w-[310px] flex-shrink-0">
          <FiltersSidebar 
            filters={filters} 
            setFilters={setFilters} 
            isMobileOpen={isMobileFiltersOpen} 
            setIsMobileOpen={setIsMobileFiltersOpen} 
          />
        </div>
        
        <div className="flex-1 min-w-0">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-md border border-red-200">
              {error}
            </div>
          ) : filteredInternships.length === 0 ? (
            <div className="bg-white p-10 text-center rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No internships found</h3>
              <p className="text-gray-500">Try adjusting your filters to find more opportunities.</p>
              <button 
                onClick={() => setFilters({ profile: '', location: '', duration: '', stipend: 0 })}
                className="mt-4 px-4 py-2 bg-brand text-white rounded hover:bg-brand-hover transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div>
              {filteredInternships.map(internship => (
                <InternshipCard key={internship.id} internship={internship} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
