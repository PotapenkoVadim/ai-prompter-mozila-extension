# AI Prompter — Firefox Sidebar Extension

**AI Prompter** is a minimalist and functional browser extension for Mozilla Firefox, implemented as a sidebar. It helps structure communication with AI assistants using a methodology that divides the prompt into key structural blocks.

## Features

* **Prompt Structuring:** A convenient form for filling out `# TASK`, `# CONTEXT`, `# CONSTRAINTS`, `# RULES` blocks etc.
* **Smart Default Constraints:** Automatically appends instructions against unnecessary AI chatter (`no small talk`) and dialogue continuation prompts (`no follow-up suggestions`), forcing the neural network to answer strictly to the point.
* **Layout Switch Resilience:** The sidebar format ensures that the extension does not close accidentally when switching input languages (Alt+Shift / Cmd+Space).
* **Automatic Dark Theme:** Styles automatically adjust to your operating system or browser theme.
* **Local Data Persistence:** The entered text is automatically saved to `localStorage` and will not be lost if the panel is accidentally closed.

## Tech Stack

* **Vite** — for ultra-fast bundling and code minification.
* **TypeScript** — for strict typing and modular architecture.
* **CSS Variables** — for easy palette and theme management in one place.
* **Manifest V3** — the modern extension standard using `activeTab` permissions.

## How to Build from Source

### Requirements
- Operating System: Linux / Windows / macOS
- Node.js version: 18.x or higher
- Npm version: 9.x or higher

### Step-by-Step Build Instructions
1. Extract the source code ZIP archive.
2. Open your terminal/command prompt and navigate to the extracted project root directory.
3. Install all necessary dependencies by running:
   ```bash
   npm install
   ```
4. Build the production version of the extension by running:
   ```bash
   npm run build
   ```
   *(Note: If you are on Linux/Ubuntu, you can alternatively run `npm run zip` to compile and create the archive package).*
5. The exact compiled extension files matching the submitted add-on will be generated inside the `dist/` directory.

### Temporary Installation in Firefox (For Testing)

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **"Load Temporary Add-on..."**.
3. Select the `manifest.json` file from the `dist/` directory (which appears after running the build step).
4. Press `Ctrl + B` on your keyboard and select **AI Prompter** from the sidebar dropdown list.
