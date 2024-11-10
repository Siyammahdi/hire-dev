"use client"
import React, { useState } from 'react';

const ProjectForm: React.FC = () => {
  const [focusStates, setFocusStates] = useState({
    name: false,
    email: false,
    service: false,
    budget: false,
    details: false,
  });

  const handleFocus = (field: string, isFocused: boolean) => {
    setFocusStates((prevState) => ({
      ...prevState,
      [field]: isFocused,
    }));
  };

  return (
    <div className="flex items-center justify-center h-[72vh] text-gray-200 ">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-5xl font-bold text-gray-300 mb-8">SHARE YOUR PROJECT</h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <label
                htmlFor="name"
                className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                  focusStates.name ? 'text-gray-400' : 'text-gray-200'
                } ${focusStates.name ? '-translate-y-5 scale-90' : 'translate-y-2 scale-100'}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onFocus={() => handleFocus('name', true)}
                onBlur={(e) => handleFocus('name', e.target.value !== '')}
                className="w-full border-b border-gray-200 bg-transparent focus:outline-none text-gray-200 p-2 pt-6"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                  focusStates.email ? 'text-gray-400' : 'text-gray-200'
                } ${focusStates.email ? '-translate-y-5 scale-90' : 'translate-y-2 scale-100'}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onFocus={() => handleFocus('email', true)}
                onBlur={(e) => handleFocus('email', e.target.value !== '')}
                className="w-full border-b border-gray-200 bg-transparent focus:outline-none text-gray-200 p-2 pt-6"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Field */}
            <div className="relative">
              {/* <label
                htmlFor="service"
                className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                  focusStates.service ? 'text-gray-300' : 'text-gray-500'
                } ${focusStates.service ? '-translate-y-5 scale-90' : 'translate-y-2 scale-100'}`}
              >
                Service
              </label> */}
              <select
                id="service"
                name="service"
                onFocus={() => handleFocus('service', true)}
                onBlur={(e) => handleFocus('service', e.target.value !== '')}
                className="w-full text-base border-b border-gray-200 bg-transparent focus:outline-none text-gray-200 p-2 pt-6"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>

            {/* Budget Field */}
            <div className="relative">
              {/* <label
                htmlFor="budget"
                className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                  focusStates.budget ? 'text-gray-300' : 'text-gray-500'
                } ${focusStates.budget ? '-translate-y-5 scale-90' : 'translate-y-2 scale-100'}`}
              >
                Budget
              </label> */}
              <select
                id="budget"
                name="budget"
                onFocus={() => handleFocus('budget', true)}
                onBlur={(e) => handleFocus('budget', e.target.value !== '')}
                className="w-full text-base border-b border-gray-200 bg-transparent focus:outline-none text-gray-200 p-2 pt-6"
              >
                <option value="">Select budget</option>
                <option value="100-500">$100 - $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-5000">$1000 - $5000</option>
              </select>
            </div>
          </div>

          {/* Project Details Field */}
          <div className="relative">
            <label
              htmlFor="details"
              className={`absolute left-0 top-5 text-sm transition-all duration-200 ${
                focusStates.details ? 'text-gray-300' : 'text-gray-200'
              } ${focusStates.details ? '-translate-y-5 scale-90' : 'translate-y-2 scale-100'}`}
            >
              Project details (optional)
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              onFocus={() => handleFocus('details', true)}
              onBlur={(e) => handleFocus('details', e.target.value !== '')}
              className="w-full text-base border-b border-gray-200 bg-transparent focus:outline-none text-gray-200 p-2 pt-6"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-200 text-black font-semibold text-sm hover:bg-gray-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
