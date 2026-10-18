import {defineConfig} from "vite"
import preact from "@preact/preset-vite"

import pkg from "./package.json" with {type: "json"}

export default defineConfig({
    plugins: [preact()],
    // Served at games.hales.app/qwixx/, where assets are looked up by full path.
    base: "/qwixx/",
    build: {outDir: "dist/qwixx"},
    // Shown in the help menu.
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
        __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
})
