import { Metadata } from 'next'

const baseUrl = 'https://harrypotternamegenerator.pro'

export const siteMetadata = {
  title: 'Free Harry Potter Name Generator | Create Magical Wizarding Names',
  description: 'Free Harry Potter Name Generator: Create authentic wizarding names for Hogwarts Legacy, fan fiction & roleplaying. Generate magical names by house (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) or personality. Perfect for creating your unique wizard or witch character.',
  keywords: [
    'Harry Potter Name Generator',
    'Free Wizard Name Generator',
    'Hogwarts Name Generator',
    'Magical Name Generator Free',
    'Hogwarts Legacy Names',
    'Wizarding World Names',
    'Harry Potter Character Names',
    'Gryffindor Names',
    'Slytherin Names',
    'Ravenclaw Names',
    'Hufflepuff Names',
    'Witch Name Generator',
    'Free Fantasy Name Generator',
    'Harry Potter RPG Names',
    'Wizard Name Ideas Free'
  ],
  // 页面标题变体，用于不同场景
  titleTemplates: {
    home: 'Harry Potter Name Generator | Create Magical Wizarding Names Free',
    generator: 'Free Magical Name Generator | Harry Potter Name Creator',
    houses: {
      gryffindor: 'Free Gryffindor Name Generator | Brave Wizard Names',
      slytherin: 'Free Slytherin Name Generator | Cunning Wizard Names',
      ravenclaw: 'Free Ravenclaw Name Generator | Wise Wizard Names',
      hufflepuff: 'Free Hufflepuff Name Generator | Loyal Wizard Names'
    }
  },
  // Open Graph 元数据
  openGraph: {
    title: 'Free Harry Potter Name Generator - Create Your Magical Identity',
    description: 'Generate unlimited free wizarding names for Hogwarts Legacy, fan fiction, or roleplaying. Create the perfect name for your magical character with our free Harry Potter name generator.',
    siteName: 'Harry Potter Name Generator',
    type: 'website'
  },
  // Twitter 卡片元数据
  twitter: {
    card: 'summary_large_image',
    title: 'Create Your Magical Name Free - Harry Potter Name Generator',
    description: 'Generate unlimited magical names inspired by Harry Potter universe. Free tool for Hogwarts Legacy characters, fan fiction & roleplaying games.'
  }
}

export const sharedMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: siteMetadata.titleTemplates.home,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: 'Harry Potter Name Generator' }],
  creator: 'Harry Potter Name Generator',
  publisher: 'Harry Potter Name Generator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: siteMetadata.openGraph,
  twitter: siteMetadata.twitter,
  verification: {
    google: 'qatnS53B3ng588clVYbVL1KPjlgPrDV4uMn9zBiI4Ro',
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
  icons: {
    icon: '/favicon.ico',
  }
}
