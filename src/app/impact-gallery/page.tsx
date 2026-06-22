import PageHero from "@/components/Universals/PageHero";
import Navbar from "@/components/Universals/Navbar";
import Footer from "@/components/Universals/Footer";
import SocialSidebar from "@/components/Universals/SocialSidebar";
import ContactUs from "@/components/Universals/ContactUs";
import ChatWithUs from "@/components/Universals/ChatWithUs";
import Image from "next/image";

const photos = [
  "/images/projects/food-garden/mboga1.jpg",
  "/images/projects/food-garden/mboga2.jpg",
  "/images/projects/food-garden/mboga3.jpg",
  "/images/projects/food-garden/mboga4.jpg",
  "/images/projects/food-garden/mboga5.jpg",
  "/images/projects/food-garden/mboga6.jpg",
  "/images/projects/food-garden/mboga7.jpg",
  "/images/projects/food-garden/mboga9.jpg",
  "/images/projects/food-garden/mboga10.jpg",
  "/images/projects/food-garden/mboga11.jpg",
  "/images/projects/food-garden/mboga12.jpg",
  "/images/projects/food-garden/mboga13.jpg",
  "/images/projects/food-garden/mboga14.jpg",
  "/images/projects/food-garden/mboga15.jpg",
  "/images/projects/food-garden/mboga16.jpg",
  "/images/projects/food-garden/mboga17.jpg",
  "/images/projects/food-garden/ground-zero1.jpg",
  "/images/projects/food-garden/ground-zero2.jpg",
  "/images/projects/food-garden/ground-zero3.jpg",
  "/images/projects/food-garden/ground-zero4.jpg",
  "/images/projects/food-garden/ground-zero5.jpg",
];

const videos = [
  "/videos/reset-project.mp4",
  "/videos/outreach.mp4",
  "/videos/training.mp4",
];

export default function ImpactGalleryPage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactUs />
      <ChatWithUs />

      <PageHero
        eyebrow="Impact Gallery"
        title="Real Projects - Real Impact - Lasting Solutions"
        subtitle="Explore moments from the RECENT Project, community outreach activities, training programs, environmental initiatives, leadership forums, and member engagement events."
        crumbs={[
          { label: "Impact", href: "/impact" },
          { label: "Gallery", href: "/impact-gallery" },
        ]}
      />

      {/* Gallery Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-[#29b6c8] text-3xl font-bold uppercase tracking-[0.2em] mb-3">
            Our Journey
          </h1>

          <h2 className="text-5xl font-black text-[#1E3A4A] uppercase mb-5">
            Capturing Impact
          </h2>

          <div className="w-16 h-1 bg-[#F5C518] mx-auto rounded-full mb-6" />

          <p className="max-w-3xl mx-auto text-slate-500 leading-relaxed">
            Every photograph and video tells a story of empowerment,
            collaboration, leadership, community service, Current & 
            finished projects and positive transformation. These 
            moments reflect the spirit and impact of Harnessers Youth 
            Network.
          </p>
        </div>
      </section>

      {/* Photo Food Garden */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-[#1E3A4A] uppercase">
              Photo Gallery
            </h2>

            <span className="text-sm text-slate-500">
              {photos.length} Food Garden Initiative
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative h-72">
                  <Image
                    src={photo}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-[#1E3A4A]/0 group-hover:bg-[#1E3A4A]/40 transition duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h1 className="text-[#29b6c8] text-3xl font-bold uppercase tracking-[0.2em] mb-3">
              Project Highlights
            </h1>

            <h2 className="text-4xl font-black text-[#1E3A4A] uppercase">
              Video Gallery
            </h2>

            <div className="w-16 h-1 bg-[#F5C518] mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <video
                  controls
                  className="w-full h-72 object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>

                <div className="p-5">
                  <h3 className="font-black text-[#1E3A4A]">
                    Project Highlight #{index + 1}
                  </h3>

                  <p className="text-slate-500 text-sm mt-2">
                    Highlights from our community activities and impact
                    initiatives.
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#29b6c8]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h1 className="text-[#F5C518] text-3xl font-bold uppercase tracking-[0.2em] mb-3">
            Join The Movement
          </h1>

          <h2 className="text-5xl font-black text-white uppercase mb-6">
            Be Part Of The Story
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Together we can empower more youth, strengthen communities,
            and create lasting change.
          </p>

          <a
            href="/join"
            className="inline-block bg-[#F5C518] hover:bg-[#e4b500] text-[#1E3A4A] px-10 py-4 rounded-xl font-black uppercase tracking-widest transition-colors"
          >
            Join Harnessers
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}