
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, ArrowRight, Clock, Shield, Users, Trophy, Flame, BookOpen, Video, MessageCircle, Target, Zap, Heart, Gift } from 'lucide-react';
import { useCountdown } from './hooks/useCountdown';

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

// Hero Section
function Hero() {
  const heroRef = useRef(null);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/hero_workout.png" 
          alt="Gym Workout" 
          className="w-full h-full object-cover object-[center_right] opacity-40 mix-blend-luminosity grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/30"></div>
      </div>

      {/* Diagonal decorative line */}
      <div className="diagonal-line hidden lg:block relative z-0" />
      
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Label */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-8 h-px bg-accent" />
            <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
              Online Fitness Program
            </span>
          </motion.div>
          
          {/* Hero Text with Weight Morph Effect */}
          <div className="mb-8">
            <h1 className="font-display leading-none tracking-tight">
              {['TRANSFORM', 'YOUR BODY', 'IN 90 DAYS'].map((line, idx) => (
                <div key={idx} className="overflow-hidden">
                  <motion.span
                    className="hero-text-line block"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(4rem, 12vw, 10rem)',
                      fontWeight: 900,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </h1>
          </div>
          
          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ animationDelay: '1.1s', opacity: 0 }}
          >
            Join 4,200+ people who have already changed their bodies and lives. 
            Science-backed program with personal coaching.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-start"
            style={{ animationDelay: '1.3s', opacity: 0 }}
          >
            <a 
              href="#pricing"
              className="group relative inline-flex items-center gap-3 bg-accent text-bg-primary px-8 py-4 font-semibold text-lg rounded-sm overflow-hidden transition-all duration-300 hover:gap-4"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a 
              href="#program"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors px-4 py-4"
            >
              <span>See the Program</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-8 mb-10 md:gap-12 mt-16 pt-8 border-t border-border"
            style={{ animationDelay: '1.5s', opacity: 0 }}
          >
            {[
              { value: '4,200+', label: 'Members' },
              { value: '94%', label: 'Success Rate' },
              { value: '90-Day', label: 'Guarantee' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl text-accent">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-text-secondary/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// Social Proof Strip
function SocialProofStrip() {
  const testimonials = [
    { text: 'Lost 12kg in 8 weeks — Artem K.', icon: '🔥' },
    { text: 'Finally have abs after 35 years — Maria S.', icon: '💪' },
    { text: 'Best investment in myself — Dmitry R.', icon: '✨' },
    { text: 'My energy is through the roof — Anna P.', icon: '⚡' },
    { text: 'Down 3 sizes in 60 days — Victoria L.', icon: '🎯' },
    { text: 'More confident than ever — Max T.', icon: '🏆' },
  ];
  
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="bg-accent py-4 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicated.map((item, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-3 mx-8 text-bg-primary font-semibold whitespace-nowrap"
            >
              <span className="text-lg">{item.icon}</span>
              <span>"{item.text}"</span>
              <span className="mx-4 text-bg-primary/30">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Problem Section
function Problem() {
  const problems = [
    'Generic programs that don\'t fit your body type',
    'Hours at the gym with zero visible results',
    'Conflicting advice from influencers',
    'Giving up after 2 weeks because it\'s too hard',
    'No accountability when motivation drops',
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left - Big Text */}
          <div>
            <motion.span 
              variants={itemVariants}
              className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-6"
            >
              The Problem
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="font-display text-5xl md:text-7xl leading-none mb-6"
            >
              WHY
              <br />
              <span className="text-text-secondary">USUAL</span>
              <br />
              PROGRAMS
              <br />
              <span className="text-accent">FAIL</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-text-secondary text-lg max-w-md leading-relaxed"
            >
              You've tried everything. The gym membership, the meal plans, 
              the apps. But nothing sticks. That's because most programs 
              are designed for "everyone" — which means no one.
            </motion.p>
          </div>
          
          {/* Right - Problem List */}
          <div className="space-y-6">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="strike-item group flex items-start gap-4 p-4 rounded-sm bg-bg-secondary/50 hover:bg-bg-card transition-colors cursor-default"
              >
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-1 group-hover:border-accent transition-colors">
                  <span className="font-mono text-xs text-text-secondary group-hover:text-accent transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-lg text-text-secondary group-hover:text-text-primary transition-colors">
                  {problem}
                </p>
              </motion.div>
            ))}
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-sm"
            >
              <p className="font-display text-2xl text-accent mb-2">
                BUT THERE'S A BETTER WAY
              </p>
              <p className="text-text-secondary">
                FitPro was designed specifically for people who've tried everything 
                and failed. A system that adapts to you, not the other way around.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Program Overview
function ProgramOverview() {
  const phases = [
    {
      number: '01',
      title: 'Foundation',
      duration: 'Days 1-30',
      description: 'Reset your metabolism, build sustainable habits, and establish your morning routine. No extreme restrictions — just smart choices that stick.',
      features: ['Metabolic reset protocol', 'Habit stacking system', 'Morning routine blueprint'],
    },
    {
      number: '02',
      title: 'Accelerate',
      duration: 'Days 31-60',
      description: 'This is where the magic happens. Targeted workouts, optimized nutrition, and step-by-step progression that builds momentum.',
      features: ['Custom workout plan', 'Macronutrient optimization', 'Progress tracking app'],
    },
    {
      number: '03',
      title: 'Sustain',
      duration: 'Days 61-90',
      description: 'Lock in your new body and mindset. Learn to maintain without the program. This is the transformation that lasts.',
      features: ['Maintenance protocol', 'Mindset mastery', 'Lifetime community access'],
    },
  ];

  return (
    <section id="program" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4"
          >
            The System
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl"
          >
            3 PHASES TO
            <br />
            <span className="text-accent">TRANSFORMATION</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-bg-card border border-border p-8 rounded-sm overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              {/* Phase number background */}
              <span className="phase-number">{phase.number}</span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    {phase.duration}
                  </span>
                </div>
                
                <h3 className="font-display text-4xl mb-4 group-hover:text-accent transition-colors">
                  {phase.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {phase.description}
                </p>
                
                <ul className="space-y-3">
                  {phase.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Results Gallery
function Results() {
  const transformations = [
    { name: 'Artem K.', lost: '18kg', time: '12 weeks', initial: '125kg → 107kg' },
    { name: 'Maria S.', lost: '12kg', time: '8 weeks', initial: '78kg → 66kg' },
    { name: 'Dmitry R.', lost: '25kg', time: '16 weeks', initial: '110kg → 85kg' },
    { name: 'Victoria L.', lost: '14kg', time: '10 weeks', initial: '82kg → 68kg' },
    { name: 'Anna P.', lost: '9kg', time: '6 weeks', initial: '64kg → 55kg' },
    { name: 'Max T.', lost: '22kg', time: '14 weeks', initial: '98kg → 76kg' },
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4"
          >
            Real People
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl"
          >
            REAL
            <span className="text-accent"> RESULTS</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="scroll-gallery pb-8"
        >
          {transformations.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="transformation-card w-72 md:w-80 flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-sm mb-4">
                {/* Placeholder for real photos - styled as before/after cards */}
                <div className="aspect-[3/4] bg-bg-secondary relative">
                  {/* Before side */}
                  <div className="absolute inset-0 left-0 w-1/2 bg-bg-card flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="font-mono text-xs text-text-secondary uppercase tracking-wider block mb-2">Before</span>
                      <span className="font-display text-2xl text-text-secondary">
                        {t.initial.split('→')[0].trim()}
                      </span>
                    </div>
                  </div>
                  
                  {/* After side with image */}
                  <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-bg-secondary">
                    <img 
                      src={idx % 2 === 0 ? '/fitness_man.png' : '/fitness_woman.png'} 
                      alt="After Transformation" 
                      className="absolute inset-0 w-[200%] max-w-none h-full object-cover transform -translate-x-1/2 mix-blend-luminosity contrast-125 opacity-80" 
                    />
                    <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/40 to-transparent flex flex-col justify-end">
                      <div className="text-center p-4">
                        <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">After</span>
                        <span className="font-display text-2xl text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {t.initial.split('→')[1].trim()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider line */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-accent z-10" />
                  
                  {/* Transition effect on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
                
                {/* Lost badge */}
                <div className="absolute top-4 right-4 bg-accent text-bg-primary px-3 py-1 rounded-sm font-display text-xl">
                  -{t.lost}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-text-secondary">{t.time}</p>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Flame className="w-4 h-4" />
                  <span className="font-mono text-sm">Transformed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll hint */}
      <div className="container mx-auto px-6 lg:px-12 mt-8">
        <p className="text-text-secondary text-sm flex items-center gap-2">
          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          <span>Scroll to see more transformations →</span>
        </p>
      </div>
    </section>
  );
}

// What's Included
function WhatsIncluded() {
  const inclusions = [
    { icon: Video, title: '150+ Workout Videos', desc: 'HD quality, all levels' },
    { icon: BookOpen, title: 'Nutrition Guide', desc: 'No starvation, real food' },
    { icon: Users, title: 'Private Community', desc: '24/7 support & motivation' },
    { icon: MessageCircle, title: 'Weekly Q&A Calls', desc: 'Direct access to coaches' },
    { icon: Target, title: 'Goal Tracking App', desc: 'See your progress daily' },
    { icon: Zap, title: 'Meal Prep Videos', desc: '15-min healthy recipes' },
    { icon: Heart, title: 'Recovery Protocol', desc: 'Sleep & stretching guides' },
    { icon: Gift, title: 'Bonus: Mindset Course', desc: 'Mental training for success' },
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4"
          >
            Everything You Get
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl"
          >
            WHAT'S
            <span className="text-accent"> INCLUDED</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
        >
          {inclusions.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex items-start gap-5 p-4 rounded-sm hover:bg-bg-card transition-colors cursor-default"
            >
              <div className="check-icon group-hover:bg-accent/10 transition-colors">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const countdownTarget = new Date();
  countdownTarget.setHours(countdownTarget.getHours() + 23);
  countdownTarget.setMinutes(countdownTarget.getMinutes() + 47);
  countdownTarget.setSeconds(countdownTarget.getSeconds() + 33);
  
  const timeLeft = useCountdown(countdownTarget);
  const [spotsLeft] = useState(17);

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4"
          >
            Limited Offer
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl mb-8"
          >
            START YOUR
            <br />
            <span className="text-accent">TRANSFORMATION</span>
          </motion.h2>

          {/* Pricing Card */}
          <motion.div
            variants={itemVariants}
            className="bg-bg-card border border-border p-8 md:p-12 rounded-sm mb-8"
          >
            {/* Old price */}
            <div className="mb-4">
              <span className="text-text-secondary line-through text-2xl mr-3">
                $297
              </span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                Today: 67% OFF
              </span>
            </div>
            
            {/* New price */}
            <div className="mb-8">
              <span className="font-display text-8xl md:text-9xl text-accent">
                $97
              </span>
              <p className="text-text-secondary mt-2">One-time payment • Lifetime access</p>
            </div>
            
            {/* What's included summary */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
              {[
                '90-Day Program',
                'Mobile App Access',
                '150+ Workout Videos',
                'Nutrition Plan',
                'Private Community',
                'Weekly Q&A Calls',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <a
              href="#signup"
              className="group relative inline-flex items-center justify-center gap-3 w-full bg-accent text-bg-primary py-5 font-bold text-xl rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="relative z-10">Get Instant Access</span>
              <ArrowRight className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 bg-white/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            {/* Guarantee badge */}
            <div className="flex items-center justify-center gap-3 mt-6 text-sm text-text-secondary">
              <Shield className="w-5 h-5 text-accent" />
              <span>90-Day Money-Back Guarantee. No questions asked.</span>
            </div>
          </motion.div>

          {/* Urgency elements */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
            {/* Countdown */}
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-text-secondary mr-2">Offer expires in:</span>
              <div className="flex gap-2">
                {[
                  { value: timeLeft.hours, label: 'HRS' },
                  { value: timeLeft.minutes, label: 'MIN' },
                  { value: timeLeft.seconds, label: 'SEC' },
                ].map((item, idx) => (
                  <div key={idx} className="countdown-digit">
                    {String(item.value).padStart(2, '0')}
                    <span className="text-xs text-text-secondary block">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Spots left */}
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-text-secondary">
                Only <span className="text-accent font-semibold">{spotsLeft} spots</span> left today
              </span>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-text-secondary text-sm"
          >
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-accent" />
              <span>4.9/5 Rating (2,847 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>4,200+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Secure Payment</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const faqs = [
    {
      question: 'Is this program suitable for beginners?',
      answer: 'Absolutely! The program includes modifications for all fitness levels. Whether you\'re starting from scratch or getting back into shape, we\'ve got you covered with scalable workouts and nutrition options.',
    },
    {
      question: 'Do I need any equipment?',
      answer: 'Most workouts require minimal equipment — a set of dumbbells and resistance bands will suffice. We also provide bodyweight alternatives for every exercise, so you can start with just your body.',
    },
    {
      question: 'What if I don\'t see results?',
      answer: 'That\'s why we offer a 90-day money-back guarantee. If you follow the program and don\'t see results, we\'ll refund your investment — no questions asked. We\'re that confident in our system.',
    },
    {
      question: 'How much time do I need per day?',
      answer: 'Expect to dedicate 45-60 minutes daily for workouts, plus 15-20 minutes for meal prep. The program is designed for busy people — we respect your time and optimize every minute.',
    },
    {
      question: 'Is there a community for support?',
      answer: 'Yes! You\'ll get instant access to our private community of 4,200+ members. Share your wins, get accountability partners, and receive 24/7 support from our team of certified coaches.',
    },
    {
      question: 'What\'s included in the meal plan?',
      answer: 'You\'ll receive a comprehensive nutrition guide with flexible macronutrient targets, 50+ easy recipes, meal prep guides, and a macro calculator. No starvation — just sustainable, delicious eating.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <span className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
              FAQ
            </span>
            <h2 className="font-display text-5xl md:text-7xl">
              QUESTIONS?
              <span className="text-accent"> ANSWERED</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border border-border bg-bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-secondary transition-colors"
                >
                  <span className="font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="signup" className="py-24 md:py-32 grain-overlay relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block font-mono text-xs text-accent uppercase tracking-[0.3em] mb-6"
          >
            Ready to Start?
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl mb-6"
          >
            YOUR BODY
            <br />
            <span className="text-accent">IS WAITING</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-lg mb-12 max-w-md mx-auto"
          >
            Join thousands who have already transformed. 
            Your journey starts with one decision.
          </motion.p>

          {!submitted ? (
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4 max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-bg-card border border-border px-6 py-4 text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none transition-colors rounded-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-bg-card border border-border px-6 py-4 text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-3 bg-accent text-bg-primary py-5 font-bold text-xl rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10">Get Instant Access</span>
                <ArrowRight className="w-6 h-6 relative z-10" />
                <div className="absolute inset-0 bg-white/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent/10 border border-accent/30 p-8 rounded-sm"
            >
              <Check className="w-16 h-16 text-accent mx-auto mb-4" />
              <p className="font-display text-2xl text-accent mb-2">
                YOU'RE IN!
              </p>
              <p className="text-text-secondary">
                Check your email for access instructions.
              </p>
            </motion.div>
          )}

          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-sm mt-6 flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4 text-accent" />
            <span>100% secure. No spam. Unsubscribe anytime.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <span className="font-display text-xl text-bg-primary">FP</span>
            </div>
            <span className="font-display text-xl">FITPRO</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-text-primary transition-colors">Contact</a>
          </div>
          
          <p className="text-text-secondary text-sm">
            © 2026 FitPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Sticky CTA for Mobile
function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-cta visible md:hidden ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <a
        href="#pricing"
        className="block w-full bg-accent text-bg-primary py-4 font-bold text-center rounded-sm"
      >
        Start for $97 →
      </a>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProofStrip />
      <Problem />
      <ProgramOverview />
      <Results />
      <WhatsIncluded />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}