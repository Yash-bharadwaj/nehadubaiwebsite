import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const AboutContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = '+971552574806';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let whatsappMessage = `🎤 *Event Inquiry - Neha Dixit*\n\n`;
    
    if (formData.name) {
      whatsappMessage += `👤 *Name:* ${formData.name}\n`;
    }
    
    if (formData.email) {
      whatsappMessage += `📧 *Email:* ${formData.email}\n`;
    }
    
    if (formData.phone) {
      whatsappMessage += `📱 *Phone:* ${formData.phone}\n`;
    }
    
    if (formData.eventType) {
      whatsappMessage += `🎯 *Event Type:* ${formData.eventType}\n`;
    }
    
    if (formData.eventDate) {
      whatsappMessage += `📅 *Event Date:* ${formData.eventDate}\n`;
    }
    
    if (formData.location) {
      whatsappMessage += `📍 *Location:* ${formData.location}\n`;
    }
    
    if (formData.message) {
      whatsappMessage += `\n💬 *Message:*\n${formData.message}`;
    }
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: '',
      });
    }, 500);
  };

  const eventTypes = [
    'Corporate Event',
    'Wedding / Sangeet',
    'Award Ceremony',
    'Private Party',
    'Community Event',
    'Brand Launch',
    'Other'
  ];

  return (
    <div className="relative bg-brand-primary dark:bg-gradient-to-b dark:from-brand-dark-bg dark:via-brand-dark-surface dark:to-brand-dark-bg overflow-hidden transition-colors">
      {/* Gradients - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-rose-100/20 dark:bg-purple-900/20 rounded-full blur-[120px] transition-opacity"></div>
        <div className="absolute top-[30%] right-0 w-[35%] h-[35%] bg-gold-200/15 dark:bg-gold-600/10 rounded-full blur-[130px] transition-opacity"></div>
        <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] bg-orange-100/20 dark:bg-blue-900/15 rounded-full blur-[100px] transition-opacity"></div>
      </div>

      {/* Professional Pattern - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.08) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01] dark:opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <SectionWrapper className="relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gold-600 dark:text-gold-500 text-sm tracking-widest uppercase font-bold inline-block mb-4 transition-colors">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
              Let's Create Magic Together
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-lg max-w-2xl mx-auto transition-colors">
              Fill out the form below and we'll connect on WhatsApp to discuss your event
            </p>
          </div>

          {/* Creative Form */}
          <form onSubmit={handleSubmit} className="relative">
            {/* Form Background with Glass Effect */}
            <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-stone-200 dark:border-white/10 p-6 md:p-10 shadow-2xl transition-colors">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              <div className="relative z-10 space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white dark:bg-white/5 border-2 border-stone-200 dark:border-white/10 rounded-xl p-4 text-brand-charcoal dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-gold-500 focus:bg-stone-50 dark:focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                        placeholder="Enter your name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white dark:bg-white/5 border-2 border-stone-200 dark:border-white/10 rounded-xl p-4 text-brand-charcoal dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-gold-500 focus:bg-stone-50 dark:focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone and Event Type Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white dark:bg-white/5 border-2 border-stone-200 dark:border-white/10 rounded-xl p-4 text-brand-charcoal dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-gold-500 focus:bg-stone-50 dark:focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                        placeholder="+971 XX XXX XXXX"
                      />
                      {focusedField === 'phone' && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                      Event Type *
                    </label>
                    <div className="relative">
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('eventType')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-white dark:bg-white/5 border-2 border-stone-200 dark:border-white/10 rounded-xl p-4 text-brand-charcoal dark:text-white focus:border-gold-500 focus:bg-stone-50 dark:focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-white dark:bg-brand-dark-surface">Select Event Type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type} className="bg-white dark:bg-brand-dark-surface">
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gold-600 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {focusedField === 'eventType' && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Date and Location Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                      Event Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('eventDate')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-4 text-white focus:border-gold-500 focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                      />
                      {focusedField === 'eventDate' && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                      Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('location')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white dark:bg-white/5 border-2 border-stone-200 dark:border-white/10 rounded-xl p-4 text-brand-charcoal dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-gold-500 focus:bg-stone-50 dark:focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300"
                        placeholder="Event location"
                      />
                      {focusedField === 'location' && (
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2 transition-colors">
                    Tell Us About Your Event
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full bg-white dark:bg-white/5 border-2 border-stone-200 dark:border-white/10 rounded-xl p-4 text-brand-charcoal dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-gold-500 focus:bg-stone-50 dark:focus:bg-white/10 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all duration-300 resize-none"
                      placeholder="Share details about your event, expectations, or any special requirements..."
                    ></textarea>
                    {focusedField === 'message' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white rounded-xl font-bold text-lg shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutContact;

