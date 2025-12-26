export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Ginzburg',
    jobTitle: 'Front-End Developer',
    description:
      'Front-end developer specializing in React, Next.js, and TypeScript. Building modern, performant web applications.',
    url: 'https://davidginzburg.dev',
    sameAs: [
      'https://github.com/Dav50505',
      'https://www.linkedin.com/in/david-ginzburg-a453ba295/',
      'https://www.instagram.com/dginzburg_2005/',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Python',
      'Web Development',
      'Front-End Development',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      suppressHydrationWarning
    />
  )
}

