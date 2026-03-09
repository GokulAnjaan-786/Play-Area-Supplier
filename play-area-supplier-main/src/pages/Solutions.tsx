import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, TreePine, School, Blocks, Footprints, Paintbrush, Shield, Dumbbell, Users, Brain } from "lucide-react";
import softplayImg from "@/assets/softplay.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import trampolineImg from "@/assets/trampoline-park.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={softplayImg} alt="Soft play area" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 text-center space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground">
            Play <span className="text-secondary">Solutions</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Complete play area solutions for every space and budget
          </motion.p>
        </div>
      </section>

      {/* Kids Entertainment */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Building2 size={28} className="text-secondary" />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Kids Entertainment <span className="text-secondary">Business Solutions</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                Planning to launch your own play center? We help you build a profitable and attractive kids' entertainment space.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3">
                {[
                  { icon: Blocks, text: "Custom-designed play structures" },
                  { icon: Footprints, text: "Soft play systems" },
                  { icon: Dumbbell, text: "Trampoline parks" },
                  { icon: Paintbrush, text: "Themed play zones" },
                  { icon: Shield, text: "Safety flooring & padding" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-foreground">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-[var(--shadow-card-hover)]"
            >
              <img src={trampolineImg} alt="Trampoline park" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-[var(--shadow-card-hover)] order-2 lg:order-1"
            >
              <img src={outdoorImg} alt="Outdoor community playground" className="w-full h-96 object-cover" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 order-1 lg:order-2">
              <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <TreePine size={28} className="text-accent" />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Community <span className="text-accent">Play Spaces</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                We transform community areas into vibrant play hubs that bring families together and create joyful experiences for children.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Perfect for:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Residential communities</li>
                  <li>• Malls & commercial spaces</li>
                  <li>• Parks & recreation centers</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <motion.div variants={fadeUp} custom={0} className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <School size={28} className="text-secondary" />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-foreground">
                School <span className="text-secondary">Play Zones</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                We design safe and development-focused play areas that promote physical activity, social interaction, creativity, and motor skill development.
              </motion.p>
              <motion.ul variants={fadeUp} custom={3} className="space-y-3">
                {[
                  { icon: Dumbbell, text: "Physical activity" },
                  { icon: Users, text: "Social interaction" },
                  { icon: Brain, text: "Creativity & imagination" },
                  { icon: Footprints, text: "Motor skill development" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-foreground">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-[var(--shadow-card-hover)]"
            >
              <img src={softplayImg} alt="Soft play for schools" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Ready to Create Your <span className="text-secondary">Play Space</span>?
          </h2>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
