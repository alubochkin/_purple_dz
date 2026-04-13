import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagePresets from 'vite-plugin-image-presets';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), imagePresets()]
});
