import { motion } from 'framer-motion';
import { Palette, Trophy } from 'lucide-react';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const interests = [
  {
    icon: Palette,
    title: 'Sketching',
    description: 'Exploring creativity through pen-and-paper illustration, with a focus on portraits and concept art.',
    tint: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-rose-400',
  },
  {
    icon: Trophy,
    title: 'Cricket',
    description: 'Following and playing the sport — appreciating the strategy, teamwork, and the rhythm of the longer game.',
    tint: 'from-emerald-500/20 to-cyan-500/20',
    iconColor: 'text-emerald-400',
  },
];

const InterestsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-secondary/40 to-transparent relative overflow-hidden">
      <GradientBlob color="primary" className="w-96 h-96 top-6 right-6" />
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Hobbies &amp; Interests</h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            What I do when I'm not training models
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto"
        >
          {interests.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: spring }}
              className={`group relative p-6 md:p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm card-glow overflow-hidden bg-gradient-to-br ${item.tint}`}
            >
              <div className="relative z-10 flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className={item.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
