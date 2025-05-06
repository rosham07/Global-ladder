import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Global-ladder/', // ← 👈 Add this line with your repo name
  plugins: [react(), tailwindcss()],
})

