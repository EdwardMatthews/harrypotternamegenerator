const faqs = [
  {
    question: "What is the Harry Potter Name Generator?",
    answer: "The Harry Potter Name Generator is a free online tool that creates authentic wizarding names inspired by J.K. Rowling's magical universe. Perfect for Hogwarts Legacy characters, fan fiction writing, and roleplaying games, it generates names that match the style and spirit of the Harry Potter series."
  },
  {
    question: "How does the Harry Potter Name Generator work?",
    answer: "Our magical Harry Potter name generator uses a sophisticated algorithm that combines elements from the wizarding world. You can select your preferred house (Gryffindor, Slytherin, Ravenclaw, or Hufflepuff), choose your gender (wizard or witch), and even specify initials for your name. The generator then creates unique names that match your chosen characteristics."
  },
  {
    question: "Is this Harry Potter Name Generator free to use?",
    answer: "Yes! Our Harry Potter Name Generator is completely free to use. You can generate as many magical names as you want, anytime and anywhere. There are no hidden fees or subscription requirements."
  },
  {
    question: "Can I use this generator for my Hogwarts Legacy character?",
    answer: "Absolutely! The Harry Potter Name Generator is perfect for creating character names for Hogwarts Legacy. You can generate names that match your character's house and personality, adding an extra layer of authenticity to your gaming experience."
  },
  {
    question: "How do I get names specific to my Hogwarts house?",
    answer: "Simply select your desired house (Gryffindor, Slytherin, Ravenclaw, or Hufflepuff) in the generator interface. The Harry Potter Name Generator will then create names that reflect the characteristics and style associated with your chosen house. For example, Gryffindor names often sound bold and courageous, while Slytherin names tend to have a more sophisticated ring."
  },
  {
    question: "Can I use the generated names for my fan fiction?",
    answer: "Yes! The names created by our Harry Potter Name Generator are perfect for fan fiction writing. They maintain the style and feel of the original series while being unique enough to make your stories stand out. You're free to use these names in your creative writing projects."
  },
  {
    question: "What makes a good Harry Potter character name?",
    answer: "A good Harry Potter character name often combines traditional British elements with magical flair. Consider your character's house traits (brave Gryffindors, cunning Slytherins, wise Ravenclaws, or loyal Hufflepuffs), their personality, and their magical heritage. Our Harry Potter Name Generator takes all these factors into account when creating names."
  },
  {
    question: "Can I generate multiple names at once?",
    answer: "Yes! Our Harry Potter Name Generator creates multiple name options with each click, allowing you to choose the one that best fits your character. You can generate new sets of names as many times as you like until you find the perfect magical name."
  },
  {
    question: "Are the generated names unique?",
    answer: "While the names are inspired by the style and patterns found in the Harry Potter series, our Harry Potter Name Generator creates unique combinations that aren't directly copied from the books. This ensures your character has an original yet authentic-sounding wizarding name."
  },
  {
    question: "Can I use specific initials for my character's name?",
    answer: "Yes! Our Harry Potter Name Generator includes an option to specify the initials for both first and last names. This feature is perfect if you want to create a name with particular letters, perhaps to match your own initials or to follow a specific naming pattern."
  }
]

export default function FAQ() {
  return (
    <section className="py-12 bg-purple-900/10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-200 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-purple-900/20 rounded-lg border border-purple-500/30 p-6"
            >
              <h3 className="text-lg font-medium text-purple-200 mb-4">{faq.question}</h3>
              <p className="text-purple-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
