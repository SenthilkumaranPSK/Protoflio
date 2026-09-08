const KEYWORDS = [
  'Generative AI',
  'Large Language Models',
  'Computer Vision',
  'Machine Learning',
  'Deep Learning',
  'Data Engineering',
  'Python',
  'Predictive Modeling',
];

const MarqueeContent = () => (
  <div className="flex items-center gap-12 shrink-0 px-6">
    {KEYWORDS.map((word) => (
      <span
        key={word}
        className="flex items-center gap-12 text-3xl md:text-5xl font-black tracking-tighter text-foreground/10 uppercase whitespace-nowrap"
      >
        {word}
        <span className="text-primary/20">&bull;</span>
      </span>
    ))}
  </div>
);

/** Constant-speed infinite keyword ticker — decorative, breaks out of the .container width cap. */
const Marquee = () => {
  return (
    <div
      className="relative overflow-hidden py-8 md:py-10 w-screen mx-[calc(50%-50vw)] border-y border-border"
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default Marquee;
