export function CareersSchemas() {
  const uiUxMentorSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'UI/UX Design Mentor',
    description: 'Designient School of Masterminds is hiring UI/UX Design Mentors to guide students through hands-on projects, portfolio building, and career readiness. This role focuses on mentoring, feedback, and real-world UX guidance.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'UIUX-MENTOR-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME',
      'PART_TIME'
    ],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      sameAs: 'https://designient.com',
      logo: 'https://designient.com/designient-logo.svg'
    },
    jobLocationType: 'HYBRID',
    jobLocation: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'KA',
          addressCountry: 'IN'
        }
      },
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressRegion: 'TS',
          addressCountry: 'IN'
        }
      }
    ],
    qualifications: '3+ years of experience in UI/UX or Product Design. Strong portfolio and passion for mentoring.',
    responsibilities: 'Mentor students, review UX portfolios, guide design projects, and support career readiness.',
    industry: 'Design Education',
    url: 'https://designient.com/careers#ui-ux-mentor',
    directApply: true
  }

  const studentSuccessSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Community & Student Success Coordinator',
    description: 'Designient School of Masterminds is hiring a Community & Student Success Coordinator to support students throughout their learning journey and help build a strong design community. This role focuses on student support, community building, and success outcomes.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'STUDENT-SUCCESS-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME'
    ],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      sameAs: 'https://designient.com',
      logo: 'https://designient.com/designient-logo.svg'
    },
    jobLocationType: 'REMOTE',
    jobLocation: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Remote',
          addressCountry: 'IN'
        }
      }
    ],
    qualifications: '2+ years of experience in student support or community management. Strong organizational and communication skills.',
    responsibilities: 'Monitor student progress, organize community events, coordinate between mentors and students, and build a vibrant design community.',
    industry: 'Design Education',
    url: 'https://designient.com/careers#student-success',
    directApply: true
  }

  const curriculumSpecialistSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Content & Curriculum Specialist – UI/UX',
    description: 'Designient School of Masterminds is hiring a Content & Curriculum Specialist to create, refine, and improve UI/UX learning content and curriculum structure. This role focuses on curriculum development, content creation, and educational design.',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Designient',
      value: 'CURRICULUM-SPECIALIST-001'
    },
    datePosted: '2026-01-01',
    employmentType: [
      'FULL_TIME',
      'CONTRACTOR'
    ],
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Designient School of Masterminds',
      sameAs: 'https://designient.com',
      logo: 'https://designient.com/designient-logo.svg'
    },
    jobLocationType: 'REMOTE',
    jobLocation: [
      {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Remote',
          addressCountry: 'IN'
        }
      }
    ],
    qualifications: '5+ years of UI/UX design experience with strong understanding of design education. Excellent writing and content creation skills.',
    responsibilities: 'Develop and update UI/UX course curriculum, create learning materials and assignments, research latest design trends, and ensure curriculum aligns with industry needs.',
    industry: 'Design Education',
    url: 'https://designient.com/careers#curriculum-specialist',
    directApply: true
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(uiUxMentorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studentSuccessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(curriculumSpecialistSchema) }}
      />
    </>
  )
}
