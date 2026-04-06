import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const postData: Record<string, { title: string; image: string; date: string; readTime: string; category: string; content: string[] }> = {
  "craft-of-crime-fiction": {
    title: "The Craft of Writing Crime Fiction with Humor",
    image: blog1,
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Writing Craft",
    content: [
      "Crime fiction and humor might seem like unlikely bedfellows, but some of the greatest stories in the genre have found their power in the intersection of darkness and laughter.",
      "When I began writing the stories that would become Homegrown Crooks, I knew I wanted to explore fraud and deception — but I also knew that the most effective way to expose hypocrisy is often through comedy. Laughter disarms us, and when we're disarmed, we're more open to uncomfortable truths.",
      "The key is in the characters. Every con artist believes they're the hero of their own story. Every fraud scheme, no matter how elaborate, has moments of absurdity that are almost impossible to make up. My job as a writer is to find those moments and let them breathe.",
      "Take Marge from 'Undercover in Housewares' — she's a workplace bully who exploits workers' compensation, drives a luxury car to the handicapped spot, and genuinely believes she 'brings class' to a discount store. You can't help but laugh, even as you recognize the damage she causes.",
      "The humor in crime fiction serves another purpose too: it makes the stories memorable. Readers might forget a grim procedural, but they'll remember the story that made them laugh out loud — and then think twice about their neighbor's suspiciously new car.",
    ],
  },
  "short-story-collections": {
    title: "Why Short Story Collections Deserve More Love",
    image: blog2,
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Literary World",
    content: [
      "In the publishing world, the novel reigns supreme. But short story collections offer something no novel can: the thrill of a complete world in every chapter.",
      "Each story in a well-crafted collection is a self-contained universe. You meet characters, understand their world, watch them struggle, and see resolution — all in the space of twenty or thirty pages. It's storytelling distilled to its essence.",
      "For crime fiction especially, the short story format is ideal. A con doesn't need 300 pages to unfold. Sometimes the most devastating frauds happen in a single afternoon, a quick exchange, a handshake that means everything and nothing.",
      "When I wrote Homegrown Crooks, I wanted each story to hit like a short film. Walk in, feel the atmosphere, meet the characters, experience the twist, walk out changed. That's the magic of the short form.",
      "If you haven't read a short story collection recently, I encourage you to pick one up. You might find that these concentrated doses of storytelling are exactly what you've been missing.",
    ],
  },
  "fraud-in-plain-sight": {
    title: "Fraud in Plain Sight: When Fiction Mirrors Reality",
    image: blog3,
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Behind the Stories",
    content: [
      "The stories in Homegrown Crooks are fiction, but the types of fraud they depict are very real. As a member of the Association of Certified Fraud Examiners, I've learned that the most common frauds aren't the ones that make headlines.",
      "They're the neighbor who exaggerates an insurance claim. The supervisor who exploits company benefits. The family member who manipulates a trust. These are the homegrown crooks — people who look perfectly respectable until you look a little closer.",
      "What fascinates me as a writer is the psychology behind it. Fraud examiners know that most fraudsters don't see themselves as criminals. They have elaborate justifications: 'I deserve this.' 'Everyone does it.' 'They owe me.'",
      "Fiction allows us to explore these justifications from the inside. When you read a story from the perspective of someone being defrauded — or from the perspective of the fraudster themselves — you understand the mechanics of deception in a way that no textbook can teach.",
      "My hope is that these stories entertain first and educate second. But if even one reader finishes Homegrown Crooks and pays a little more attention to the handshake deals and too-good-to-be-true offers in their own life, then I've done my job.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? postData[slug] : null;

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground">Post not found</h1>
        <Link to="/blog" className="text-primary mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-12 bg-hero text-primary-foreground">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-gold transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-xs text-gold uppercase tracking-wider font-medium">{post.category}</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/50">
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-cream">
        <div className="container mx-auto px-6 max-w-3xl">
          <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover rounded-sm mb-12 shadow-lg" loading="lazy" width={800} height={400} />
          <div className="space-y-6">
            {post.content.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
