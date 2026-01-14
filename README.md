# Meridian Labs Landing Page

landing page for Meridian Labs, built with Next.js, Tailwind CSS v4, and Framer Motion.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page assembly
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Landing page sections (Hero, Thesis, etc.)
│   └── ui/               # Reusable UI components (Button, etc.)
└── lib/                  # Utilities and animation configs
```

## 🎨 Design System

The design implements a "warm academic" aesthetic inspired by Cambrian.org.

- **Colors:** Terracotta, Sage Green, Warm Gray, Cream, Deep Brown
- **Typography:** Serif (Headlines) + Sans-serif (Body)
- **Voice:** Authoritative, research-backed, optimistic

## 📝 Sections

1. **Hero:** Vision statement
2. **Thesis:** Market opportunity analysis
3. **Approach:** Core infrastructure pillars
4. **Products:** 402.cat, PolyCat, Feline
5. **Technology:** Technical stack integration
6. **Use Cases:** Real-world agent applications
7. **Research:** Thought leadership
8. **Team:** Leadership and backers
9. **CTA:** Engagement paths

## 📦 Deployment

This project is optimized for deployment on Vercel.

```bash
npm run build
```
