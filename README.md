# 👨‍💻 Douglas Fugazi - Personal Website

[![Gatsby](https://img.shields.io/badge/Gatsby-5.15.0-663399?style=flat&logo=gatsby)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat&logo=netlify)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Node](https://img.shields.io/badge/Node.js-22.x-339933?style=flat&logo=node.js)](https://nodejs.org/)

> Senior QA Automation Engineer from Medellín, Colombia 🇨🇴

Personal website and blog built with **Gatsby.js** and deployed on **Netlify**. Features a modern tech stack with React 18, Gatsby 5, and Dart Sass.

🌐 **Live Site:** [douglasfugazi.wtf](https://douglasfugazi.wtf)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Project Structure](#-project-structure)
- [Content Management](#-content-management)
- [Deployment](#-deployment)
- [Recent Updates](#-recent-updates)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🚀 **Blazing Fast:** Built with Gatsby 5 for optimal performance
- ⚛️ **Modern React:** Using React 18 with latest features
- 🎨 **Responsive Design:** Mobile-first approach with SCSS
- 📝 **Blog System:** Markdown-based content with Remark
- 🎯 **SEO Optimized:** Meta tags, OpenGraph, and sitemap
- 📊 **GraphQL Data Layer:** Efficient data querying
- 🔒 **Secure:** Zero critical vulnerabilities
- 🌐 **NetlifyCMS:** Easy content management through `/admin`
- 🎭 **Custom Plugins:** 4 custom Gatsby plugins for extended functionality

---

## 🛠️ Tech Stack

### Core Framework
- **[Gatsby](https://www.gatsbyjs.com/)** 5.15.0 - Static Site Generator
- **[React](https://reactjs.org/)** 18.3.1 - UI Library
- **[React DOM](https://reactjs.org/docs/react-dom.html)** 18.3.1

### Styling
- **[Sass (Dart Sass)](https://sass-lang.com/)** 1.95.0 - CSS Preprocessor
- **[Classnames](https://github.com/JedWatson/classnames)** 2.5.1 - Conditional CSS classes

### Content Processing
- **[Gatsby Transformer Remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/)** 6.15.0 - Markdown processor
- **[Marked](https://marked.js.org/)** 4.3.0 - Markdown parser
- **[js-yaml](https://github.com/nodeca/js-yaml)** 4.1.1 - YAML parser

### Plugins & Utilities
- **[gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)** 6.15.0 - SEO management
- **[gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)** 5.15.0 - File system source
- **[Lodash](https://lodash.com/)** 4.17.21 - Utility library
- **[Moment.js](https://momentjs.com/)** 2.30.1 - Date manipulation
- **[fs-extra](https://github.com/jprichardson/node-fs-extra)** 11.3.2 - Enhanced file system

### Custom Plugins
- `gatsby-plugin-stackbit-static-sass` - Dynamic SASS compilation with theme support
- `gatsby-remark-component` - Custom React components in Markdown
- `gatsby-remark-page-creator` - Dynamic page generation from Markdown
- `gatsby-source-data` - Custom data source plugin

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** v18.x or higher (recommended: v22.x)
- **npm:** v9.x or higher
- **Git:** For version control

### Check your versions:
```bash
node --version  # Should be v18+ (v22.21.1 recommended)
npm --version   # Should be v9+ (v9.8.1 recommended)
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/fugazi/douglasfugazi-wtf.git
cd douglasfugazi-wtf
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required dependencies including:
- Gatsby and its plugins
- React and React DOM
- Sass compiler
- All utility libraries

### 3. Environment Setup (Optional)

If using Stackbit features, create a `.env` file:

```bash
STACKBIT_API_KEY=your_stackbit_api_key_here
```

> **Note:** Stackbit integration is optional. The site works without it.

---

## 💻 Development

### Start Development Server
```bash
npm run develop
# or
npm start
```

This will:
- Start the Gatsby development server
- Enable hot-reload for instant updates
- Compile SASS files
- Process Markdown content
- Start GraphQL playground

**Access the site:**
- 🌐 **Website:** http://localhost:8000
- 🔍 **GraphQL Playground:** http://localhost:8000/___graphql

### Development Features
- ⚡ **Hot Module Replacement:** Changes reflect instantly
- 🔄 **Auto-reload:** Page refreshes on file changes
- 📊 **GraphQL Explorer:** Test queries in real-time
- 🐛 **Source Maps:** Easy debugging with React DevTools

---

## 🏗️ Building for Production

### Create Production Build
```bash
npm run build
```

This will:
- Generate optimized static HTML files
- Minify CSS and JavaScript
- Optimize images
- Create service worker (if configured)
- Generate sitemap and robots.txt

**Output:** `public/` directory (ready for deployment)

### Preview Production Build
```bash
npm run serve
```

Preview the production build at http://localhost:9000

---

## 📁 Project Structure

```
douglasfugazi-wtf/
├── src/
│   ├── components/          # React components
│   │   ├── ContentBlock.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── HeroBlock.js
│   │   ├── Layout.js
│   │   ├── PostsBlock.js
│   │   └── Social.js
│   ├── data/                # Site data (JSON)
│   │   ├── author.json
│   │   ├── menus.json
│   │   └── social.json
│   ├── pages/               # Markdown content pages
│   │   ├── about.md
│   │   ├── contact.md
│   │   ├── index.md
│   │   └── talks.md
│   ├── sass/                # SCSS stylesheets
│   │   ├── imports/
│   │   └── main.scss
│   ├── templates/           # Page templates
│   │   ├── blog.js
│   │   ├── contact.js
│   │   ├── home.js
│   │   ├── page.js
│   │   └── post.js
│   ├── utils/               # Utility functions
│   │   ├── classNames.js
│   │   ├── cycler.js
│   │   ├── getPage.js
│   │   ├── htmlToReact.js
│   │   ├── link.js
│   │   ├── markdownify.js
│   │   └── safePrefix.js
│   └── html.js              # HTML template
├── plugins/                 # Custom Gatsby plugins
│   ├── gatsby-plugin-stackbit-static-sass/
│   ├── gatsby-remark-component/
│   ├── gatsby-remark-page-creator/
│   └── gatsby-source-data/
├── static/                  # Static assets
│   ├── admin/               # NetlifyCMS config
│   ├── assets/              # CSS, JS, fonts
│   └── images/              # Image files
├── gatsby-browser.js        # Gatsby Browser APIs
├── gatsby-config.js         # Gatsby configuration
├── gatsby-node.js           # Gatsby Node APIs
├── gatsby-ssr.js            # Gatsby SSR APIs
├── site-metadata.json       # Site metadata
├── package.json             # Dependencies
└── README.md                # This file
```

---

## 📝 Content Management

### NetlifyCMS (Recommended)

Access the CMS at: **https://your-domain.com/admin**

**Features:**
- 📝 Visual editor for Markdown
- 🖼️ Media library management
- 👥 User authentication
- 📱 Mobile-friendly interface

### Manual Editing

Edit Markdown files directly in `src/pages/`:

```markdown
---
title: Page Title
template: page
---

# Your content here

Write in Markdown format.
```

### Adding a New Page

1. Create a new `.md` file in `src/pages/`
2. Add frontmatter with `title` and `template`
3. Write your content
4. The page will be automatically generated

---

## 🚀 Deployment

### Netlify (Recommended)

This site is optimized for Netlify deployment:

**Option 1: Continuous Deployment (Automatic)**
```bash
# Push to GitHub
git push origin master

# Netlify automatically builds and deploys
```

**Option 2: Manual Deployment**
```bash
# Build the site
npm run build

# Deploy the public/ folder to Netlify
```

**Netlify Configuration** (`netlify.toml`):
- Build command: `npm run build`
- Publish directory: `public/`
- Node version: 22.x

### Other Platforms

The site can be deployed to any static hosting service:
- **Vercel:** Connect GitHub repo
- **GitHub Pages:** Use `gh-pages` branch
- **AWS S3:** Upload `public/` directory
- **Cloudflare Pages:** Connect repository

---

## 🔄 Recent Updates

### Latest Upgrade (December 2025)

Comprehensive dependency upgrade completed. See [UPGRADE_DOCUMENTATION.md](./UPGRADE_DOCUMENTATION.md) for full details.

**Major Updates:**
- ⬆️ Gatsby: 5.5.0 → 5.15.0
- ⬆️ React: 16.5.1 → 18.3.1
- ⬆️ React DOM: 16.5.1 → 18.3.1
- 🔄 Replaced deprecated `node-sass` with modern `sass` (Dart Sass)
- ⬆️ Updated all Gatsby plugins to latest versions
- ⬆️ Upgraded 22+ npm packages

**Improvements:**
- ✅ 65% reduction in security vulnerabilities
- ✅ 0 critical vulnerabilities (down from 7)
- ✅ Full compatibility with Node.js 22
- ✅ Enhanced build performance
- ✅ Modern React 18 features enabled

---

## 🔧 Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clean Gatsby cache
gatsby clean
# or
rm -rf .cache public

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### Port Already in Use
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Or use a different port
gatsby develop -p 8001
```

#### SASS Compilation Errors
```bash
# Make sure sass is installed
npm install sass

# Check sass version
npm list sass
```

#### Node Version Issues
```bash
# Check Node version (should be 18+)
node --version

# Use nvm to switch versions
nvm use 22
```

### Getting Help

- 📚 **Full Documentation:** See [UPGRADE_DOCUMENTATION.md](./UPGRADE_DOCUMENTATION.md)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/fugazi/douglasfugazi-wtf/issues)
- 📖 **Gatsby Docs:** [gatsbyjs.com/docs](https://www.gatsbyjs.com/docs/)

---

## 🧪 Testing

### Run Tests
```bash
# Currently no test suite configured
# Future: Add Jest + React Testing Library
```

### Check for Outdated Dependencies
```bash
npm outdated
```

### Security Audit
```bash
npm audit
npm audit fix
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style

- Use ES6+ syntax
- Follow React best practices
- Use functional components with hooks
- Write meaningful commit messages
- Add comments for complex logic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE.md](LICENSE.md) file for details.

---

## 👤 Author

**Douglas Fugazi**
- 🌐 Website: [douglasfugazi.wtf](https://douglasfugazi.wtf)
- 💼 Role: Senior QA Automation Engineer
- 📍 Location: Medellín, Colombia 🇨🇴

---

## 🙏 Acknowledgments

- **[Stackbit](https://www.stackbit.com/)** - Initial theme and site generation
- **[Gatsby](https://www.gatsbyjs.com/)** - Amazing static site generator
- **[Netlify](https://www.netlify.com/)** - Seamless deployment and hosting
- **[NetlifyCMS](https://www.netlifycms.org/)** - Content management system

---

## 📊 Project Stats

- **Lines of Code:** ~15,000+
- **Components:** 7 React components
- **Pages:** 4 main pages
- **Custom Plugins:** 4
- **Dependencies:** 20+ npm packages
- **Build Time:** ~20 seconds
- **Lighthouse Score:** 95+ (Performance)

---

## 🗺️ Roadmap

### Planned Features
- [ ] Add TypeScript support
- [ ] Implement automated tests (Jest + RTL)
- [ ] Add dark mode toggle
- [ ] Improve accessibility (WCAG AA)
- [ ] Add blog post search
- [ ] Implement RSS feed
- [ ] Add internationalization (i18n)
- [ ] Migrate from Moment.js to date-fns
- [ ] Update SASS to use `@use` instead of `@import`

---

<div align="center">

**Made with 💚 using Gatsby.js and deployed on Netlify 🚀**

⭐ Star this repo if you find it useful!

</div>
