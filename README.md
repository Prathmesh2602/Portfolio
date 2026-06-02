# prathmeshjadhav.com

> Personal portfolio of **Prathmesh Jadhav** — Senior Full Stack Engineer building SaaS platforms, industrial HRMS, B2B marketplaces, and developer infrastructure.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Fonts | Syne · Inter (Google Fonts) |
| Deployment | Vercel |

---

## Features

- **Dark / Light mode** — system-aware with manual toggle, smooth 300ms theme transitions
- **Animated header** — pill nav on scroll with spring physics, hysteresis scroll detection
- **Work section** — featured project cards with hover parallax and case study pages
- **Case study pages** — full problem → solution → architecture → outcomes layout
- **About section** — bio, experience timeline, education, and skill tags
- **Contact section** — custom cursor interaction, clipboard fallback for mailto
- **Projects archive** — full list of all shipped and in-development work

---

## Projects Featured

- **PortZero AI** — AI-native developer tunnel + API debugger (Go, WebSockets, OpenAI)
- **Velfresh** — HoReCa ERP eliminating 4hrs/day of kitchen paperwork
- **WageBliss** — Industrial HRMS for 60,000+ field workers across MIDC sites
- **SundayMalls** — B2B wholesale marketplace with AI catalog ingestion
- **CityCenterMall** — Hyper-local retail marketplace with real-time WebSocket dispatch
- **Platz-Halter** — Restaurant floor intelligence with auto table conflict resolution
- **LokNidhi** — Hardware-verified temple donation governance system
- **HealthLink** — Community health + emergency blood donation network

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home (Hero → Ticker → Work → About → Contact)
│   └── projects/
│       ├── page.tsx          # Full project archive
│       └── [id]/page.tsx     # Individual case study
├── components/
│   ├── Header.tsx            # Animated pill nav
│   ├── Hero.tsx              # Landing section
│   ├── WorkSection.tsx       # Featured projects grid
│   ├── AboutSection.tsx      # Bio + experience + skills
│   ├── ContactSection.tsx    # Contact + footer
│   ├── Ticker.tsx            # Scrolling text strip
│   ├── ThemeToggle.tsx       # Dark/light switch
│   └── ProjectsHeader.tsx   # Back nav for project pages
├── data.ts                   # All project data + case study content
└── context/
    └── ThemeContext.tsx      # Theme state
```

---

## Contact

**Prathmesh Jadhav** · Pune, India  
[prathmeshjadhav1014@gmail.com](mailto:prathmeshjadhav1014@gmail.com) · [LinkedIn](https://www.linkedin.com/in/prathmesh-jadhav-68a65b1b8/) · [GitHub](https://github.com/Prathmesh1014)
