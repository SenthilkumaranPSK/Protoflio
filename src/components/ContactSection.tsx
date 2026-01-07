import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Get in Touch</h3>
            
            <div className="space-y-3 md:space-y-4">
              <motion.a
                href="mailto:senthil2005kumaran@gmail.com"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl card-glow"
                whileHover={{ x: 5 }}
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
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl card-glow"
                whileHover={{ x: 5 }}
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

              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary md:hidden" />
                  <MapPin size={20} className="text-primary hidden md:block" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-sm md:text-base">Salem, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
