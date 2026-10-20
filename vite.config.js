import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from a custom domain (public/CNAME), so assets live at the root.
// If you drop the custom domain and serve from https://<user>.github.io/<repo>/,
// set `base` to '/<repo>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
