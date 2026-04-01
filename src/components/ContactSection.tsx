import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-2 text-sm font-mono tracking-widest text-primary">06. CONTACT</p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 md:col-span-2"
          >
            <p className="leading-relaxed text-muted-foreground">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Drop me a message and I'll get back to you soon.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="break-all text-sm">hello@portfolio.dev</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4 md:col-span-3 sm:space-y-5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-6 text-center sm:p-10"
              >
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-105 disabled:opacity-70 sm:w-auto"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
