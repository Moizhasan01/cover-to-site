import { Award, PenTool, Globe, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import bookCoverFull from "@/assets/book-cover-full.jpg";

const achievements = [
  { icon: PenTool, title: "Master Screenwriter", desc: "Earned Master Screenwriter certificate from Screenwriting U in 2012" },
  { icon: Award, title: "Award-Winning Scripts", desc: "Recognized at Santa Barbara International, Scriptapalooza, and European film festivals" },
  { icon: Globe, title: "International Judge", desc: "Served as a judge of films at the IFFH in the Hague for several years" },
  { icon: BookOpen, title: "Certified Fraud Examiner", desc: "Member of the Association of Certified Fraud Examiners" },
];

const About = () => {
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { ref: achRef, isVisible: achVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">The Author</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Virginia R. Youngren</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Clinical psychologist, screenwriter, and storyteller — fighting fraud with fiction.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section ref={bioRef} className="py-24 bg-section-cream">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${bioVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="flex justify-center">
              <img
                src={bookCoverFull}
                alt="Virginia R. Youngren - Homegrown Crooks full cover"
                className="w-full max-w-md rounded-sm shadow-xl"
                loading="lazy"
                width={500}
                height={350}
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Life of Stories
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Virginia Youngren is a clinical psychologist and short story writer, born and raised in
                  Texas, who first got fired up by screenwriting when she saw what Alfred Hitchcock could
                  do with a Patricia Highsmith story.
                </p>
                <p>
                  She joined Screenwriting U in 2012, earned a Master Screenwriter certificate, and has
                  been writing screenplays ever since. A passionate traveler, Virginia has won recognition
                  for her scripts at Santa Barbara International, Scriptapalooza, and in various European
                  film festivals, including London and Tokyo.
                </p>
                <p>
                  For several years she has been a judge of films at the IFFH in the Hague.
                </p>
                <p>
                  After being widowed and painfully defrauded 15 years ago, Virginia joined the Association
                  of Certified Fraud Examiners and has subsequently focused her comedy and drama writing on
                  the subjects of greed and fraud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section ref={achRef} className="py-24 bg-section-dark text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 ${achVisible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Achievements</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Recognition & Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`text-center p-8 border border-primary-foreground/10 rounded-sm hover:border-gold/30 transition-all duration-500 ${
                  achVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <a.icon size={32} className="text-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{a.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal */}
      <section ref={storyRef} className="py-24 bg-section-cream">
        <div className={`container mx-auto px-6 max-w-3xl text-center ${storyVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">The Story Behind the Stories</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            From Pain to Purpose
          </h2>
          <blockquote className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-gold pl-6 text-left mb-8">
            "After being widowed and painfully defrauded, I channeled my experience into what I know
            best — storytelling. These stories are my way of shining a light on the everyday fraud
            that hides in plain sight, wrapped in respectability and sealed with a handshake."
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            This book is dedicated to Bill Youngren, missed every day. Virginia's writing is a testament
            to resilience, humor, and the power of turning personal adversity into universal stories
            that entertain, illuminate, and inspire.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
