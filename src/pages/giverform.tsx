import React, { useState } from 'react';
import { Camera, ArrowRight, Clock, Leaf } from 'lucide-react';

import { Page } from '@/components/page';
import { PickupRequestForm } from '@/components/PickupRequestForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Logo from '@/styles/ui/logos/gone.svg';
import Script from 'next/script';
import { db } from '@/firebaseConfig';  
import { addDoc, collection } from 'firebase/firestore';
import TermsOfService from '@/components/TermsOfService';
import Privacy from '@/components/Privacy';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GiverForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const [completedFormSteps, setCompletedFormSteps] = useState<number[]>([]);

  const handleFeedbackSubmit = async (feedbackText: string, userInfo: { name: string, contact: string }) => {
    try {
      const feedbackData = {
        name: userInfo.name,
        contact: userInfo.contact,
        feedback: feedbackText,
        createdAt: new Date().toISOString(),
        pickupRequestId: null as string | null
      };

      const docRef = await addDoc(collection(db, 'feedback'), feedbackData);
      console.log('Feedback submitted with ID:', docRef.id);
      
   
      setFormMessage('Thank you for your feedback!');
      setFeedback('');
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFormMessage('Failed to submit feedback. Please try again.');
    }
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      console.log('handleSubmit called with data:', data);
      const processedItems = data.items.map((item: any) => ({
        description: item.description || '',
        fileUrls: item.fileUrls || [],
        status: 'pending',
      }));

      const pickupData = {
        name: data.fullName,
        phoneNumber: data.contact.includes('@') ? '' : data.contact,
        email: data.contact.includes('@') ? data.contact : '',
        createdAt: new Date().toISOString(),
        status: 'pending',
        items: processedItems,
        availableTimes: data.availableTimes,
        address: data.address,
        messages: []
      };

      const docRef = await addDoc(collection(db, 'pickupRequests'), pickupData);

      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notify-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requestId: docRef.id,
          phoneNumber: data.contact,
          name: data.fullName,
          email: data.contact.includes('@') ? data.contact : ''
        }),
      });

      localStorage.removeItem('formData');
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Page>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="lazyOnload"
        onLoad={() => setIsLoaded(true)}
      />
      <Header 
        menuItems={[]}
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
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              Let's Find Your Items a New Home
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              You're about to join thousands of others who've chosen to declutter mindfully
            </p>
          
            <h3 className="font-rockwell text-lg text-[#4B7163] mb-2">
                Welcome to Gone.com!
              </h3>
              <p className="text-[#5A7C6F] mb-4">
                Send us information about what you would like to have "gone", we review it and
                if we think we can find a home, in a sustainable way we'll schedule a free pickup. 
              </p>
          </div>
       
          {isLoaded ? (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                <PickupRequestForm 
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  className="border-none shadow-none p-0"
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateSelect={setSelectedDate}
                  onTimeSelect={setSelectedTime}
                  availableDates={[
                    { date: '2024-03-20', requestCount: 2 },
                    { date: '2024-03-21', requestCount: 1 },
                    { date: '2024-03-22', requestCount: 3 },
                  ]}
                  onStepChange={(step) => {
                    setCurrentFormStep(step);
                  }}
                  onCompletedStepsChange={setCompletedFormSteps}
                />

                {currentFormStep === 1 && !completedFormSteps?.includes(1) && (
                  <div className="mt-8 space-y-6">
                    <div className="bg-[#F8FAF9] rounded-xl p-6 border-l-4 border-[#E67C45]">
                      <div className="mt-3">
                        <h4 className="font-semibold text-[#E67C45] mb-2">IMPORTANT:</h4>
                        <p className="text-gray-700">
                          We do not take:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 ml-2 mt-1 space-y-1">
                          <li>Pianos</li>
                          <li>Mattresses</li>
                          <li>Construction materials</li>
                          <li>Hazardous or flammable materials</li>
                          <li>Damaged or malodorous furniture</li>
                          <li>Food</li>
                          <li>Infant products</li>
                          <li>Personal hygiene/care products</li>
                          <li>Swimming pools</li>
                          <li>Firearms</li>
                          <li>Anything that is damaged, incomplete or not readily reusable by another</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-start gap-3 text-sm text-gray-500">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p>
                    Most submissions take less than 2 minutes. We'll review your photos 
                    and get back to you within one business day.
                  </p>
                </div>
              </div>

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
          ) : (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-gray-500">
            Questions? Our team is here to help guide you through the process.
            <a 
              href="mailto:help@gone.com" 
              className="text-green-600 font-medium ml-2 hover:text-green-700"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <Footer 
        copyrightText="© 2024 gone.com. All rights reserved."
        additionalContent={
          <div className="text-center text-sm mt-2">
            <button 
              onClick={() => setIsPrivacyVisible(true)} 
              className="hover:underline mx-2"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setIsTermsVisible(true)} 
              className="hover:underline mx-2"
            >
              Terms of Service
            </button>
          </div>
        }
      />

      <TermsOfService 
        isVisible={isTermsVisible} 
        onClose={() => setIsTermsVisible(false)} 
      />
      <Privacy 
        isVisible={isPrivacyVisible} 
        onClose={() => setIsPrivacyVisible(false)} 
      />
    </Page>
  );
};

export default GiverForm;