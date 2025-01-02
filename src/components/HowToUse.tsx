const steps = [
  {
    title: "Choose Your Hogwarts House",
    description: "Begin your magical journey with the Harry Potter Name Generator by selecting your Hogwarts house. Whether you're a brave Gryffindor, cunning Slytherin, wise Ravenclaw, or loyal Hufflepuff, this choice will influence your generated name's style.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Select Your Magical Gender",
    description: "The Harry Potter Name Generator offers options for both wizard and witch names. Choose your preferred gender, or select 'Surprise Me' to let our magical algorithm decide. Each choice ensures your name fits perfectly in the wizarding world.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Customize Your Initials (Optional)",
    description: "Make your magical name even more personal with our Harry Potter Name Generator's initial selection feature. Choose specific letters for your first and last name, or skip this step for completely random generation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Generate Your Magical Name",
    description: "Click the 'Generate New Names' button, and watch as our Harry Potter Name Generator creates multiple magical name options. Each name is crafted to match your selected house traits and preferences, perfect for Hogwarts Legacy or fan fiction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
]

export default function HowToUse() {
  return (
    <section className="py-12 bg-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-200">
            How to Use Our Harry Potter Name Generator
          </h2>
          <p className="mt-4 text-xl text-purple-300">
            Follow these simple steps to create your perfect wizarding name
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Content */}
              <div className="ml-8 bg-purple-900/20 rounded-lg p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors w-full">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-200">
                    {step.title}
                  </h3>
                </div>
                <p className="text-purple-300 ml-14">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <p className="text-purple-300">
              Ready to start your magical journey? Try our{' '}
              <span className="text-purple-200 font-semibold">
                Harry Potter Name Generator
              </span>{' '}
              now and create the perfect name for your wizarding world character!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
