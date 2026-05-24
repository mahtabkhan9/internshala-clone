# Internshala UI Clone

A fully responsive, highly-polished front-end clone of the Internshala search and listing interface. This project was built to replicate the clean, professional design of Internshala's internship platform, dynamically fetching real data directly from the official Internshala API.

## 🚀 Features

- **Pixel-Perfect UI**: Carefully crafted to match Internshala's styling, layout, typography, and hover states.
- **Live API Integration**: Fetches real, live internship listings and metadata dynamically from the Internshala `hiring/search` API endpoint.
- **Dynamic Filtering**: Client-side filtering logic allowing users to filter live API results by Profile, Location, Duration, and Minimum Stipend.
- **Fully Responsive**: Flawless experience on both mobile devices and desktop layouts, utilizing Tailwind's utility-first breakpoint system.
- **Optimized Performance**: Built on top of Vite for lightning-fast HMR and highly optimized production builds.

## 🛠️ Technology Stack

- **React 18** (JavaScript + JSX)
- **Vite** (Next-generation frontend tooling)
- **Tailwind CSS v4** (Utility-first styling framework)
- **React Icons** (SVG icons)

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd internshala
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will automatically open in your default browser at `http://localhost:5173`.*

## 🏗️ Building for Production

To build the application for production deployment, run:

```bash
npm run build
```

This will generate an optimized, minified bundle in the `dist` folder. You can deploy this `dist` folder directly to any static hosting provider like Vercel, Netlify, or GitHub Pages.

To preview the production build locally before deploying:
```bash
npm run preview
```

## 📂 Project Structure

- `src/components/Header.jsx`: The top navigation bar and logo.
- `src/components/SearchPage.jsx`: The main layout container that coordinates API fetching and filtering.
- `src/components/FiltersSidebar.jsx`: The interactive sidebar for filtering internship results.
- `src/components/InternshipCard.jsx`: The dynamic card component rendering individual internship data, badges, and logos.
- `src/components/Footer.jsx`: The footer component featuring informational links, app store buttons, and social links.

## 📝 License
This project is for educational and portfolio purposes. The design, branding, and API data belong to Internshala.
