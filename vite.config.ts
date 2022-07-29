import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: "DETECTIVEXXIII",
                short_name: "DETECTIVEXXIII",
                description: "CS22&CS23 DETECTIVEXXIII",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "logo192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "logo512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
            devOptions: {
                enabled: false,
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
            },
        }),
    ],
    publicDir: "public",
})
