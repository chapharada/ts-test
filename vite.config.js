import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    publicDir: resolve(__dirname, 'src/public'),
    emptyOutDir: true,
    assetsDir: 'assets',
    build: {
        outDir: resolve(__dirname, 'dist'),
        // rollupOptions: {
        //   output: {
        //     entryFileNames: 'assets/js/[name].js',
        //     chunkFileNames: 'assets/js/[name].js',
        //     assetFileNames: (assetFile) => {
        //         if(/\.css$/.test(assetFile.name)) {
        //           return 'assets/css/[name].[ext]';
        //         } else if(/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetFile.name)) {
        //           return 'assets/images/[name].[ext]';
        //         } else {
        //           return 'assets/[name].[ext]';
        //         }
        //     }             
        //   }
        // }
      },
});