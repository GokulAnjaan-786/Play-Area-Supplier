import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-playground.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={outdoorImg} alt="Outdoor playground" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 text-center space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground">
            About <span className="text-secondary">Us</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Your trusted partner in creating engaging play spaces
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                Who We Are
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Experienced Play Area <span className="text-secondary">Specialists</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                As an experienced Play Area Supplier, we specialize in conceptualizing, manufacturing, and installing customized indoor and outdoor play solutions.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                From small setups to large-scale entertainment centers, we provide complete project support from start to finish.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-[var(--shadow-card-hover)]"
            >
              <img src={heroImg} alt="Indoor play area" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To create engaging play spaces that encourage fun, learning, movement, and growth for children of all ages.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be the leading play area supplier, transforming spaces worldwide into safe, joyful environments where children thrive.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] space-y-4"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Let's Build Something <span className="text-secondary">Amazing</span>
          </h2>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get in Touch <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
