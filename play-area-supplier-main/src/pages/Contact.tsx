import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container relative z-10 text-center space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground">
            Contact <span className="text-secondary">Us</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Let's build your play space — reach out to get started
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground">
                Let's Build Your <span className="text-secondary">Play Space</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground">
                Ready to start your kids' entertainment business or create a joyful play zone? Fill out the form and we'll get back to you promptly.
              </motion.p>
              <motion.form variants={fadeUp} custom={2} onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 rounded-xl"
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[140px] rounded-xl"
                />
                <Button variant="hero" size="xl" type="submit" className="w-full">
                  Send Message <Send size={20} />
                </Button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-foreground">
                Contact <span className="text-secondary">Information</span>
              </motion.h2>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "96003 14586", href: "tel:9600314586" },
                  { icon: Mail, label: "Email", value: "tortuousreach@yahoo.com", href: "mailto:tortuousreach@yahoo.com" },
                  { icon: MapPin, label: "Service Area", value: "Serving schools, entrepreneurs & communities", href: null },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={i + 1}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-muted border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon size={22} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-semibold hover:text-secondary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} custom={4} className="p-8 rounded-2xl bg-primary text-center space-y-3">
                <h3 className="font-display font-bold text-xl text-primary-foreground">Our Promise</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Together, let's create a space where children can play, learn, and grow.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
