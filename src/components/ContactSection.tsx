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
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-secondary/40 to-transparent relative overflow-hidden">
      <GradientBlob color="secondary" className="w-[26rem] h-[26rem] top-6 left-6" />
      <GradientBlob color="primary" className="w-96 h-96 bottom-6 right-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let's Connect</h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInLeft}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Get in Touch</h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer(0.08, 0.2)}
              className="space-y-3 md:space-y-4"
            >
              <motion.a
                href="tel:+919443726090"
                variants={fadeInUp}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl card-glow"
                whileHover={{ x: 5, transition: spring }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary md:hidden" />
                  <Phone size={20} className="text-primary hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm md:text-base">+91 94437 26090</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:senthil2005kumaran@gmail.com"
                variants={fadeInUp}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl card-glow"
                whileHover={{ x: 5, transition: spring }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary md:hidden" />
                  <Mail size={20} className="text-primary hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm md:text-base truncate">senthil2005kumaran@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/senthilkumaran75"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl card-glow"
                whileHover={{ x: 5, transition: spring }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-primary md:hidden" />
                  <Linkedin size={20} className="text-primary hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-sm md:text-base truncate">linkedin.com/in/senthilkumaran75</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/SenthilkumaranPSK"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl card-glow"
                whileHover={{ x: 5, transition: spring }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Github size={18} className="text-primary md:hidden" />
                  <Github size={20} className="text-primary hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-sm md:text-base truncate">github.com/SenthilkumaranPSK</p>
                </div>
              </motion.a>

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary md:hidden" />
                  <MapPin size={20} className="text-primary hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-sm md:text-base">Salem, Tamil Nadu</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInRight}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div>
                <Label htmlFor="contact-name" className="sr-only">Your Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-card border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="sr-only">Your Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-card border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contact-message" className="sr-only">Your Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 disabled:opacity-60"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
