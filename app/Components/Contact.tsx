"use client";

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface FocusStates {
  name: boolean;
  email: boolean;
  service: boolean;
  budget: boolean;
  details: boolean;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  service: Yup.string().required('Please select a service'),
  budget: Yup.string().required('Please select a budget'),
});

const ProjectForm: React.FC = () => {
  const [focusStates, setFocusStates] = useState<FocusStates>({
    name: false,
    email: false,
    service: false,
    budget: false,
    details: false,
  });

  const handleFocus = (field: keyof FocusStates, isFocused: boolean): void => {
    setFocusStates((prevState) => ({
      ...prevState,
      [field]: isFocused,
    }));
  };

  return (
    <div className="flex items-center justify-center h-[70vh] md:h-[74vh] text-gray-200">
      <div className="w-full max-w-2xl p-1 md:p-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-300 md:mb-8">SHARE YOUR PROJECT</h1>

        <Formik
          initialValues={{
            name: '',
            email: '',
            service: '',
            budget: '',
            details: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission here
            console.log('Form data:', values);
          }}
        >
          {({ setFieldValue, handleBlur }) => (
            <Form className="md:space-y-6">
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
                  <Field
                    type="text"
                    name="name"
                    onFocus={() => handleFocus('name', true)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      handleFocus('name', e.target.value !== '');
                      handleBlur(e);
                    }}
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4 md:pt-6"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
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
                  <Field
                    type="email"
                    name="email"
                    onFocus={() => handleFocus('email', true)}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      handleFocus('email', e.target.value !== '');
                      handleBlur(e);
                    }}
                    className="w-full border-b-2 border-gray-200 bg-transparent focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4 md:pt-6"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Field */}
                <div className="relative">
                  <Select>
                    <SelectTrigger
                      onFocus={() => handleFocus('service', true)}
                      onBlur={(e: React.FocusEvent<HTMLButtonElement>) =>
                        handleFocus('service', e.target.value !== '')
                      }
                      className="w-full text-base bg-transparent focus:outline-none focus:ring-0 rounded-none text-gray-200 pb-5 pt-4 px-0 md:pt-6 border-b-2 border-gray-200 !border-t-0 !border-r-0 !border-l-0"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="border-none">
                      <SelectItem value="web-development" onClick={() => setFieldValue('service', 'web-development')}>
                        Web Development
                      </SelectItem>
                      <SelectItem value="design" onClick={() => setFieldValue('service', 'design')}>
                        Design
                      </SelectItem>
                      <SelectItem value="consulting" onClick={() => setFieldValue('service', 'consulting')}>
                        Consulting
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Budget Field */}
                <div className="relative">
                  <Select>
                    <SelectTrigger
                      onFocus={() => handleFocus('budget', true)}
                      onBlur={(e: React.FocusEvent<HTMLButtonElement>) =>
                        handleFocus('budget', e.target.value !== '')
                      }
                      className="w-full text-base bg-transparent focus:outline-none focus:ring-0 rounded-none text-gray-200 pb-5 pt-4 px-0 md:pt-6 border-b-2 border-gray-200 !border-t-0 !border-r-0 !border-l-0"
                    >
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent className="border-none">
                      <SelectItem value="100-500" onClick={() => setFieldValue('budget', '100-500')}>
                        $100 - $500
                      </SelectItem>
                      <SelectItem value="500-1000" onClick={() => setFieldValue('budget', '500-1000')}>
                        $500 - $1000
                      </SelectItem>
                      <SelectItem value="1000-5000" onClick={() => setFieldValue('budget', '1000-5000')}>
                        $1000 - $5000
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <ErrorMessage name="budget" component="div" className="text-red-500 text-sm" />
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
                <Field
                  as="textarea"
                  name="details"
                  rows={4}
                  onFocus={() => handleFocus('details', true)}
                  onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
                    handleFocus('details', e.target.value !== '')
                  }
                  className="w-full text-base border-b-2 border-gray-200 bg-transparent font-light focus:outline-none focus:ring-0 px-0 text-gray-200 p-2 pt-4 md:pt-6"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gray-200 text-black font-semibold text-sm hover:bg-gray-300"
              >
                SUBMIT
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProjectForm;
