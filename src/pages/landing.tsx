import React from 'react';
import { ArrowRight, Camera, Clock, Home, Truck, Leaf } from 'lucide-react';
import '@/styles/globals.css';
import { Page } from '@/components/page';
import NextImage from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Logo from '@/styles/ui/logos/gone.svg';

const LandingPage = () => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' }
  ];

  const steps = [
    {
      title: "Take Photos",
      description: "Snap quick photos of your items with your phone - no need for perfect shots, just clear views of what you'd like to rehome",
      icon: Camera
    },
    {
      title: "Schedule Pickup",
      description: "Choose a convenient time slot that works for you. We'll come right to your door at the scheduled time",
      icon: Clock
    },
    {
      title: "Find New Homes",
      description: "We'll ensure your items reach the right destination - whether that's a local family, charity, or recycling facility",
      icon: Home
    }
  ];

  const impactStats = [
    { value: "50K+", label: "Items Rehomed" },
    { value: "1000+", label: "Happy Users" },
    { value: "95%", label: "Success Rate" }
  ];

  return (
    <Page>
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

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Make Your Items Disappear
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The easiest way to give your unused items a second life. 
                Simply send photos, and we'll handle everything else - from pickup to finding the perfect destination.
              </p>
              <a 
                href="/giverform" 
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors flex items-center mx-auto gap-2 w-fit"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <step.icon className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                  <Leaf className="w-5 h-5" />
                  Sustainable Impact
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Responsible Decluttering
                </h2>
                <p className="text-gray-600 mb-8">
                  When you choose gone.com, you're choosing to declutter responsibly. 
                  We carefully evaluate each item to ensure it finds its best possible use - 
                  whether that's donation to local charities, recycling, or redistribution to 
                  those who need it most. Your items get a second life while supporting our 
                  community and environment.
                </p>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">
                    "The easiest way I've found to declutter sustainably" - Sarah K.
                  </span>
                </div>
              </div>
              <div className="flex-1 bg-green-50 p-8 rounded-xl">
                <div className="aspect-square rounded-lg bg-green-100 flex items-center justify-center">
                  <NextImage
                    src="https://gone.com/assets/img/smilingGoneCustomer.png"
                    alt="Sustainability Impact"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Declutter Responsibly?
            </h2>
            <p className="text-green-50 mb-8 max-w-2xl mx-auto">
              Join thousands of others who have discovered the easiest way to give their 
              unused items a meaningful second life. Let us handle everything.
            </p>
            <a 
              href="/giverform" 
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
            >
              Start With Photos
              <ArrowRight className="w-5 h-5" />
            </a>
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

export default LandingPage;