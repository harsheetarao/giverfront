import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { Page } from '@/components/page';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2, XCircle, Clock, Calendar, MapPin, Lock } from 'lucide-react';
import Logo from '@/styles/ui/logos/gone.svg';
import Head from 'next/head';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface PickupItem {
  description: string;
  fileUrls: string[];
  status: 'pending' | 'accepted' | 'rejected';
  rejectionReason?: string;
}

interface PickupRequest {
  name: string;
  phoneNumber?: string;
  email?: string;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  items: PickupItem[];
  availableTimes: string[];
  address: string;
  scheduledTime?: string;
  createdAt: string;
}

const PickupStatus = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pickupData, setPickupData] = useState<PickupRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Check if user has admin role (you'll need to implement this based on your auth setup)
        setIsAuthenticated(true);
        // Example: check if user email is an admin email
        setIsAdmin(user.email?.endsWith('@gone.com') || false);
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPickupRequest = async () => {
      console.log('Fetching pickup request with ID:', id);
      
      if (!id || typeof id !== 'string') {
        console.log('No valid ID yet');
        return;
      }

      try {
        const docRef = doc(db, 'pickupRequests', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data());
          setPickupData(docSnap.data() as PickupRequest);
        } else {
          console.log('No such document');
          setError('Pickup request not found');
        }
      } catch (err) {
        console.error('Error fetching pickup request:', err);
        setError('Error fetching pickup request');
      } finally {
        setLoading(false);
      }
    };

    fetchPickupRequest();
  }, [id]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'text-green-600';
      case 'rejected':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      case 'scheduled':
        return 'text-blue-600';
      case 'completed':
        return 'text-green-800';
      case 'cancelled':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle2 className="w-6 h-6 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-600" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-600" />;
      case 'scheduled':
        return <Calendar className="w-6 h-6 text-blue-600" />;
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-800" />;
      case 'cancelled':
        return <XCircle className="w-6 h-6 text-gray-600" />;
      default:
        return null;
    }
  };

  const renderContactInfo = () => {
    if (!isAuthenticated) {
      return (
        <div className="border-b pb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Lock className="w-4 h-4" />
            <span>Contact information is only visible to authorized users</span>
          </div>
          <button
            onClick={() => router.push('/login')}
            className="mt-2 text-[#4B7163] hover:underline"
          >
            Log in to view contact details
          </button>
        </div>
      );
    }

    return (
      <div className="border-b pb-4">
        <h2 className="font-semibold text-gray-900 mb-3">Contact Information</h2>
        <div className="space-y-2 text-gray-600">
          <p>{pickupData?.name}</p>
          <p>{pickupData?.email || pickupData?.phoneNumber}</p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {pickupData?.address}
          </p>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <Page>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </Page>
    );
  }

  if (error || !pickupData) {
    return (
      <Page>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || 'Something went wrong'}
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-[#4B7163] hover:underline"
          >
            Return Home
          </button>
        </div>
      </Page>
    );
  }

  return (
    <Page>
        <Head>
        <title>Pickup Request Status | Gone</title>
        <meta name="description" content="Track the status of your Gone pickup request" />
        </Head>
      <Header 
        menuItems={[]}
        logo={{
          src: Logo,
          alt: "Gone Logo",
          width: 300,
          height: 75,
          href: "/"
        }}
      />
      

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Pickup Request Status
            </h1>
            <div className="flex items-center gap-2 mb-6">
              {getStatusIcon(pickupData?.status || 'pending')}
              <span className={`font-medium ${getStatusColor(pickupData?.status || 'pending')}`}>
                {(pickupData?.status || 'pending').charAt(0).toUpperCase() + 
                 (pickupData?.status || 'pending').slice(1)}
              </span>
            </div>

            <div className="space-y-6">
              {/* Contact Information - Now conditionally rendered */}
              {renderContactInfo()}

              {/* Scheduled Time */}
              {pickupData?.scheduledTime && (
                <div className="border-b pb-4">
                  <h2 className="font-semibold text-gray-900 mb-3">Scheduled Pickup</h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {new Date(pickupData.scheduledTime).toLocaleString()}
                  </div>
                </div>
              )}

              {/* Preferred Times (if not yet scheduled) */}
              {!pickupData?.scheduledTime && pickupData?.availableTimes && (
                <div className="border-b pb-4">
                  <h2 className="font-semibold text-gray-900 mb-3">Preferred Pickup Times</h2>
                  <div className="space-y-2">
                    {pickupData.availableTimes.map((time, index) => (
                      <div key={time} className="text-gray-600 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {new Date(time).toLocaleString()}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Items */}
              <div>
                <h2 className="font-semibold text-gray-900 mb-3">Items</h2>
                <div className="space-y-4">
                  {pickupData?.items.map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={item.fileUrls[0]}
                          alt={item.description}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900">
                            {item.description}
                          </h3>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(item.status)}
                            <span className={`text-sm ${getStatusColor(item.status)}`}>
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        {item.rejectionReason && (
                          <p className="text-sm text-red-600 mt-2">
                            Reason: {item.rejectionReason}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>Need help? Contact us at</p>
            <a 
              href="mailto:support@gone.com"
              className="text-[#4B7163] hover:underline"
            >
              support@gone.com
            </a>
          </div>
        </div>
      </div>

      <Footer 
        copyrightText="© 2024 gone.com. All rights reserved."
      />
    </Page>
  );
};

export default PickupStatus;