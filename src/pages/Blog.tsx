import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    id: "craft-of-crime-fiction",
    title: "The Craft of Writing Crime Fiction with Humor",
    excerpt: "How do you make readers laugh while exploring the darkest corners of human behavior? It starts with character, timing, and a willingness to find absurdity in the mundane.",
    image: blog1,
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Writing Craft",
  },
  {
    id: "short-story-collections",
    title: "Why Short Story Collections Deserve More Love",
    excerpt: "In a world of 500-page epics, the short story collection offers something different: complete worlds in miniature, each one a perfect gem of storytelling.",
    image: blog2,
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Literary World",
  },
  {
    id: "fraud-in-plain-sight",
    title: "Fraud in Plain Sight: When Fiction Mirrors Reality",
    excerpt: "The most compelling crime stories aren't about master criminals — they're about the ordinary deceptions that hide behind respectability and routine.",
    image: blog3,
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Behind the Stories",
  },
];

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <section className="pt-32 pb-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4">Blog</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Articles & Insights</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">
            Thoughts on writing, crime fiction, and the art of storytelling.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-24 bg-section-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group bg-background rounded-sm border border-border overflow-hidden hover:border-gold/30 hover:shadow-xl transition-all duration-500 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={400}
                    height={256}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">{post.category}</span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4 group-hover:text-gold transition-colors">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
