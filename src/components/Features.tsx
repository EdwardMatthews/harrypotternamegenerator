const features = [
  {
    title: "House-Specific Name Generation",
    description: "Generate authentic names tailored to each Hogwarts house. Whether you're a brave Gryffindor, cunning Slytherin, wise Ravenclaw, or loyal Hufflepuff, our Harry Potter Name Generator creates names that reflect your house's unique characteristics.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Magical Gender Options",
    description: "Choose between wizard and witch names, or let our Harry Potter Name Generator surprise you with random magical names. Each name is crafted to suit your character's identity perfectly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Custom Initial Selection",
    description: "Want a specific starting letter? Our Harry Potter Name Generator allows you to choose initials for both first and last names, perfect for creating personalized magical identities or matching existing name patterns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  },
  {
    title: "Perfect for Hogwarts Legacy",
    description: "Create the perfect character name for Hogwarts Legacy with our Harry Potter Name Generator. Generate authentic wizarding names that enhance your role-playing experience in the magical world.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  },
  {
    title: "Multiple Name Generation",
    description: "Generate multiple magical names at once with our Harry Potter Name Generator. Browse through various options to find the perfect name that resonates with your character's destiny in the wizarding world.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "100% Free to Use",
    description: "Our Harry Potter Name Generator is completely free to use. Generate as many magical names as you want, whenever you want. No registration required, no hidden fees - just pure magical creativity at your fingertips.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

export default function Features() {
  return (
    <section className="py-12 bg-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-200">
            Magical Features of Our Harry Potter Name Generator
          </h2>
          <p className="mt-4 text-xl text-purple-300">
            Discover what makes our name generator the perfect tool for creating authentic wizarding world names
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-900/20 rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-600 text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-purple-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
