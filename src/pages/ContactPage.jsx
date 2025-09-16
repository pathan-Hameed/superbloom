// Import useState for managing form state and the supabase client
import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Make sure this path is correct

const ContactPage = () => {
  // State to track if the form is currently submitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to hold any success or error messages
  const [statusMessage, setStatusMessage] = useState('');

  // The function that runs when the form is submitted
  async function handleSubmit(event) {
    // Prevent the default browser refresh
    event.preventDefault();
    if (isSubmitting) return; // Don't submit if already submitting

    setIsSubmitting(true);
    setStatusMessage(''); // Clear previous messages

    // Get all form data
    const formData = new FormData(event.currentTarget);
    const leadData = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // Use the supabase client to insert the data into the 'leads' table
      const { error } = await supabase.from('leads').insert([leadData]);

      if (error) {
        // If Supabase returns an error, throw it to the catch block
        throw error;
      }

      // If successful, show a success message and reset the form
      setStatusMessage('Thanks for your message! We will get back to you soon.');
      event.target.reset();

    } catch (error) {
      // If any error occurs, log it and show an error message
      console.error('Error submitting form:', error.message);
      setStatusMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      // Whether it succeeds or fails, stop the submitting state
      setIsSubmitting(false);
    }
  }

  return (
    <main className="pt-24 bg-black text-white">
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            Let's build something <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              great together.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Fill out the form below or email us
            directly, and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Email Us
                  </h3>
                  <p className="text-gray-300 mt-1">Our inbox is always open.</p>
                  <a href="mailto:hello@superbloom.agency" className="text-white hover:underline">
                    hello@superbloom.agency
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Our Location
                  </h3>
                  <p className="text-gray-300 mt-1">Hyderabad, Telangana</p>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-[#111] p-8 rounded-2xl border border-gray-800">
                {/* Add the onSubmit handler to the form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-input bg-[#1a1a1a] border border-[#333] rounded-lg py-3 px-4 text-white w-full focus:outline-none focus:border-[#A855F7]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input bg-[#1a1a1a] border border-[#333] rounded-lg py-3 px-4 text-white w-full focus:outline-none focus:border-[#A855F7]"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="form-input bg-[#1a1a1a] border border-[#333] rounded-lg py-3 px-4 text-white w-full focus:outline-none focus:border-[#A855F7]"
                    >
                      <option>Web Designing</option>
                      <option>UI/UX Designing</option>
                      <option>Custom Web Development</option>
                      <option>E-commerce Websites</option>
                      <option>Content Creation</option>
                      <option>Email Automations</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="form-input bg-[#1a1a1a] border border-[#333] rounded-lg py-3 px-4 text-white w-full focus:outline-none focus:border-[#A855F7]"
                    />
                  </div>
                  <div className="mt-8 text-right">
                    {/* Display the status message if it exists */}
                    {statusMessage && <p className="text-sm text-gray-400 text-left mb-4">{statusMessage}</p>}
                    <button
                      type="submit"
                      // Disable the button while submitting
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Change button text while submitting */}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;