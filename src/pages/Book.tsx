import { Link } from "react-router-dom";
import { Star, BookOpen, ShoppingCart, ExternalLink, Quote } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import bookCover from "@/assets/book-front-cover.jpg";

const chapters = [
  { title: "Undercover in Housewares", desc: "Lucia, a second-generation American, battles workplace discrimination and uncovers her supervisor's elaborate fraud scheme at Middleton Market." },
  { title: "What's in the Freezer?", desc: "A spare, unsettling rural noir about care, obligation, and how far people will go to survive." },
  { title: "Left-Side Neglect", desc: "A tale exploring hidden truths and the blind spots we cultivate to protect ourselves from uncomfortable realities." },
  { title: "The Railing In-Between", desc: "A story about the thin lines that separate neighbors, secrets, and the moral choices we make daily." },
  { title: "The Shed Next Door", desc: "What happens when curiosity meets the carefully guarded secrets of a seemingly ordinary neighbor?" },
  { title: "Snake in the Grass", desc: "A darkly comic exploration of trust, betrayal, and the predators who hide in plain sight." },
  { title: "Open House", desc: "When a routine real estate showing reveals more about the sellers than any listing ever could." },
  { title: "A Thief and a Kleptomaniac", desc: "The fine line between compulsion and choice, and the stories we tell ourselves to justify both." },
];

const reviews = [
  { text: "Virginia Youngren's cinematic short stories expose the quiet hypocrisies and brazen crimes of 'respectable' America, seen through the eyes of outsiders.", author: "Julia Bucci, Ph.D.", title: "Writer, filmmaker, author of In Transit and Bedlam" },
  { text: "'What's In the Freezer?' is a spare, unsettling rural noir that builds its power through detail and restraint. What starts as a story about care and obligation becomes a chilling examination of how far people will go to survive.", author: "Renee Miller", title: "Screenwriter, author of female-led horror stories" },
  { text: "Youngren's portrayal of human frailties makes a great read.", author: "Joyce Davidson", title: "Novelist and screenwriter" },
];

const purchaseLinks = [
  { label: "Amazon", icon: ShoppingCart },
  { label: "Barnes & Noble", icon: ExternalLink },
  { label: "Book Depository", icon: ExternalLink },
  { label: "IndieBound", icon: ExternalLink },
];

const Book = () => {
  const { ref: detailRef, isVisible: detailVisible } = useScrollAnimation();
  const { ref: chapRef, isVisible: chapVisible } = useScrollAnimation();
  const { ref: revRef, isVisible: revVisible } = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-6 bg-gold/15 blur-3xl rounded-lg" />
                <img src={bookCover} alt="Homegrown Crooks" className="relative w-72 md:w-80 shadow-2xl rounded-sm" width={320} height={480} />
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Now Available</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Homegrown Crooks</h1>
              <p className="text-primary-foreground/70 text-lg mb-2">by Virginia R. Youngren</p>
              <p className="text-primary-foreground/50 text-sm mb-6">Fiction / Crime / Humor / Short Story</p>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-gold text-gold" />)}
                <span className="ml-2 text-sm text-primary-foreground/60">5.0 (Reader Reviews)</span>
              </div>
              <p className="text-primary-foreground/60 leading-relaxed mb-8 max-w-lg">
                Eight unforgettable short stories that expose the quiet hypocrisies and brazen crimes
                of "respectable" America. Brimming with intrigue, witty one-liners, and razor-sharp
                character studies, these stories show how fraud flourishes in daylight.
              </p>
              <div className="flex flex-wrap gap-4">
                {purchaseLinks.slice(0, 2).map((link) => (
                  <a key={link.label} href="#" className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-teal-deeper font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold-light transition-all duration-300">
                    <link.icon size={16} /> {link.label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs text-primary-foreground/40">ISBN 978-0-7334-2609-4 • Parker Publishers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section ref={detailRef} className="py-24 bg-section-cream">
        <div className={`container mx-auto px-6 max-w-4xl ${detailVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">About the Book</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">The Stories Inside</h2>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              <em>Homegrown Crooks</em> is a collection of eight short stories that navigate hidden hierarchies,
              expose criminal behavior, and observe how longtime grifters operate with confidence, camouflage,
              and sleazy smiles.
            </p>
            <p>
              Some of these memorable stories explore how immigrant workers navigate hidden hierarchies
              to expose criminal behavior. Other pieces observe how longtime grifters operate with confidence,
              camouflage, and sleazy smiles.
            </p>
            <p>
              These stories show how fraud flourishes in daylight — and how justice often comes from people
              the system expects to stay silent.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ label: "Stories", value: "8" }, { label: "Genre", value: "Crime Fiction" }, { label: "Style", value: "Short Stories" }, { label: "Tone", value: "Dark Humor" }].map((stat) => (
              <div key={stat.label} className="p-6 bg-background rounded-sm border border-border">
                <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section ref={chapRef} className="py-24 bg-section-dark text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 ${chapVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Chapter Overview</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Eight Tales of Deception</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {chapters.map((ch, i) => (
              <div
                key={i}
                className={`p-6 border border-primary-foreground/10 rounded-sm hover:border-gold/30 transition-all duration-500 group ${
                  chapVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-gold font-heading text-2xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-gold transition-colors">{ch.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section ref={revRef} className="py-24 bg-section-cream">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 ${revVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Critical Acclaim</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`bg-background p-8 rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500 ${
                  revVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Quote size={20} className="text-gold/40 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="fill-gold text-gold" />)}
                </div>
                <p className="font-heading font-semibold text-foreground text-sm">{r.author}</p>
                <p className="text-xs text-muted-foreground">{r.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy CTA */}
      <section className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Get Your Copy Today</h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
            Available in paperback and digital formats from all major retailers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {purchaseLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/20 text-primary-foreground font-medium text-sm rounded-sm hover:bg-gold hover:text-teal-deeper hover:border-gold transition-all duration-300"
              >
                <link.icon size={14} /> {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
