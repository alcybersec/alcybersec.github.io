# AlCyberSec Personal Website

This is the source code for the [AlCyberSec personal website](https://alcybersec.github.io/), which showcases cybersecurity projects, privacy advocacy articles, and programming skills.

## Overview

- **Home Page:** Introduction and summary of expertise.
- **Projects:** Selected self-hosted systems and full-stack/AI builds.
- **Blog:** Articles on privacy, cybersecurity, and related topics.
- **Skills:** Detailed list of skills and tools.
- **CV:** Downloadable curriculum vitae.
- **Contact:** Ways to get in touch.

## Features
- Responsive, terminal-inspired design
- Shared nav/footer injected from a single source (`js/partials.js`)
- Projects page rendered from a static data array (`js/projects.js`)
- Blog with real articles on cybersecurity and privacy
- Sidebar with categories, tags, and recent posts
- Open Graph / Twitter card metadata on every page
- Easy navigation between sections
- Hosted for free using GitHub Pages

## Website Structure
```
webite-v2/
├── assets/
│   ├── blog-pages/         # Individual blog articles
│   ├── og-image.png        # Social share image
│   └── AleksandrShavyrinCV.pdf
├── css/                   # Stylesheets
├── js/
│   ├── partials.js        # Shared nav/footer + background layers
│   ├── projects.js        # Projects data + renderer
│   └── main.js            # Scroll state, mobile nav, contact form
├── index.html             # Home page
├── about.html             # About page
├── projects.html          # Projects overview
├── blog.html              # Blog overview
├── contact.html           # Contact form
├── cv.html                # CV/Resume
├── skills.html            # Skills overview
└── README.md              # This file
```

## Technologies Used
- HTML5
- CSS3
- JavaScript

## License
This project is open source and available under the MIT License.

---

*Created by Aleksandr Shavyrin (AlCyberSec)* 
