import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/Universals/PageHero";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import ContactUs from "@/components/Universals/ContactUs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const stats = [
  { val: "20+", label: "Active Members" },
  { val: "3+", label: "Projects Completed" },
  { val: "3", label: "Communities Reached" },
  { val: "80%", label: "Member Satisfaction" },
];

const stories = [
  {
    name: "Esther J.",
    title: "From Zero to Employer",
    quote:
      "Before Harnessers, I had no capital and no plan. The group loan gave me the start I needed. Today I run a salon business and employ two other youth from my area.",
    tag: "Business",
  },
  {
    name: "Patrick N.",
    title: "Skills That Changed Everything",
    quote:
      "The financial literacy workshop opened my eyes. I stopped living paycheck to paycheck and started saving. Within a year I had enough to pay school fees and start a side hustle.",
    tag: "Financial Literacy",
  },
  {
    name: "Sebastian M.",
    title: "A Voice in the Room",
    quote:
      "I never thought I would be a committee member. Harnessers taught me to speak up, lead, and advocate. Now I represent our members and I love every bit of it.",
    tag: "Leadership",
  },
];

const galleryImages = [
  "/images/impact/impact1.jpg",
  "/images/impact/impact2.jpg",
  "/images/impact/impact3.jpg",
  "/images/impact/impact4.jpg",
  "/images/impact/impact5.jpg",
  "/images/impact/impact6.jpg",
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="What We Do"
        title="Our Impact"
        subtitle="Numbers tell one story. The lives of our members tell a better one. Here is what Harnessers has meant to the people who make it what it is."
        crumbs={[{ label: "Impact", href: "/impact" }]}
      />

      {/* Statistics */}
      <section className="py-20 bg-[#1E3A4A]">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ val, label }) => (
            <div
              key={label}
              className="text-center p-8 bg-white/5 rounded-2xl border border-[#F5C518]/20"
            >
              <div className="text-5xl font-black text-[#F5C518]">
                {val}
              </div>

              <p className="text-white/70 text-xs uppercase tracking-widest mt-4">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Member Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-3">
              Real Stories
            </h1>

            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A4A]">
              Member Spotlights
            </h2>

            <div className="w-14 h-1 bg-[#F5C518] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map(({ name, title, quote, tag }) => (
              <div
                key={name}
                className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1E3A4A] to-[#2E5F7A] h-44 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#F5C518]/20 border-2 border-[#F5C518]/40 flex items-center justify-center text-3xl">
                    👤
                  </div>
                </div>

                <div className="p-7">
                  <span className="inline-block text-[#29b6c8] bg-[#29b6c8]/10 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    {tag}
                  </span>

                  <h3 className="text-[#1E3A4A] font-black text-xl mb-2">
                    {title}
                  </h3>

                  <p className="text-[#29b6c8] text-sm font-semibold mb-4">
                    {name}
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-[#29b6c8] text-4xl font-bold uppercase tracking-[0.2em] mb-3">
              In Pictures
            </h1>

            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A4A]">
              Impact Gallery
            </h2>

            <div className="w-16 h-1 bg-[#F5C518] mx-auto mt-5 rounded-full" />

            <p className="max-w-3xl mx-auto mt-6 text-slate-500 leading-relaxed">
              Explore moments from our community outreach programs,
              entrepreneurship initiatives, environmental conservation
              activities, youth empowerment forums, and leadership training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-72 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`Impact ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/impact-gallery"
              className="inline-block bg-[#1E3A4A] hover:bg-[#29b6c8] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors"
            >
              View Our Gallery →
            </Link>
          </div>
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}