import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Palette, Award, Wrench, Headphones, Sparkles, ChevronRight, School, Building2, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-playground.jpg";
import softplayImg from "@/assets/softplay.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import trampolineImg from "@/assets/trampoline-park.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Indoor playground with colorful equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium border border-secondary/30">
              Premium Play Equipment Supplier
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Where Play <span className="text-gradient-orange">Comes to Life</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              We Create Fun Spaces That Inspire Joy & Opportunity. Designing and delivering exciting, safe, and high-quality play environments for schools, entrepreneurs, and communities.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="flex items-center gap-8 pt-8 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-2"><Shield size={16} className="text-accent" /> Safety Certified</span>
              <span className="flex items-center gap-2"><Award size={16} className="text-accent" /> Premium Quality</span>
              <span className="flex items-center gap-2"><Sparkles size={16} className="text-accent" /> Custom Designs</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              Who We Are
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-foreground">
              We Create Fun Spaces That Inspire <span className="text-secondary">Joy & Opportunity</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed">
              We are a Play Area Supplier dedicated to designing and delivering exciting, safe, and high-quality play environments. Whether you're starting a kids' entertainment business, upgrading a community space, or building a dedicated play zone in your school — we turn your vision into reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 space-y-4">
            <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              Our Solutions
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Play Solutions for Every Space
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: softplayImg, title: "Kids Entertainment Centers", desc: "Launch your own profitable play center with custom-designed play structures and complete installation support.", icon: Building2 },
              { img: outdoorImg, title: "Community Play Spaces", desc: "Transform community areas into vibrant play hubs that bring families together.", icon: TreePine },
              { img: trampolineImg, title: "School Play Zones", desc: "Safe, development-focused play areas that promote physical activity and creativity.", icon: School },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <item.icon size={20} className="text-secondary-foreground" />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  <Link to="/solutions" className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16 space-y-4">
            <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-foreground">
              We Don't Just Supply Equipment —<br />We Build <span className="text-secondary">Experiences</span>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Child-Safe Materials", desc: "High-quality, certified materials ensuring maximum safety for children." },
              { icon: Palette, title: "Custom 3D Designs", desc: "Custom layouts and 3D visualizations to match your vision perfectly." },
              { icon: Award, title: "Safety Standards", desc: "All equipment meets international safety standards and regulations." },
              { icon: Wrench, title: "Professional Installation", desc: "Expert team handles complete installation and setup." },
              { icon: Sparkles, title: "End-to-End Guidance", desc: "From consultation to after-sales, we're with you every step." },
              { icon: Headphones, title: "After-Sales Support", desc: "Ongoing support and maintenance to keep your play space in top shape." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <item.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container relative z-10 text-center space-y-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
            Ready to Build Your <span className="text-secondary">Play Space</span>?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Together, let's create a space where children can play, learn, and grow.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Started Today <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
