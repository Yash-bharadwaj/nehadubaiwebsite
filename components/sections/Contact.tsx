import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '+971552574806';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let whatsappMessage = `Hello! I'm interested in booking Neha for an event.\n\n`;
    
    if (name) {
      whatsappMessage += `Name: ${name}\n`;
    }
    
    if (email) {
      whatsappMessage += `Email: ${email}\n`;
    }
    
    if (eventType) {
      whatsappMessage += `Event Type: ${eventType}\n`;
    }
    
    if (eventDate) {
      whatsappMessage += `Event Date: ${eventDate}\n`;
    }
    
    if (message) {
      whatsappMessage += `\nMessage:\n${message}`;
    }
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setName('');
    setEmail('');
    setEventType('');
    setEventDate('');
    setMessage('');
  };

  return (
    <SectionWrapper id="contact" className="py-12 md:py-16 flex items-center justify-center min-h-[80vh]">
      <div className="relative rounded-3xl overflow-hidden p-4 sm:p-8 md:p-20 text-center border border-white/50 dark:border-white/10 bg-white/40 dark:bg-brand-dark-surface/40 backdrop-blur-xl shadow-xl shadow-stone-200/50 dark:shadow-black/50 transition-colors w-full max-w-4xl mx-auto">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/50 dark:bg-purple-900/20 blur-[120px] rounded-full pointer-events-none transition-colors"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-100/50 dark:bg-gold-600/10 blur-[100px] rounded-full pointer-events-none transition-colors"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-brand-charcoal dark:text-white transition-colors">Let's Create Magic</h2>
            <p className="text-stone-600 dark:text-stone-300 mb-8 sm:mb-12 text-base sm:text-lg transition-colors px-2">
            Dates fill up quickly for the season. Reach out today to check availability and discuss how Neha can elevate your next event.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-left bg-white/80 dark:bg-brand-dark-surface/90 p-4 sm:p-6 md:p-8 rounded-2xl border border-stone-100 dark:border-white/5 shadow-xl transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg p-3 sm:p-4 text-base text-brand-charcoal dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-stone-400" 
                            placeholder="John Doe" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg p-3 sm:p-4 text-base text-brand-charcoal dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-stone-400" 
                            placeholder="john@company.com" 
                        />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">Event Type</label>
                        <select 
                            value={eventType}
                            onChange={(e) => setEventType(e.target.value)}
                            className="w-full bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg p-3 sm:p-4 text-base text-brand-charcoal dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="">Select Event Type</option>
                            <option value="Corporate Event">Corporate Event</option>
                            <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                            <option value="Award Ceremony">Award Ceremony</option>
                            <option value="Private Party">Private Party</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">Date</label>
                        <input 
                            type="date" 
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="w-full bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg p-3 sm:p-4 text-base text-brand-charcoal dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all" 
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">Message</label>
                    <textarea 
                        rows={4} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg p-3 sm:p-4 text-base text-brand-charcoal dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all placeholder:text-stone-400 resize-none" 
                        placeholder="Tell us about your event..."
                    ></textarea>
                </div>
                
                <Button type="submit" className="w-full text-base sm:text-lg font-bold shadow-lg shadow-gold-500/20 py-3 sm:py-4" size="lg" variant="secondary">Submit Inquiry</Button>
            </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;