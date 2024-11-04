import { defineConfig } from 'tsup';
import { resolve } from 'path';
import { cp } from 'fs/promises';

export default defineConfig({
    entry: ['src/components/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    target: 'es5',
    external: ['react', 'react-dom'],
    outDir: 'dist',
    treeshake: false,
    loader: {
        '.png': 'dataurl',
        '.svg': 'dataurl',
        '.jpg': 'dataurl',
        '.jpeg': 'dataurl'
    },
    async onSuccess() {
        try {
            await cp('src/assets', 'dist/assets', { recursive: true })
        } catch (error) {
            console.warn('No assets directory found - skipping assets copy')
        }
    },
    esbuildOptions(options) {
        options.alias = {
            '@': resolve(__dirname, './src')
        }
    }
}); 