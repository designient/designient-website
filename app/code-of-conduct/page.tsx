import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Code of Conduct | Designient Technologies Private Limited',
  description: 'Code of Conduct for Designient Technologies Private Limited. Learn about expected behavior, unacceptable conduct, and consequences for violations in our learning community.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://designient.com/code-of-conduct',
  },
  openGraph: {
    title: 'Code of Conduct | Designient',
    description: 'Code of Conduct for Designient Technologies Private Limited.',
    url: 'https://designient.com/code-of-conduct',
    type: 'website',
  },
}

export default function CodeOfConductPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designient.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Code of Conduct',
        item: 'https://designient.com/code-of-conduct',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <Header />
      <main id="main-content" role="main">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}>
              Code of Conduct
            </h1>
            <p className="font-body text-lg" style={{ color: '#4a4a4a' }}>
              Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Code of Conduct exists to ensure a safe, respectful, and productive learning environment for all learners, mentors, and team members at Designient Technologies Private Limited (&quot;Designient&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              By enrolling in our courses or participating in our programs, you agree to adhere to this Code of Conduct. This Code should be read in conjunction with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>.
            </p>
          </div>

          {/* Section: Scope */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Scope
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                This Code of Conduct applies to all interactions and activities within Designient&apos;s learning environment, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Live classes:</strong> All scheduled live sessions, workshops, and interactive classes</li>
                <li className="font-body"><strong>Recorded sessions:</strong> Access to and use of recorded course materials</li>
                <li className="font-body"><strong>WhatsApp communities:</strong> All group chats, community discussions, and messaging channels</li>
                <li className="font-body"><strong>One-on-one mentorship calls:</strong> Individual mentoring sessions and consultations</li>
                <li className="font-body"><strong>Official communication channels:</strong> Email, phone calls, support tickets, and any other official Designient communication platforms</li>
                <li className="font-body"><strong>Course platforms:</strong> Learning management systems, portals, and online resources</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                This Code applies to all learners, mentors, staff members, and anyone participating in Designient&apos;s programs or using our services.
              </p>
            </div>
          </section>

          {/* Section: Expected Behaviour */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Expected Behaviour
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                To maintain a positive and productive learning environment, learners are expected to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Be respectful:</strong> Treat mentors, peers, and staff members with respect, courtesy, and professionalism at all times</li>
                <li className="font-body"><strong>Participate constructively:</strong> Engage in discussions, activities, and learning exercises in a constructive and collaborative manner</li>
                <li className="font-body"><strong>Follow session guidelines:</strong> Adhere to session schedules, guidelines, and instructions provided by mentors</li>
                <li className="font-body"><strong>Use learning resources responsibly:</strong> Access and use course materials, tools, and resources only for their intended educational purposes</li>
                <li className="font-body"><strong>Maintain confidentiality:</strong> Respect the privacy of fellow learners and keep shared information confidential</li>
                <li className="font-body"><strong>Provide constructive feedback:</strong> Share feedback and suggestions in a respectful and helpful manner</li>
                <li className="font-body"><strong>Support peers:</strong> Help create an inclusive and supportive learning environment for everyone</li>
              </ul>
            </div>
          </section>

          {/* Section: Unacceptable Behaviour */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Unacceptable Behaviour
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                The following behaviors are strictly prohibited and will not be tolerated:
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
                <p className="font-body font-semibold mb-3" style={{ color: '#1a1a1a' }}>Prohibited Conduct:</p>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                  <li className="font-body"><strong>Harassment or abusive language:</strong> Any form of harassment, bullying, intimidation, or use of offensive, abusive, or inappropriate language</li>
                  <li className="font-body"><strong>Discrimination:</strong> Discrimination based on gender, religion, caste, race, ethnicity, age, disability, sexual orientation, or any other protected category</li>
                  <li className="font-body"><strong>Disrupting sessions or mentors:</strong> Intentionally disrupting live sessions, interrupting mentors, or interfering with the learning experience of others</li>
                  <li className="font-body"><strong>Sharing pirated, illegal, or copyrighted content:</strong> Distributing, sharing, or promoting pirated software, illegal content, or copyrighted materials without authorization</li>
                  <li className="font-body"><strong>Recording sessions without permission:</strong> Recording live sessions, mentorship calls, or any Designient content without explicit written permission</li>
                  <li className="font-body"><strong>Sharing internal or paid content publicly:</strong> Sharing course materials, recordings, templates, tools, or any paid Designient content on public platforms, social media, or with unauthorized persons</li>
                  <li className="font-body"><strong>Misuse of platforms:</strong> Using Designient&apos;s communication channels or platforms for spam, advertising, or unauthorized commercial purposes</li>
                  <li className="font-body"><strong>Academic dishonesty:</strong> Plagiarism, cheating, or misrepresenting work as your own</li>
                  <li className="font-body"><strong>Violation of privacy:</strong> Sharing personal information of others without consent or violating confidentiality</li>
                </ul>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                This list is not exhaustive. Designient reserves the right to determine what constitutes unacceptable behavior based on the context and circumstances of each situation.
              </p>
            </div>
          </section>

          {/* Section: Mentor Authority */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Mentor Authority
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Mentors and Designient staff members have the authority to maintain order and ensure a productive learning environment. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Removing learners from live sessions:</strong> Mentors may remove learners from live sessions if their behavior disrupts the learning environment or violates this Code of Conduct</li>
                <li className="font-body"><strong>Reporting misconduct:</strong> Mentors and staff may report violations of this Code for further review and action by Designient&apos;s management</li>
                <li className="font-body"><strong>Providing guidance:</strong> Mentors may provide guidance, warnings, or corrections to help learners understand and follow expected behavior</li>
                <li className="font-body"><strong>Managing discussions:</strong> Mentors may moderate discussions, redirect conversations, or manage participation to ensure productive learning</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Learners are expected to respect and comply with mentor instructions and decisions during sessions. If you have concerns about a mentor&apos;s actions, please contact Designient management through official channels.
              </p>
            </div>
          </section>

          {/* Section: Consequences of Violation */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Consequences of Violation
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Designient takes violations of this Code of Conduct seriously. Depending on the nature and severity of the violation, Designient reserves the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#4a4a4a' }}>
                <li className="font-body"><strong>Issue warnings:</strong> Verbal or written warnings for minor violations or first-time offenses</li>
                <li className="font-body"><strong>Temporarily suspend access:</strong> Temporary suspension from live sessions, course materials, or communication channels</li>
                <li className="font-body"><strong>Terminate enrollment:</strong> Immediate termination of enrollment and access to all Designient services</li>
                <li className="font-body"><strong>No refund:</strong> In cases of serious or repeated violations, enrollment may be terminated without refund, as outlined in our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link></li>
                <li className="font-body"><strong>Revoke access:</strong> Immediate revocation of access to all course materials, platforms, and resources</li>
                <li className="font-body"><strong>Report to authorities:</strong> In cases involving illegal activities, Designient may report violations to appropriate authorities as required by law</li>
              </ul>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                The specific consequence will be determined by Designient based on the severity of the violation, whether it is a repeated offense, and the impact on the learning environment.
              </p>
            </div>
          </section>

          {/* Section: Final Decision */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Final Decision
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                Decisions taken by Designient regarding conduct violations, including warnings, suspensions, or terminations, are final. Designient will review each situation carefully and make decisions based on the facts, this Code of Conduct, and our Terms and Conditions.
              </p>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you believe a decision was made in error, you may contact Designient management to provide additional context or information. However, Designient retains the right to make final determinations regarding conduct violations.
              </p>
            </div>
          </section>

          {/* Section: Contact */}
          <section className="mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#8458B3' }}>
              Contact
            </h2>
            <div className="space-y-4">
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                If you have questions about this Code of Conduct, need to report a violation, or wish to discuss conduct-related concerns, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-body mb-2" style={{ color: '#1a1a1a' }}>
                  <strong>Email:</strong> <Link href="mailto:hello@designient.com" className="text-[#8458B3] underline">hello@designient.com</Link>
                </p>
                <p className="font-body" style={{ color: '#4a4a4a' }}>
                  <strong>Website:</strong> <Link href="https://designient.com" className="text-[#8458B3] underline">https://designient.com</Link>
                </p>
              </div>
              <p className="font-body leading-relaxed" style={{ color: '#4a4a4a' }}>
                For urgent conduct-related matters during live sessions, please contact your mentor or session moderator immediately.
              </p>
            </div>
          </section>

          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#e5e7eb' }}>
            <p className="font-body leading-relaxed mb-4" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              This Code of Conduct is part of and should be read together with our <Link href="/terms-and-conditions" className="text-[#8458B3] underline">Terms and Conditions</Link>. In case of any conflict between this Code and the Terms and Conditions, the Terms and Conditions shall prevail.
            </p>
            <p className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: '1.125rem' }}>
              Designient reserves the right to modify this Code of Conduct at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued participation in our programs after changes are posted constitutes acceptance of the updated Code of Conduct.
            </p>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/terms-and-conditions" className="font-body text-[#8458B3] underline hover:no-underline">
              Terms and Conditions
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/privacy-policy" className="font-body text-[#8458B3] underline hover:no-underline">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/disclaimer" className="font-body text-[#8458B3] underline hover:no-underline">
              Disclaimer
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact-us" className="font-body text-[#8458B3] underline hover:no-underline">
              Contact Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/" className="font-body text-[#8458B3] underline hover:no-underline">
              Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
