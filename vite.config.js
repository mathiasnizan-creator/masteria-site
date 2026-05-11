import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Vendor React (chargé sur toutes les pages)
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react'
            }
            // Routing
            if (id.includes('react-router')) {
              return 'vendor-router'
            }
            // SEO / Helmet
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet'
            }
            // Tout le reste node_modules
            return 'vendor-misc'
          }
          // Articles de blog : chunk séparé (lourd, chargé seulement sur /blog/*)
          if (id.includes('/data/blog-articles')) {
            return 'data-blog-articles'
          }
          // Données spokes outils : chargées par SpokePage uniquement
          if (id.includes('-spokes-enriched')) {
            return 'data-spokes'
          }
          // Données géo
          if (id.includes('/data/geo-data')) {
            return 'data-geo'
          }
        },
      },
    },
    // Augmenter le seuil pour éviter les warnings sur des chunks volontairement gros
    chunkSizeWarningLimit: 600,
  },
})
