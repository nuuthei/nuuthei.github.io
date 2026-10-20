// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Noora Kuosa',
  role: 'Applied Mathematics student & developer',
  location: 'Espoo, Finland',
  tagline: 'I write software, teach programming and simulate things.',
  resumeUrl: '', // e.g. '/resume.pdf' (put the file in /public)
  socials: [
    { label: 'GitHub', url: 'https://github.com/nuuthei' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/noora-kuosa-24ab60260/' },
  ],
}

export const about = {
  paragraphs: [
    "I'm an MSc student at Aalto University, studying applied mathematics and engineering physics. My background is in computer science.",
    'I like numerical methods, acoustics and systems programming. Outside of coursework I build electronics and loudspeakers.',
    "Interests of mine include algorithms, artificial intelligence, ethical defense contracting and complex systems.",
  ],
  skills: ['C/C++', 'Rust', 'Python', 'Scala', 'Nix', 'Bash', 'Matlab', 'Julia', 'Linux', 'Docker', 'Git', 'COMSOL'],
}

export const projects = [
  {
    title: 'ScalaJS Web IDE',
    description: "A browser-based IDE for Aalto's intro programming courses. In production for students.",
    tags: ['Scala.js', 'WebAssembly'],
    repo: '',
    demo: '',
  },
  {
    title: 'BSc thesis: Accelerating acoustic ray tracing',
    description:
      'How to make sound simulation fast enough for games and VR. A literature review of smarter algorithms, data structures and GPU/ASIC hardware. Written in Finnish, supervised by Prof. Lauri Savioja.',
    tags: ['Acoustics', 'Ray tracing', 'Real-time'],
    repo: '',
    demo: '',
    paper: '/kuosa-bsc-thesis-2025.pdf',
  },
  {
    title: 'Graffathon 2025 demo',
    description: 'A real-time graphics demo. Won 2nd place at the Graffathon demoscene hackathon.',
    tags: ['Graphics', 'Demoscene'],
    repo: '',
    demo: '',
  },
]

export const experience = [
  {
    role: 'Teaching Assistant',
    company: 'Aalto University',
    period: '2023 – Present',
    points: [
      'Teach programming courses in Scala, Python and Matlab.',
      'Build course infrastructure in summers, using Scala compiler internals and WebAssembly.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'VTT',
    period: '2024 – 2025',
    points: [
      'Built backends in Django and FastAPI for an agent-based decision-making tool.',
      'Tested AI agents and RAG pipelines.',
      'Project ranked among the top 3 of the course.',
    ],
  },
  {
    role: 'Club Coordinator',
    company: 'Monari Youth Center',
    period: '2021 – 2022',
    points: ['Taught Python and web basics to middle and high school students.'],
  },
]

export const education = [
  {
    degree: 'MSc, Applied Mathematics and Engineering Physics',
    school: 'Aalto University',
    period: '2025 – Present',
    note: 'Numerical methods, PDEs and acoustics.',
  },
  {
    degree: 'BSc, Computer Science',
    school: 'Aalto University',
    period: '2022 – 2025',
    note: 'Graduated with honors.',
  },
]
