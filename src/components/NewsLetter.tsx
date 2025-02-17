'use client';
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  //   const [loading, setLoading] = useState(false);
  //   const [message, setMessage] = useState('');

  //   const handleSubmit = async (e: React.FormEvent) => {
  //   };

  return (
    <div className="bg-primary text-white py-10 px-4 text-center">
      <h3 className="text-4xl font-normal pb-5">Sign up and save</h3>
      <p className="mt-2 mb-5 text-lg">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>
      <form
        // onSubmit={handleSubmit}
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
          //   disabled={loading}
        >
          {/* {loading ? 'Submitting...' : 'Subscribe'} */}
          Subscribe
        </button>
      </form>
      {/* {message && <p className="mt-4">{message}</p>} */}
    </div>
  );
};

export default Newsletter;
