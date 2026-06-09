#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const link = (href, text) =>
  `<a href="${href}" style="color: #9A98FF; text-decoration: underline;">${text}</a>`

const sameer = {
  name: 'Sameer Ul Haque',
  bio: 'Lead Mentor at Designient. 15+ years in product and UX design across startups and global teams.',
  image: '/images/authors/designient-school.png',
}

const shabrin = {
  name: 'Shabrin Sultana M F',
  bio: 'Co-Founder at Designient. 12+ years in branding, marketing, and user-driven growth strategy.',
  image: '/images/authors/designient-school.png',
}

const updated = '2025-06-09'

const posts = [
  {
    slug: 'what-is-white-space-in-ux-design',
    title: 'What is White Space in UX Design',
    excerpt:
      'White space is not wasted space. Learn what it is, why it matters for readability, and how to use it without making layouts feel empty.',
    content: `<p>You have probably opened a page where every pixel was filled. Text sat on top of buttons. Nothing had room to breathe. That cramped feeling is what happens when white space gets ignored.</p>
<p>White space (also called negative space) is the empty area around text, images, and UI elements. It is not always white. It is simply space that is left unfilled on purpose.</p>
<p>In UX design, white space helps people scan content, understand hierarchy, and focus on what matters. If you want to practice this on real projects, our ${link('/ui-ux-design-pro', 'UI UX Design Pro course')} walks through layout decisions step by step.</p>
<h2>What is white space?</h2>
<p>Think of white space as breathing room. A paragraph with no line breaks is hard to read. A room packed with furniture is hard to move through. Design works the same way.</p>
<p>Designers use white space to separate sections, group related items, and give important elements more visual weight.</p>
<h2>Types of white space</h2>
<ol>
<li><strong>Passive white space:</strong> Space that appears naturally, like gaps between lines of text or default margins.</li>
<li><strong>Active white space:</strong> Space you add on purpose to improve layout and usability.</li>
<li><strong>Macro white space:</strong> Larger gaps between sections, cards, or page blocks.</li>
<li><strong>Micro white space:</strong> Small gaps between letters, words, and lines inside a paragraph.</li>
</ol>
<h2>Why white space matters in UX</h2>
<h3>1. Readability</h3>
<p>When text is cramped, people stop reading. Extra line height and paragraph spacing make long copy feel lighter, especially on mobile screens common in India.</p>
<h3>2. Less cognitive load</h3>
<p>Clutter forces users to work harder. Clean spacing helps them move through a flow without guessing what to tap next.</p>
<h3>3. Clear hierarchy</h3>
<p>Space around a headline or CTA button tells the eye where to go first. That is useful on landing pages where one action matters most.</p>
<h3>4. Better engagement</h3>
<p>Users leave when a screen feels overwhelming. A calmer layout keeps them exploring.</p>
<h3>5. Premium feel</h3>
<p>Many luxury brands use generous spacing. It signals quality without adding more decoration.</p>
<h2>Common mistakes</h2>
<ul>
<li><strong>Too little space:</strong> The layout feels noisy and hard to parse.</li>
<li><strong>Too much space:</strong> Content feels disconnected or users scroll more than needed.</li>
<li><strong>No hierarchy:</strong> Equal spacing everywhere makes nothing stand out.</li>
</ul>
<h2>Practical tips</h2>
<h3>1. Prioritize what matters</h3>
<p>Give your primary message and main CTA more space than secondary links.</p>
<h3>2. Adjust line spacing</h3>
<p>For body text, slightly more line height usually improves comfort on both desktop and phone.</p>
<h3>3. Space around buttons</h3>
<p>Do not crowd your primary button. Isolation makes it easier to spot and tap.</p>
<h3>4. Group related fields</h3>
<p>In forms, keep labels and inputs close, but leave clear gaps between sections like personal details and payment.</p>
<h3>5. Test with real users</h3>
<p>Spacing preferences vary by audience. A quick usability test beats guessing.</p>
<h2>Closing thought</h2>
<p>White space is a design tool, not empty filler. Used well, it makes interfaces easier to read and more pleasant to use.</p>
<p>Ready to build a portfolio around principles like this? See our ${link('/placements', 'placement support program')} or browse more articles on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/what-is-white-space-in-ux-design.webp',
    category: 'UX Design',
    tags: ['2025', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2025-03-24',
    updatedDate: updated,
    readingTime: '7 min read',
    featured: true,
    author: sameer,
  },
  {
    slug: 'top-7-ui-design-trends-shaping-2025-a-human-centric-future-of-digital-experiences',
    title: '7 UI Design Trends Worth Watching in 2025',
    excerpt:
      'From AI-assisted layouts to accessible defaults, here are seven UI trends that matter for real product teams in 2025.',
    content: `<p>UI design in 2025 is less about chasing visual novelty and more about building interfaces that feel helpful, fast, and inclusive. These seven trends show up repeatedly in product teams we work with in Bangalore, Hyderabad, and remote-first companies.</p>
<p>If you want hands-on practice with current workflows, our ${link('/ui-ux-design-pro', 'UI UX Design Pro program')} covers research, UI systems, and prototyping with modern tools.</p>
<h2>1. AI-assisted personalization</h2>
<p>Apps are starting to adapt layouts based on behavior: reordering menus, surfacing recent actions, or suggesting next steps. The UI job is to make those changes feel predictable, not random.</p>
<h2>2. Voice and multimodal input</h2>
<p>Voice commands work well for hands-busy moments like cooking or driving. Designers are pairing voice with minimal visual feedback so users know the system heard them.</p>
<h2>3. AR in everyday tasks</h2>
<p>Furniture previews, try-on filters, and navigation overlays are moving from demos to regular shopping flows. Good AR UI keeps instructions simple and avoids blocking the camera view.</p>
<h2>4. Softer, tactile visual styles</h2>
<p>Flat design is giving room to subtle depth: soft shadows, material-like surfaces, and buttons that look pressable. The goal is familiarity, not skeuomorphism for its own sake.</p>
<h2>5. Energy-conscious design choices</h2>
<p>Dark mode defaults, lighter animations, and fewer auto-playing assets help on OLED phones and low-bandwidth connections. Teams are treating performance as a UX feature.</p>
<h2>6. Gesture-first patterns</h2>
<p>Swipe, pinch, and drag show up more on foldables and touch-first apps. Designers document gestures clearly because they are easy to miss.</p>
<h2>7. Accessibility as a baseline</h2>
<p>Contrast checks, dyslexia-friendly type options, and captions are part of the first draft, not a late audit. Inclusive UI is becoming a release requirement, not a nice-to-have.</p>
<h2>What this means for designers</h2>
<p>Trends only matter if they solve user problems. In 2025, the strongest interfaces combine useful AI features with plain language, readable type, and layouts that work on mid-range Android phones, not just flagship devices.</p>
<p>Explore career paths in this space through our ${link('/placements', 'placement support')} or read more on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/top-7-ui-design-trends-2025.webp',
    category: 'UI Design',
    tags: ['2025', 'AI', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2025-03-17',
    updatedDate: updated,
    readingTime: '8 min read',
    featured: true,
    author: shabrin,
  },
  {
    slug: 'artifical-intelligence-taking-ui-ux-design-to-new-heights',
    title: 'How AI Fits Into Real UI UX Design Work',
    excerpt:
      'AI can speed up repetitive tasks in design, but it does not replace research, critique, or product judgment. Here is how working designers use it today.',
    content: `<p>AI tools showed up fast in design workflows. The useful question is not whether AI belongs in UI UX work. It already does. The better question is where it saves time and where human judgment still matters.</p>
<p>At Designient, we teach AI as part of the job, not a side topic. Our ${link('/ui-ux-design-pro', 'UI UX Design Pro course')} includes Figma, research, and AI-assisted prototyping in the same project flow.</p>
<h2>Where AI helps day to day</h2>
<p>Designers use AI to draft copy variants, generate placeholder content, resize assets, summarize research notes, and explore layout ideas. These tasks used to eat hours. AI makes the first pass faster.</p>
<h2>Personalization at scale</h2>
<p>Products like Netflix or Spotify personalize content with data models behind the scenes. As a designer, you still decide what users see, how they opt out, and how recommendations are explained.</p>
<h2>Faster iteration loops</h2>
<p>Tools can suggest contrast fixes, component swaps, or alternative flows while you work. Treat suggestions as input, not final decisions. You still own the rationale.</p>
<h2>What AI does not replace</h2>
<ul>
<li>Talking to users and reading between the lines in interviews</li>
<li>Facilitating workshops with PMs and engineers</li>
<li>Choosing what not to build</li>
<li>Presenting trade-offs to stakeholders</li>
</ul>
<h2>Skills worth building now</h2>
<p>Learn prompt patterns for your tools, keep a strong research habit, and document decisions in your case studies. Hiring managers in India and abroad increasingly ask how you used AI on real projects, not whether you used it.</p>
<h2>Bottom line</h2>
<p>AI is a production assistant for designers. The craft still lives in problem framing, systems thinking, and clear visual communication.</p>
<p>See how graduates apply these skills in our ${link('/placements', 'placement program')} or browse more posts on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/artificial-intelligence-ui-ux-design.webp',
    category: 'AI',
    tags: ['2024', 'AI', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2024-03-14',
    updatedDate: updated,
    readingTime: '6 min read',
    featured: false,
    author: sameer,
  },
  {
    slug: 'why-being-a-ui-ux-designer-might-be-for-you',
    title: 'Why a UI UX Design Career Might Be For You',
    excerpt:
      'Ten honest reasons people switch into UI UX design, from job demand in India to the satisfaction of fixing real user problems.',
    content: `<p>Every app, bank portal, hospital booking screen, and edtech dashboard needs someone thinking about how it feels to use. That person is often a UI UX designer. If you like solving practical problems with a mix of research, visuals, and teamwork, this field may fit you well.</p>
<p>Our ${link('/ui-ux-design-pro', 'UI UX Design Pro course')} is built for career switchers and fresh graduates who want structured practice, mentor feedback, and portfolio projects.</p>
<h2>1. Digital products are everywhere</h2>
<p>From UPI apps to government services, interfaces are now the front door for most organizations. Demand for designers has stayed strong across Indian startups and IT services firms.</p>
<h2>2. You can see your impact</h2>
<p>A clearer checkout flow or a simpler onboarding screen can be measured. Good design work connects directly to business and user outcomes.</p>
<h2>3. Design sits close to product decisions</h2>
<p>Designers work with product managers, developers, and marketers. If you enjoy collaboration, you will not work in a silo.</p>
<h2>4. The field keeps evolving</h2>
<p>New tools appear, but core skills like research, information architecture, and visual hierarchy age well. You keep learning without starting from zero every year.</p>
<h2>5. Multiple career paths</h2>
<p>You can specialize in research, UI systems, interaction design, or move toward product design and leadership over time.</p>
<h2>6. Remote and hybrid options</h2>
<p>Many design roles support hybrid work, which matters if you are based outside metro cities but want access to national teams.</p>
<h2>7. Portfolio over pedigree alone</h2>
<p>Hiring teams care about case studies and process. A strong portfolio can open doors even if you come from a non-design degree.</p>
<h2>8. Work that helps people</h2>
<p>Accessible forms, readable health records, and simpler education apps make daily life easier. That matters to many designers we mentor.</p>
<h2>9. Global opportunities</h2>
<p>Design skills transfer across markets. Clear documentation and English communication help if you want to work with distributed teams.</p>
<h2>10. You build a visible body of work</h2>
<p>Over time your portfolio becomes your professional story. Each project adds proof of how you think.</p>
<h2>Is it right for you?</h2>
<p>UI UX design suits curious, patient people who can take feedback and explain their choices. It is not only about taste or tools.</p>
<p>Learn about our ${link('/placements', 'placement support')} or explore more career notes on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/why-being-ui-ux-designer.webp',
    category: 'Career',
    tags: ['2024', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2024-02-01',
    updatedDate: updated,
    readingTime: '7 min read',
    featured: false,
    author: shabrin,
  },
  {
    slug: 'understanding-ui-ux-as-a-beginner',
    title: 'Understanding UI and UX as a Beginner',
    excerpt:
      'A plain-language guide to UI vs UX, with real product examples and what to learn first if you are starting from zero.',
    content: `<p>UI and UX sound interchangeable, but they solve different problems. If you are new to design, separating the two early will save you months of confusion.</p>
<p>Our ${link('/ui-ux-design-pro', 'UI UX Design Pro course')} starts with fundamentals before moving into tools, research, and portfolio projects.</p>
<h2>UI vs UX in one sentence</h2>
<p><strong>UI (user interface)</strong> is what people see and tap: buttons, colors, type, icons, layout. <strong>UX (user experience)</strong> is how the whole flow feels: finding information, completing tasks, recovering from errors.</p>
<h2>1. Start with empathy</h2>
<p>Good UX begins with understanding who you are designing for. What are they trying to do? What slows them down today? Interviews and observation beat assumptions.</p>
<p><strong>Example:</strong> Early smartphones were menu-heavy. The iPhone simplified interaction patterns and made touch feel natural. That was both UI and UX change.</p>
<h2>2. First impressions matter</h2>
<p>Users judge trust quickly. Clear headings, readable type, and obvious next steps reduce bounce rates on marketing sites and apps alike.</p>
<p><strong>Example:</strong> Airbnb uses familiar search patterns and calm visuals so booking feels straightforward.</p>
<h2>3. Simplicity takes effort</h2>
<p>Simple interfaces hide complex systems. Google's homepage looks minimal, but the search experience behind it is deeply engineered.</p>
<h2>4. Design for emotion, not only tasks</h2>
<p>Products like Slack use tone, microcopy, and small delights to make work chat feel human.</p>
<h2>5. Design is iterative</h2>
<p>Amazon did not ship one-click ordering on day one. Strong products evolve through tests and feedback.</p>
<h2>6. Accessibility helps everyone</h2>
<p>Captions, keyboard access, and readable contrast improve UX for all users, not only people with permanent disabilities.</p>
<h2>7. Every flow tells a story</h2>
<p>Duolingo turns lessons into a guided journey with progress cues. Users always know where they are in the story.</p>
<h2>What to learn first</h2>
<p>Pick one small project: a landing page, a login flow, or a mobile form. Practice research, sketching, wireframes, and a polished UI pass. One complete case study teaches more than watching dozens of tool tutorials.</p>
<p>Ready for structured guidance? See ${link('/placements', 'placement support')} and more beginner guides on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/understanding-ui-ux-beginner.webp',
    category: 'Learning',
    tags: ['2024', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2024-01-25',
    updatedDate: updated,
    readingTime: '7 min read',
    featured: false,
    author: sameer,
  },
  {
    slug: '10-universal-ui-ux-design-principles-you-need-to-know',
    title: '10 UI UX Design Principles Every Beginner Should Know',
    excerpt:
      'Clarity, consistency, feedback, and accessibility: ten principles that show up in almost every strong digital product.',
    content: `<p>Tools change every year. Principles last longer. These ten ideas appear in critique sessions, hiring interviews, and real product reviews. Learn them once and you will recognize them everywhere.</p>
<p>Practice applying them in our ${link('/ui-ux-design-pro', 'UI UX Design Pro program')} through weekly projects and mentor reviews.</p>
<h2>1. Clarity above all</h2>
<p>Users should not have to guess how to complete basic tasks. Labels, icons, and navigation need plain language.</p>
<p><strong>Example:</strong> Google's search box does one job and does it visibly.</p>
<h2>2. Consistency</h2>
<p>Repeat patterns for buttons, spacing, and interactions so users build muscle memory.</p>
<p><strong>Example:</strong> Apple devices share gestures and visual language across platforms.</p>
<h2>3. Feedback</h2>
<p>Every action deserves a response: a loading state, success message, or error hint.</p>
<p><strong>Example:</strong> A like button that changes state immediately confirms the tap registered.</p>
<h2>4. Visual hierarchy</h2>
<p>Size, color, and position show what to read first. Hierarchy guides attention without extra instructions.</p>
<h2>5. Accessibility</h2>
<p>Design for screen readers, keyboard users, and low-vision users from the start.</p>
<h2>6. Simplicity</h2>
<p>Remove steps and visual noise that do not serve the main task.</p>
<p><strong>Example:</strong> Dropbox keeps file actions easy to find.</p>
<h2>7. White space</h2>
<p>Space is an active layout tool. It separates groups and reduces cognitive load.</p>
<h2>8. Purposeful color</h2>
<p>Color carries meaning: warnings, success, brand identity. Do not rely on color alone to convey state.</p>
<h2>9. Fitts's Law</h2>
<p>Important targets should be large enough and close enough to tap quickly, especially on mobile.</p>
<h2>10. Least effort</h2>
<p>People choose the shortest path. Reduce fields, remember context, and autofill when safe.</p>
<p><strong>Example:</strong> Search autocomplete saves typing and speeds up tasks.</p>
<h2>Putting principles to work</h2>
<p>Pick one principle per week in your practice projects. Document before-and-after screenshots in your portfolio so recruiters see how you think.</p>
<p>Explore ${link('/placements', 'placement support')} and more learning posts on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/10-universal-ui-ux-design-principles.webp',
    category: 'Learning',
    tags: ['2024', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2024-01-18',
    updatedDate: updated,
    readingTime: '7 min read',
    featured: false,
    author: sameer,
  },
  {
    slug: 'understanding-color-theory-for-ui-ux-designers',
    title: 'Color Theory for UI UX Designers: A Practical Guide',
    excerpt:
      'How color guides attention, supports accessibility, and reinforces brand - with examples you can apply in Figma today.',
    content: `<p>Color in UI is not decoration alone. It signals importance, shows status, and sets mood. You do not need a fine-art background to use it well. You need a small set of practical rules.</p>
<p>Our ${link('/ui-ux-design-pro', 'UI UX Design Pro course')} covers color systems, tokens, and accessibility checks alongside layout and research.</p>
<h2>1. Color carries emotion</h2>
<p>Blue often reads as calm or trustworthy, which is why many finance and social products use it. Red can signal urgency or error. Context matters more than universal rules.</p>
<h2>2. Contrast keeps text readable</h2>
<p>WCAG contrast targets exist for a reason. Gray-on-gray body copy fails on bright sunlight and for users with low vision.</p>
<h2>3. Complementary pairs create focus</h2>
<p>Opposite hues on the color wheel create energy. Use them sparingly for alerts or primary CTAs.</p>
<h2>4. Analogous palettes feel cohesive</h2>
<p>Neighboring hues produce calm, unified interfaces. Good for dashboards and content-heavy apps.</p>
<h2>5. Brand consistency builds recognition</h2>
<p>Pick a core palette and document it. Twitch purple or Spotify green work because they repeat consistently.</p>
<h2>6. Saturation sets tone</h2>
<p>Muted colors feel professional. High saturation feels playful or youthful. Match the product personality.</p>
<h2>7. Warm vs cool temperature</h2>
<p>Warm colors advance visually. Cool colors recede. Use temperature to layer foreground and background.</p>
<h2>8. Color for status</h2>
<p>Green for success, red for errors, amber for warnings - but always pair color with text or icons.</p>
<h2>9. Design for color blindness</h2>
<p>Avoid red/green-only distinctions. Test palettes with simulators and add labels.</p>
<h2>10. White space lets color breathe</h2>
<p>Busy color with no space feels chaotic. Apple product pages use space to let photography and CTAs stand out.</p>
<h2>Quick workflow tip</h2>
<p>Define primary, secondary, neutral, success, warning, and error tokens in Figma. Reuse tokens across components so handoff to engineering stays clean.</p>
<p>Build portfolio-ready color systems with ${link('/placements', 'placement support')} and more guides on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/understanding-color-theory-ui-ux.webp',
    category: 'Learning',
    tags: ['2024', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2024-01-11',
    updatedDate: updated,
    readingTime: '6 min read',
    featured: false,
    author: shabrin,
  },
  {
    slug: '5-essential-books-that-every-ui-ux-designer-needs',
    title: '5 Books Every UI UX Designer Should Read',
    excerpt:
      'Five classics that teach usability, human-centered design, interaction patterns, lean UX, and habit-forming products.',
    content: `<p>Books will not replace practice, but the right ones sharpen how you think. These five titles come up again and again in our mentor sessions at Designient. They are readable, practical, and worth keeping on your desk.</p>
<p>Pair reading with project work in our ${link('/ui-ux-design-pro', 'UI UX Design Pro course')} so ideas turn into portfolio case studies.</p>
<h2>1. Don't Make Me Think by Steve Krug</h2>
<p>Krug explains web usability in plain language. Short chapters, funny examples, and a focus on self-evident navigation. A strong first book if you are new to UX.</p>
<p>Get it on <a href="https://www.amazon.in/Dont-Make-Think-Revisited-Usability/dp/0321965515" style="color: #9A98FF; text-decoration: underline;">Amazon India</a>.</p>
<h2>2. The Design of Everyday Things by Don Norman</h2>
<p>Norman introduces affordances, signifiers, and feedback using everyday objects. It trains you to notice why some products frustrate and others feel obvious.</p>
<p>Get it on <a href="https://www.amazon.in/Design-Everyday-Things-Don-Norman/dp/B0DYP7QZMT" style="color: #9A98FF; text-decoration: underline;">Amazon India</a>.</p>
<h2>3. About Face by Alan Cooper</h2>
<p>A deep reference on interaction design, personas, and goal-directed design. Helpful when you move from screens to full product behavior.</p>
<p>Get it on <a href="https://www.amazon.in/About-Face-Essentials-Interaction-Design/dp/1118766571" style="color: #9A98FF; text-decoration: underline;">Amazon India</a>.</p>
<h2>4. Lean UX by Jeff Gothelf and Josh Seiden</h2>
<p>Shows how to work in agile teams with hypotheses, quick tests, and shared understanding. Useful if you join startups or product squads.</p>
<p>Get it on <a href="https://www.amazon.in/Lean-UX-Applying-Principles-Experience/dp/9352132785" style="color: #9A98FF; text-decoration: underline;">Amazon India</a>.</p>
<h2>5. Hooked by Nir Eyal</h2>
<p>Explains the Hook Model: trigger, action, reward, investment. Read it critically. It is instructive for understanding engagement patterns in consumer apps.</p>
<p>Get it on <a href="https://www.amazon.in/HOOKED-Nir-Eyal/dp/0241184835" style="color: #9A98FF; text-decoration: underline;">Amazon India</a>.</p>
<h2>How to read as a working student</h2>
<p>Finish one chapter, then sketch one idea in Figma. Note one question to test with users. That rhythm beats speed-reading five books with no output.</p>
<p>Apply what you learn with ${link('/placements', 'placement support')} and more resources on the ${link('/blogs', 'Designient blog')}.</p>`,
    coverImage: '/images/blog/5-essential-books-ui-ux-designers.webp',
    category: 'Learning',
    tags: ['2024', 'Designient Articles', 'UI Design', 'UI/UX Designers', 'UX Design'],
    publishedDate: '2024-01-05',
    updatedDate: updated,
    readingTime: '5 min read',
    featured: false,
    author: sameer,
  },
]

const out = path.join(__dirname, '..', 'data', 'blogs.json')
fs.writeFileSync(out, JSON.stringify(posts, null, 2) + '\n')
console.log(`Wrote ${posts.length} blog posts to ${out}`)
