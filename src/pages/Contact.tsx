import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [newsletter, setNewsletter] = useState("");
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. Virginia will get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive updates about new releases and events." });
    setNewsletter("");
  };

  return (
    <>
      <section className="pt-32 pb-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Get in Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Contact</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Have a question, want to schedule a reading, or just want to say hello? Reach out below.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-section-cream">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold hover:text-teal-deeper transition-all duration-300"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Connect</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">virginia.youngren@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Texas, United States</p>
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Follow Along</h3>
              <div className="flex gap-3 mb-10">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-gold hover:border-gold hover:text-teal-deeper transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="p-6 bg-background border border-border rounded-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Newsletter</h3>
                <p className="text-muted-foreground text-sm mb-4">Get updates on new releases, events, and behind-the-scenes stories.</p>
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                  <button type="submit" className="px-4 py-2 bg-gold text-teal-deeper font-semibold text-sm rounded-sm hover:bg-gold-light transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
