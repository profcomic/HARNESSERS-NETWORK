import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";
import Link from "next/link";

const featuredPost = {
  category: "Community Impact",
  date: "January 2026",
  title: "Inside the Harnessers Food Garden: Six Months In",
  excerpt:
    "What started as a small plot on the outskirts of Mombasa has grown into our flagship sustainability project. Here's how member-led farming is reshaping food security for dozens of households — and what we've learned along the way.",
};

const posts = [
  {
    category: "Member Stories",
    date: "December 2025",
    title: "From Apprentice to Employer: Victoria's Journey",
    excerpt: "How one founding member turned a hospitality skillset into a thriving small business that now employs three young women from her village.",
    slug: "victoria-journey",
  },
  {
    category: "Governance",
    date: "November 2025",
    title: "Why We Built Our Constitution Around Transparency",
    excerpt: "A behind-the-scenes look at the decisions that shaped our founding document — dual signatories, audited accounts, and member access to records.",
    slug: "constitution-transparency",
  },
  {
    category: "Skills & Training",
    date: "October 2025",
    title: "5 Lessons from Our First Financial Literacy Workshop",
    excerpt: "Budgeting, saving, and borrowing responsibly — what 30 members took away from our most requested training session yet.",
    slug: "financial-literacy-lessons",
  },
  {
    category: "Environment",
    date: "September 2025",
    title: "Tree-Planting Day: 500 Seedlings, Three Schools",
    excerpt: "A recap of our partnership with the County Environment Office and what it means for the communities surrounding each school.",
    slug: "tree-planting-recap",
  },
  {
    category: "Announcements",
    date: "August 2025",
    title: "Welcoming Our Newest Committee Members",
    excerpt: "Meet the youth stepping into leadership roles this term and what they hope to bring to the table over the next two years.",
    slug: "new-committee-members",
  },
  {
    category: "Community Impact",
    date: "July 2025",
    title: "Holiday Food Drive: Behind the Numbers",
    excerpt: "200 households, dozens of volunteer hours, and a look at how member contributions translated directly into community relief.",
    slug: "food-drive-numbers",
  },
];

const categories = ["All", "Community Impact", "Member Stories", "Governance", "Skills & Training", "Environment", "Announcements"];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="Get Engaged"
        title="Blog"
        subtitle="Stories, updates, and lessons from the ground — written by and for the Harnessers community."
        crumbs={[{ label: "Blog", href: "/blog" }]}
      />

      {/* Featured post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] min-h-[280px] flex items-center justify-center">
              <div className="text-6xl">🌱</div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
                Featured · {featuredPost.category}
              </span>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">{featuredPost.date}</p>
              <h2 className="text-3xl font-black text-[#1E3A4A] leading-tight mb-4">{featuredPost.title}</h2>
              <p className="text-slate-500 leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <Link
                href="/blog/food-garden-six-months"
                className="inline-block bg-[#1E3A4A] hover:bg-[#29b6c8] text-white font-bold px-6 py-3 rounded-lg transition-colors tracking-wide text-sm uppercase w-fit"
              >
                Read Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter (visual only, static) */}
      <section className="pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${
                  cat === "All"
                    ? "bg-[#1E3A4A] text-white border-[#1E3A4A]"
                    : "text-[#1E3A4A] border-slate-200 hover:border-[#29b6c8]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(({ category, date, title, excerpt, slug }) => (
              <article
                key={slug}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#29b6c8] transition-all group flex flex-col"
              >
                <div className="bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] h-36 flex items-center justify-center text-3xl">
                  📝
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
                    {category}
                  </span>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">{date}</p>
                  <h3 className="text-[#1E3A4A] font-black text-lg mb-2 leading-snug">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{excerpt}</p>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-[#1E3A4A] hover:text-[#29b6c8] font-bold text-sm border-b border-[#1E3A4A]/30 hover:border-[#29b6c8] pb-0.5 transition-colors w-fit"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#1E3A4A] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.2em] mb-3">Never Miss a Story</p>
          <h2 className="text-3xl font-black text-white mb-4">Get Our Posts in Your Inbox</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Subscribe to our newsletter below to receive new blog posts, project updates, and community news as they happen.
          </p>
          <Link
            href="/#newsletter"
            className="inline-block bg-[#F5C518] hover:bg-[#e0b310] text-[#1E3A4A] font-black px-8 py-4 rounded-lg transition-colors text-sm uppercase tracking-wide"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}
