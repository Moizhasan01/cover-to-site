import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import bookCover from "@/assets/book-front-cover.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const testimonials = [
  {
    text: "Virginia's characters may steal wallets, watches, and unsuspecting treasures—but her stories will steal something far more valuable: your heart. Witty, surprising, and delightfully human, these short tales leave you smiling long after the last page.",
    author: "Deni B. Sher",
    title: "Playwright, screenwriter, author",
  },
  {
    text: "Homegrown Crooks is an intriguing, unique collection of stories filled with a depth of family dynamics that will keep you flipping pages to see what happens.",
    author: "Denise A. Agnew",
    title: "Multi-genre screenwriter and author",
  },
  {
    text: "Virginia Youngren is the queen of the twist at the end of a story! Delightful reads, witty and engaging.",
    author: "Jean Nudd",
    title: "Horror and mystery screenwriter",
  },
];

const stories = [
  "Undercover in Housewares",
  "What's in the Freezer?",
  "Left-Side Neglect",
  "The Railing In-Between",
  "The Shed Next Door",
  "Snake in the Grass",
  "Open House",
  "A Thief and a Kleptomaniac",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-teal-deeper/60" />
    </div>
    <div className="container mx-auto px-6 relative z-10 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Fiction / Crime / Humor / Short Story
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Homegrown<br />
            <span className="text-gradient-gold">Crooks</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg mb-3">
            by Virginia R. Youngren
          </p>
          <p className="text-primary-foreground/60 text-base leading-relaxed max-w-lg mb-8">
            Fighting back against fraud with weapons of wit, cunning, comedy, and irony.
            Eight unforgettable tales of greed, deception, and the everyday people who refuse to stay silent.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book"
              className="px-8 py-3 bg-gold text-teal-deeper font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Buy Now
            </Link>
            <Link
              to="/book"
              className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-lg" />
            <img
              src={bookCover}
              alt="Homegrown Crooks book cover"
              className="relative w-72 md:w-80 shadow-2xl rounded-sm hover:scale-105 transition-transform duration-500"
              width={320}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AuthorIntro = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-section-cream">
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">About the Author</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Virginia R. Youngren
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Virginia Youngren is a clinical psychologist and short story writer, born and raised in Texas,
            who first got fired up by screenwriting when she saw what Alfred Hitchcock could do with a
            Patricia Highsmith story. A passionate traveler, Virginia has won recognition for her scripts
            at Santa Barbara International, Scriptapalooza, and various European film festivals.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm hover:text-gold transition-colors duration-300"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeaturedBook = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-section-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={isVisible ? "animate-slide-left" : "opacity-0"}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Featured Collection</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Eight Stories of Wit & Deception</h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              From a cunning housekeeper who exposes workplace fraud to a widow discovering
              dark secrets in a freezer, each story in <em>Homegrown Crooks</em> reveals the quiet
              hypocrisies and brazen crimes of "respectable" America — seen through the eyes of outsiders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {stories.map((story, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <BookOpen size={14} className="text-gold flex-shrink-0" />
                  {story}
                </div>
              ))}
            </div>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-teal-deeper font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold-light transition-all duration-300"
            >
              Explore the Book <ArrowRight size={16} />
            </Link>
          </div>
          <div className={`flex justify-center ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <img
              src={bookCover}
              alt="Homegrown Crooks"
              className="w-64 md:w-72 shadow-2xl rounded-sm"
              loading="lazy"
              width={288}
              height={432}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-section-cream">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Praise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Readers Are Saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-background p-8 rounded-sm border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <Quote size={24} className="text-gold/40 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading font-semibold text-foreground">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-20 bg-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(42_55%_55%/0.1),transparent_70%)]" />
      <div className={`container mx-auto px-6 text-center relative z-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Meet the Crooks?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Get your copy of <em>Homegrown Crooks</em> today and discover eight tales that will
          make you laugh, gasp, and think twice about the people next door.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 bg-gold text-teal-deeper font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-gold-light transition-all duration-300"
          >
            Order on Amazon
          </a>
          <Link
            to="/contact"
            className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <>
    <HeroSection />
    <AuthorIntro />
    <FeaturedBook />
    <Testimonials />
    <CTABanner />
  </>
);

export default Index;
