# Imre Szabó Photography Website

A modern photography portfolio website built with Next.js, TypeScript, and Tailwind CSS. The website features a content management system powered by Decap CMS (formerly Netlify CMS).

## Features

- Responsive design optimized for all devices
- Server-side rendering for better SEO
- Content management system for easy updates
- Photo gallery with albums
- Biography section
- Contact form
- News/blog section
- Social features (likes, comments, shares)

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git
- GitHub account (for deployment)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/imre-szabo-cms.git
   cd imre-szabo-cms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Setting up Decap CMS

1. Create a new repository on GitHub for your website.

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the main branch as the source
   - Save the settings

3. Configure your custom domain:
   - Go to Settings > Pages
   - Add your custom domain
   - Follow the DNS configuration instructions

4. Set up Decap CMS:
   - The CMS configuration is already set up in `public/admin/config.yml`
   - Access the CMS at `yourdomain.com/admin`

## Deployment

The website is configured to deploy automatically to GitHub Pages when you push to the main branch.

1. Update the repository URL in `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/imre-szabo-cms"
   }
   ```

2. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

## Project Structure

```
imre-szabo-cms/
├── public/
│   ├── admin/
│   │   └── config.yml    # Decap CMS configuration
│   └── images/           # Static images
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── content/            # Content managed by Decap CMS
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Decap CMS](https://decapcms.org/)
- [GitHub Pages](https://pages.github.com/)
