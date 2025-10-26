# My Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS 4.

## Features

- **Smooth Scrolling Navigation**: Fixed left sidebar with smooth scroll to sections
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean and professional design with dark mode support
- **Four Main Sections**:
  - **About**: Introduction and personal information
  - **Skills**: Technical skills organized by category
  - **Education**: Academic background and qualifications
  - **Projects**: Showcase of completed projects with descriptions

## Project Structure

```
dhamuportfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.js        # Root layout with metadata
│   │   └── page.js          # Main page component
│   └── components/
│       ├── Navbar.js        # Left sidebar navigation
│       ├── About.js         # About section component
│       ├── Skills.js        # Skills section component
│       ├── Education.js     # Education section component
│       └── Projects.js      # Projects section component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dhamuportfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Customization

### Update Your Information

1. **About Section**: Edit `src/components/About.js` to add your personal information
2. **Skills**: Modify the `skillCategories` array in `src/components/Skills.js`
3. **Education**: Update the `education` array in `src/components/Education.js`
4. **Projects**: Edit the `projects` array in `src/components/Projects.js`

### Styling

- Global styles are in `src/app/globals.css`
- The project uses Tailwind CSS 4 for styling
- Dark mode is automatically supported based on system preferences

## Technologies Used

- **Next.js 15.5.4**: React framework with App Router
- **React 19.1.0**: UI library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Geist Font**: Modern font family optimized for web

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy your portfolio is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out or customize this portfolio for your own use!
