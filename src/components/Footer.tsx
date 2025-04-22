export default function Footer() {
  const usefulLinks = [
    {
      title: "Name Generators",
      links: [
        { name: 'Kingdom Name Generator', url: 'https://kingdomnamegenerator.pro/' },
        { name: 'Demon Name Generator', url: 'https://demonnamegenerator.pro/' },
        { name: 'Wu Tang Name Generator', url: 'https://wutangnamegenerator.pro/' }
      ]
    },
    {
      title: "Others",
      links: [
        { name: 'Iframe Generator', url: 'https://www.iframegenerator.pro/' },
        { name: 'DDS to PNG', url: 'https://www.ddstopng.pro/' },
        { name: 'WebP to PDF', url: 'https://webptopdf.pro/' },
        { name: 'PDF to Markdown', url: 'https://www.google.com/url?sa=E&q=https%3A%2F%2Fpdftomarkdown.pro%2F' },
      ]
    }
  ]

  return (
    <footer className="bg-[#130b22] text-gray-400 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {usefulLinks.map((category, index) => (
            <div key={index}>
              <h3 className="text-purple-300 font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-purple-900/50 pt-8">
          <div className="text-center">
            <p className="mb-4">
              Created with ✨ magical code ✨
            </p>
            <p>
              {new Date().getFullYear()} Harry Potter Name Generator. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
