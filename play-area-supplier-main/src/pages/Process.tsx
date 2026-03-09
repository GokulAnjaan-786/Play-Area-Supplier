import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, PenTool, Factory, Wrench, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const steps = [
  { icon: MessageSquare, title: "Consultation & Requirement Analysis", desc: "We listen to your ideas, understand your space, and define the project scope." },
  { icon: PenTool, title: "Space Planning & Design", desc: "Our designers create custom 3D layouts and detailed plans for your approval." },
  { icon: Factory, title: "Manufacturing & Quality Check", desc: "Equipment is manufactured using premium materials with rigorous quality checks." },
  { icon: Wrench, title: "Installation & Setup", desc: "Our expert team handles complete installation, ensuring safety and precision." },
  { icon: Headphones, title: "After-Sales Support", desc: "Ongoing maintenance support to keep your play space in perfect condition." },
];

const Process = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container relative z-10 text-center space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground">
            Our <span className="text-secondary">Process</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            From concept to completion — here's how we bring your play space to life
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex gap-6 md:gap-8 items-start"
                >
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center">
                      <step.icon size={28} className="text-secondary" />
                    </div>
                  </div>
                  <div className="pb-8 space-y-2 pt-2">
                    <span className="text-secondary text-sm font-semibold">Step {i + 1}</span>
                    <h3 className="font-display font-bold text-xl text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Start Your Project <span className="text-secondary">Today</span>
          </h2>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get Started <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
