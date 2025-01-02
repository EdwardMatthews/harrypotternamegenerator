import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NameGenerator from '@/components/NameGenerator'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import HowToUse from '@/components/HowToUse'
import { generateNames } from '@/lib/nameGenerator'

export default function Home() {
  const initialNames = generateNames(10, { gender: 'random' })

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Harry Potter Name Generator
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover your magical identity with our enchanted harry potter name generator. Choose to be a Wizard or a Witch, and create unique names inspired by the Harry Potter universe.
            </p>
            <NameGenerator initialNames={initialNames} />
          </div>
        </section>

        <HowToUse />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
