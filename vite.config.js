// // vite.config.ts
// import { defineConfig } from "vite";

// // https://vitejs.dev/config/
// export default defineConfig(() => ({
// 	esbuild: {
// 		loader: "tsx", // OR "jsx"
// 		include: [
// 			// Add this for business-as-usual behaviour for .jsx and .tsx files
// 			"src/**/*.jsx",
// 			"src/**/*.tsx",
// 			"node_modules/**/*.jsx",
// 			"node_modules/**/*.tsx",

// 			// Add the specific files you want to allow JSX syntax in
// 			"src/LocalJsxInJsComponent.js",
// 			"node_modules/bad-jsx-in-js-component/index.js",
// 			"node_modules/bad-jsx-in-js-component/js/BadJSXinJS.js",
// 			"node_modules/bad-jsx-in-js-component/ts/index.ts",
// 			"node_modules/bad-jsx-in-js-component/ts/BadTSXinTS.ts",
// 		],
// 	},
// }));
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
});
