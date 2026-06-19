export const homeFaqItems = [
  {
    question: "How much does concrete leveling cost in Omaha?",
    answer:
      "Most residential mudjacking jobs in the Omaha area typically range between $600 and $2,500 depending on the number of slabs, their size, and the severity of the sinking. Foam/polyurethane jacking typically costs a bit more but offers faster cure times and a longer service life. Both options generally cost 50–70% less than full concrete replacement. Local contractors in our network provide free, no-obligation estimates — pricing is confirmed when a pro assesses your specific project.",
  },
  {
    question: "Is mudjacking a permanent fix?",
    answer:
      "Mudjacking and foam jacking are long-lasting repairs, not temporary patches. Most jobs come with a 5-year warranty. The underlying cause of sinking — usually soil erosion, compaction, or poor drainage — should be addressed separately for the best long-term result. Your contractor will advise you on the best approach during the estimate.",
  },
  {
    question: "How long does concrete leveling take?",
    answer:
      "Most residential jobs are completed in 2–4 hours. You can walk on mudjacked surfaces within 24 hours and drive on foam-jacked surfaces within 15 minutes. Most local contractors in the Omaha area schedule within the same week.",
  },
  {
    question: "Can all concrete be leveled, or does some need replacement?",
    answer:
      "Concrete that is crumbling, broken into many pieces, or heaved by tree roots usually needs replacement. Concrete that has simply sunk due to soil settlement is an excellent candidate for leveling. A reputable contractor will tell you honestly during the estimate whether leveling is the right call for your specific slab.",
  },
  {
    question: "What is the difference between mudjacking and foam jacking?",
    answer:
      "Mudjacking pumps a soil-cement slurry beneath the slab — it's the most cost-effective option for large driveways and patios. Foam jacking injects expanding polyurethane foam that cures in 15 minutes, uses smaller holes, and is waterproof. Both lift sunken concrete without replacement. Your contractor will recommend the best method for your project during a free estimate.",
  },
  {
    question: "Do you serve Bellevue, Papillion, and Council Bluffs?",
    answer:
      "Yes. Local contractors in our network serve the entire Omaha metro — including Bellevue, Papillion, La Vista, Elkhorn, Millard, Gretna, Bennington, and Council Bluffs, Iowa. Crossing the Missouri River does not add cost or delay to your project.",
  },
] as const;

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does concrete leveling cost in Omaha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential mudjacking jobs in the Omaha area typically range between $600 and $2,500 depending on the number of slabs and severity. Foam jacking costs slightly more. Both are generally 50–70% less than full replacement.",
      },
    },
    {
      "@type": "Question",
      name: "Is mudjacking a permanent fix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — mudjacking and foam jacking are long-lasting repairs with typical 5-year warranties, not temporary patches.",
      },
    },
    {
      "@type": "Question",
      name: "How long does concrete leveling take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential jobs complete in 2–4 hours. Foam-jacked surfaces can be driven on in 15 minutes.",
      },
    },
  ],
};
