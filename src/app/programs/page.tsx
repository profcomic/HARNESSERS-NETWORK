import PageHero from "@/components/Universals/PageHero";
import ContactUs from "@/components/Universals/ContactUs";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import Programs from "@/app/programs/Programs";
import DonateBanner from "@/components/Universals/DonateBanner";
import Footer from "@/components/Universals/Footer";
import Navbar from "@/components/Universals/Navbar";
import SocialSidebar from "@/components/Universals/SocialSidebar";

const programs = [
  { num: "01", title: "Orientation & Onboarding", img: "", desc: "New members are welcomed, assessed, and prepared for their journey. This includes understanding the constitution, group expectations, psychosocial support, and equipping members with the attitude and problem-solving skills for success." },
  { num: "02", title: "Skills Training", img: "", desc: "Training is at the core of our work. From life skills to entrepreneurship, we deliver a well-rounded curriculum providing members with a strong foundation. Areas include business management, financial literacy, digital skills, and communication." },
  { num: "03", title: "Income-Generating Projects", img: "", desc: "We co-operate on and fund income-generating projects approved by the committee. Revenue generated directly supports group operations and returns dividends to active members." },
  { num: "04", title: "Community Charity", img: "", desc: "We organize regular charity drives for the less fortunate in our communities — including food drives, school supplies, and support for vulnerable households." },
  { num: "05", title: "Environmental Advocacy", img: "", desc: "We partner with local environmental organizations and lead community clean-ups, tree-planting drives, and awareness campaigns on sustainable practices." },
  { num: "06", title: "Leadership Development", img: "", desc: "We believe in growing leaders from within. Members are mentored for committee roles, public speaking, and community leadership through structured workshops and exposure opportunities." },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="What We Do"
        title="Programs"
        subtitle="Every year, through training, income projects, and community engagement, we help youth gain a positive outlook, realize their agency, and build financial independence."
        crumbs={[{ label: "Programs", href: "/programs" }]}
      />

      <Programs />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {programs.map(({ num, title, desc }, i) => (
            <div key={num} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
              {/* Photo */}
              <div className="bg-slate-100 rounded-xl aspect-video flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-300 md:[direction:ltr]">
                📸 /public/images/program-{num}.jpg
              </div>
              {/* Text */}
              <div className="md:[direction:ltr]">
                <span className="text-[#F5C518] font-black text-5xl leading-none">{num}</span>
                <h2 className="text-3xl font-black text-[#1E3A4A] mt-2 mb-4">{title}</h2>
                <div className="w-8 h-0.5 bg-[#29b6c8] mb-5" />
                <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DonateBanner />
      <Footer />
    </>
  );
}
