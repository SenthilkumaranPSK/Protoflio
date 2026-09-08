import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, Phone, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';
import { fadeInLeft, fadeInRight, fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const gotcha = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement).value;
    if (gotcha) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwvgvenl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New portfolio message from ${formData.name}`,
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');

      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email me directly at senthil2005kumaran@gmail.com.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-secondary/30 to-transparent relative overflow-hidden">
      <GradientBlob color="secondary" className="w-[26rem] h-[26rem] top-6 left-6" />
      <GradientBlob color="primary" className="w-96 h-96 bottom-6 right-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Open for full-time Applied AI, Backend, and Full-Stack Engineering roles, as well as high-impact client collaborations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Structured Info Bento (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInLeft}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Status Pill */}
            <div className="p-5 rounded-2xl border border-primary/30 bg-card/70 backdrop-blur-md card-glow">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Fast Response SLA</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Typically replying within <span className="text-foreground font-semibold">24 hours</span>. Feel free to connect directly via email or LinkedIn.
              </p>
            </div>

            {/* Direct Channels List */}
            <div className="space-y-2.5">
              {[
                { icon: Mail, label: 'Email Address', val: 'senthil2005kumaran@gmail.com', href: 'mailto:senthil2005kumaran@gmail.com' },
                { icon: Phone, label: 'Direct Phone', val: '+91 94437 26090', href: 'tel:+919443726090' },
                { icon: Linkedin, label: 'LinkedIn Profile', val: 'linkedin.com/in/senthilkumaran75', href: 'https://linkedin.com/in/senthilkumaran75' },
                { icon: Github, label: 'GitHub Profile', val: 'github.com/SenthilkumaranPSK', href: 'https://github.com/SenthilkumaranPSK' },
                { icon: MapPin, label: 'Location', val: 'Salem, Tamil Nadu, India', href: undefined },
              ].map((item, idx) => (
                item.href ? (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card/60 hover:bg-card/90 border border-border/80 hover:border-primary/40 backdrop-blur-sm transition-all group"
                    whileHover={{ x: 4, transition: spring }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{item.val}</p>
                    </div>
                  </motion.a>
                ) : (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-card/60 border border-border/80 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <item.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground truncate">{item.val}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Message Form (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInRight}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl border border-border/90 bg-card/70 backdrop-blur-xl card-glow shadow-2xl shadow-black/40">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Fill in the details below to start a conversation or discuss technical opportunities.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div>
                  <Label htmlFor="contact-name" className="text-xs font-semibold text-foreground mb-1.5 block">Your Name</Label>
                  <Input
                    id="contact-name"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-secondary/50 border-border/80 focus:border-primary rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-xs font-semibold text-foreground mb-1.5 block">Your Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-secondary/50 border-border/80 focus:border-primary rounded-xl text-sm"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-xs font-semibold text-foreground mb-1.5 block">Your Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about your role, project scope, or technical questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border/80 focus:border-primary min-h-[140px] rounded-xl text-sm resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl gap-2 shadow-lg shadow-primary/25 disabled:opacity-60"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending Dispatch...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
