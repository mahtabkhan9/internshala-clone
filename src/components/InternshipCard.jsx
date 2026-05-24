import React, { useState } from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { BsClockHistory, BsLightningChargeFill } from 'react-icons/bs';
import { IoLocationOutline, IoCashOutline, IoCalendarOutline, IoDocumentTextOutline } from 'react-icons/io5';

const InternshipCard = ({ internship }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100 p-5 md:p-6 mb-4 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[18px] font-semibold text-[#333333] mb-1">
            {internship.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[15px] font-medium text-[#666666]">
              {internship.company_name}
            </p>
            {internship.is_active !== false && (
              <span className="flex-shrink-0 whitespace-nowrap inline-flex items-center text-[12px] font-medium text-[#00a5ec] border border-[#00a5ec] px-2.5 py-0.5 rounded-full">
                <FiTrendingUp className="mr-1" /> Actively hiring
              </span>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 ml-4">
          <div className="w-12 h-12 flex items-center justify-center">
            {internship.company_logo && !imageError ? (
              <img
                src={`https://internshala.com/cached_uploads/logo/${internship.company_logo}`}
                alt={internship.company_name}
                className="max-w-full max-h-full object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-xl text-gray-400 font-bold uppercase">
                {internship.company_name.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-[#484848] text-[14px] mb-4 font-medium">
        <div className="flex items-center">
          <IoLocationOutline className="mr-1.5 text-gray-500 text-lg" />
          <span>
            {internship.work_from_home
              ? 'Work From Home'
              : internship.location_names?.join(', ')}
          </span>
        </div>
        <div className="flex items-center">
          <IoCashOutline className="mr-1.5 text-gray-500 text-lg" />
          <span>{internship.stipend?.salary}</span>
        </div>
        <div className="flex items-center">
          <IoCalendarOutline className="mr-1.5 text-gray-500 text-lg" />
          <span>{internship.duration}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center bg-[#ebf8ff] text-[#00a5ec] text-[12px] px-2.5 py-1.5 rounded-lg">
          <BsClockHistory className="mr-1.5 text-[14px]" />
          {internship.posted_by_label || internship.posted_on}
        </span>
        
        {internship.application_status_message && internship.application_status_message.to_show ? (
          <span className="inline-flex items-center bg-[#fff8e5] text-[#333333] text-[12px] px-2.5 py-1.5 rounded-lg">
            <BsLightningChargeFill className="mr-1.5 text-[#f89c0e] text-[14px]" />
            {internship.application_status_message.message || 'Be an early applicant'}
          </span>
        ) : (
          <span className="inline-flex items-center bg-[#fff8e5] text-[#333333] text-[12px] px-2.5 py-1.5 rounded-lg">
            <BsLightningChargeFill className="mr-1.5 text-[#f89c0e] text-[14px]" />
            Be an early applicant
          </span>
        )}

        {internship.ppo_label_value && (
          <span className="inline-flex items-center bg-[#f2f8f1] text-[#228b22] text-[12px] px-2.5 py-1.5 rounded-lg">
            {internship.ppo_label_value}
          </span>
        )}

        {internship.labels_app_in_card && internship.labels_app_in_card.map((label, index) => (
          <span key={index} className="inline-flex items-center bg-[#f8f9fa] text-[#666] text-[12px] px-2.5 py-1.5 rounded-lg border border-gray-200">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InternshipCard;
