'use client';
import { showToast } from '@/ui-components/Toast';
import { useState } from 'react';
import Confetti from 'react-confetti';

const BulkPurchaseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    city: '',
    purchaseIntent: '',
    phone: '',
    message: '',
    businessNature: '',
    from: 'Bulk Purchase',
    subject: 'New Purchase',
    emailType: 'bulk-purchase',
  });

  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
      showToast('Your request has been sent successfully!', 'success');
      setFormData({
        name: '',
        email: '',
        institution: '',
        city: '',
        purchaseIntent: '',
        phone: '',
        message: '',
        businessNature: '',
        from: 'Bulk Purchase',
        subject: 'New Purchase',
        emailType: 'bulk-purchase',
      });
    } else {
      showToast('Failed to send message. Please try again.', 'error');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-8 border border-gray-200 rounded-lg my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">For Bulk Purchasing</h2>
      <p className="text-gray-600 text-sm mb-6 text-center">
        If you are a wholesaler, restaurant, or require more than 1000 pieces, please fill in the details below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-gray-700">Are you looking to purchase more than 1000 pcs?</label>
          <select
            name="purchaseIntent"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={formData.purchaseIntent}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="block text-gray-700">
            Institution/Shop/Restaurant <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="institution"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700">
            Nature of Your Business <span className="text-red-500">*</span>
          </label>
          <select
            name="businessNature"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={formData.businessNature}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Retailer">Retailer</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Restaurant">Restaurant</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:scale-105 transition"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        {showConfetti && <Confetti width={window.innerWidth - 20} />}
      </form>
    </div>
  );
};

export default BulkPurchaseForm;
