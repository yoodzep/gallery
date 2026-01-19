# Photo Gallery - Astro + Sanity.io

A visual-first photography portfolio website built with Astro and Sanity.io CMS.

## ✨ Features

- **Masonry & Grid Galleries** - Beautiful responsive layouts for showcasing photos
- **Album Organisation** - Group photos into themed collections
- **Lightbox Viewing** - Full-screen image viewing with keyboard navigation
- **Image Metadata** - Display camera settings, location, and tags
- **Client Proofing Area** - Password-protected galleries for client access
- **Responsive Design** - Looks great on all devices
- **Fast Performance** - Static site generation with Astro

## 🖼️ Demo Data

The site includes dummy data with Unsplash images so it works out of the box. Features:

- 18+ sample photos across multiple categories
- 9 themed albums (Landscape, Portrait, Street, Architecture, etc.)
- 3 client galleries with different passwords
- Complete site settings

**Demo Client Passwords:**
- Sarah & James Wedding: `love2024`
- TechStart Corp Event: `techstart2024`
- Emma Portrait Session: `emma2024`

## 🚀 Quick Start

```bash
# Install dependencies
npm install
cd studio && npm install && cd ..

# Create environment file
cp .env.example .env

# Run development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
photo-gallery/
├── src/
│   ├── components/       # UI components
│   │   ├── AlbumCard.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MasonryGallery.astro
│   │   └── PhotoMetadata.astro
│   ├── layouts/          # Page layouts
│   ├── lib/              # Utilities & data
│   │   ├── dummy-data.ts # Sample content
│   │   ├── queries.ts    # Sanity queries
│   │   └── sanity.ts     # Sanity client
│   └── pages/            # Routes
│       ├── index.astro
│       ├── gallery.astro
│       ├── albums.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── album/[slug].astro
│       └── client-area/
│           ├── index.astro
│           └── [slug].astro
├── studio/               # Sanity CMS
│   └── schemas/
└── public/
```

## 🎨 Pages

- **Home** - Hero section, featured albums, recent photos, about preview
- **Gallery** - All photos with masonry/grid toggle and category filters
- **Albums** - Browse collections by category
- **Album Detail** - Individual album with all its photos
- **About** - Photographer bio, services, equipment
- **Contact** - Contact form and social links
- **Client Area** - Password-protected client galleries

## 🔗 Connecting to Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Update `.env` with your project ID:
   ```
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   ```
3. Deploy Sanity Studio:
   ```bash
   cd studio
   npm run deploy
   ```

## 📷 Sanity Schemas

- **Album** - Title, description, cover image, category, featured flag
- **Photo** - Image, metadata (camera, lens, settings), location, tags
- **Client Gallery** - Client info, password, photos, expiry date
- **Site Settings** - Name, bio, contact info, social links

## 🛠️ Customisation

### Adding Categories
Edit `studio/schemas/album.ts` to add new category options.

### Changing Layout
Adjust the `columns` prop on `<MasonryGallery>` component (2, 3, or 4).

### Styling
Global styles are in `src/layouts/Layout.astro`. Uses:
- **Cormorant Garamond** for headings
- **Inter** for body text

## 📄 License

MIT License
