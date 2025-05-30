'use client';
import { showToast } from '@/ui-components/Toast';
import React, { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const formRef = useRef<HTMLDivElement | null>(null);

  // Update the window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Track the form's position relative to the viewport
  const getFormPosition = () => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      return rect.top + window.scrollY; // Get the top position of the form
    }
    return 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: email,
          subject: 'Newsletter Subscription',
          emailType: 'newsletter',
          email, // Only email is needed for newsletter
        }),
      });

      const result = await response.json();

      if (result.success) {
        setEmail('');
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
        showToast('Request sent for subscription', 'success');
      } else {
        showToast('Failed to subscribe. Please try again.', 'error');
      }
    } catch (error) {
      showToast('An error occurred. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary text-white py-10 px-4 text-center">
      <h3 className="text-4xl font-normal pb-5">Sign up and save</h3>
      <p className="mt-2 mb-5 text-lg">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg text-black focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      {showConfetti && (
        <Confetti
          width={window.innerWidth - 20}
          height={windowHeight}
          recycle={false} // Set to false to avoid looping confetti
          initialVelocityY={5} // Adjust the confetti's direction
          numberOfPieces={150} // Adjust thne intensity of the confetti
          gravity={0.2} // Adjust the gravity effect
          style={{
            position: 'absolute',
            top: getFormPosition() - 150, // Position the confetti below the form
            left: 0,
          }}
        />
      )}
    </div>
  );
};

export default Newsletter;
