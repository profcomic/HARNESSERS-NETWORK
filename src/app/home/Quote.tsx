export default function Quote() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black leading-snug text-[#29b6c8]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
        >
          The best support is<br />self-support!
        </h2>
        <div className="w-10 h-0.5 bg-[#29b6c8] mx-auto mt-6 mb-6" />
        <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
          At Harnessers, we believe that when young people are offered
          opportunities that align with their needs and potential, they become
          active, self-reliant individuals who can participate in, enrich, and
          contribute to society.
        </p>
      </div>
    </section>
  );
}
