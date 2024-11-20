import React from 'react';
import { Camera, ArrowRight, Clock, Leaf } from 'lucide-react';
import '@/styles/globals.css';
import { Page } from '@/components/page';
import { PickupRequestForm } from '@/components/PickupRequestForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Logo from '@/styles/ui/logos/gone.svg';
import Script from 'next/script';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GiverForm = () => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <Page>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <Header 
        menuItems={menuItems}
        logo={{
          src: Logo,
          alt: "Gone Logo",
          width: 300,
          height: 75,
          href: "https://gone.com"
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              Let's Find Your Items a New Home
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              You're about to join thousands of others who've chosen to declutter mindfully
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Column */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
                <Camera className="w-5 h-5" /> <br />
                Start with photos. It takes less than 2 minutes <br /> <br />
              </div>
              
              {/* Replace placeholder with PickupRequestForm */}
              <PickupRequestForm 
                onSubmit={handleSubmit}
                className="border-none shadow-none p-0"
                availableDates={[
                  { date: '2024-03-20', requestCount: 2 },
                  { date: '2024-03-21', requestCount: 1 },
                  { date: '2024-03-22', requestCount: 3 },
                ]}
              />

              <div className="mt-4 flex items-start gap-3 text-sm text-gray-500">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  Most submissions take less than 2 minutes. We'll review your photos 
                  and get back to you within one business day.
                </p>
              </div>
            </div>

            {/* Impact Column */}
            <div className="lg:w-80 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Your Impact Today
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-green-100 rounded-full">
                      <Leaf className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        Every item you submit helps build a more sustainable future by 
                        extending its useful life
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 bg-green-100 rounded-full">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        We carefully evaluate each item to find its ideal next purpose - 
                        whether through donation, reuse, or recycling
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Proof */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  What Others Say
                </h3>
                <div className="space-y-4">
                  <blockquote className="text-sm text-gray-600">
                    "I was amazed at how easy the entire process was. They picked everything 
                    up the next day and I finally got my garage back!"
                    <footer className="mt-2 text-gray-500">
                      — Michelle R.
                    </footer>
                  </blockquote>
                  <blockquote className="text-sm text-gray-600">
                    "Such a weight off my shoulders knowing my things would be used by 
                    someone who needs them instead of ending up in a landfill."
                    <footer className="mt-2 text-gray-500">
                      — James T.
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Our Promise
                </h3>
                <p className="text-sm text-gray-600">
                  We handle everything with care and consideration. Your items will 
                  be thoughtfully placed where they can have the greatest positive impact.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Questions? Our team is here to help guide you through the process.
            <button className="text-green-600 font-medium ml-2 hover:text-green-700">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <Footer 
        copyrightText="© 2024 gone.com. All rights reserved."
        additionalContent={
          <div className="text-center text-sm mt-2">
            <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
            <a href="/terms" className="hover:underline mx-2">Terms of Service</a>
          </div>
        }
      />
    </Page>
  );
};

export default GiverForm;