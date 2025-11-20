**Repository Overview**

- **Purpose**: This is a small personal "JS Learning" repo containing HTML pages and short JavaScript exercises (interactive/browser and Node examples). The codebase is primarily educational examples (see `js/lesson1.js`, `js/lesson2.js`, `js/lesson3.js`).
- **Top-level entry points**: `index.html`, `Practic.js`, `test.js`, `tesr 2.html` and the `js/` folder with lesson files.

**Environment & Run Commands**

- Install dependencies: `npm install` (the project uses `prompt-sync` declared in `package.json`).
- Run a Node script from the workspace root: `node js\\lesson3.js` (Windows `cmd.exe`). Quote paths that contain spaces or Cyrillic characters, e.g. `node "e:\\JS Learning\\js\\lesson3.js"`.
- Many files mix browser APIs (`alert`, `prompt`) and Node APIs (`console.log`). When running or editing, preserve the intended runtime or convert explicitly:
  - If the file uses `alert`/`prompt`, treat it as browser code (open the corresponding HTML file or run in DevTools).
  - If the file uses `console.log` or `require`, treat it as Node/CommonJS (`package.json` sets `type: commonjs`).

**Project Conventions & Patterns**

- Files contain Ukrainian comments and exercise prompts — preserve original language and intent when editing unless asked to translate.
- File and folder names include spaces and non-ASCII (Cyrillic) characters (e.g. `Збережені проєкти/`). Do not rename files lightly; use quoted paths when running commands.
- JavaScript style is simple, imperative exercise code (for-loops, while, array transforms). Keep changes minimal and focused: fix bugs or improve clarity while keeping the exercise structure intact.
- The repo has no test harness or build step. Avoid adding heavyweight tooling without explicit instruction.

**Common Tasks & How to Approach Them**

- When converting a browser exercise to run in Node (or vice versa), add a short comment explaining the environment change and provide both implementations when helpful (e.g., a `node`-friendly `prompt-sync` example alongside the original `prompt`).
- If adding runnable examples, prefer small self-contained changes (one file at a time) and include the exact run command in the file header comment.
- If you modify `package.json` (e.g., to add scripts), keep entries minimal and Windows-friendly. Example `scripts` entry to run lesson files:

  `"run-lesson3": "node js\\lesson3.js"`

**Key Files To Inspect**

- `package.json` — dependency list (`prompt-sync`) and `type: commonjs`.
- `js/lesson1.js`, `js/lesson2.js`, `js/lesson3.js` — canonical examples and most edits should target these.
- `index.html`, `Practic.js`, `tesr 2.html`, `test.js` — miscellaneous pages and practice files; treat them as standalone exercises.
- `Збережені проєкти/Кавярня.html` — saved project HTML; may reference separate assets.

**Safety & Changes Policy for AI Agents**

- Do not rename or move files without explicit user approval.
- Preserve non-English comments and string literals unless asked to localize.
- Keep commits small and self-contained. When proposing larger refactors, create a short PR summary and list behavioral tests (how to run examples).

**Examples (copyable)**

- Install deps:

  `npm install`

- Run a lesson (from workspace root, Windows `cmd.exe`):

  `node js\\lesson3.js`

- Run using an absolute path with spaces/Cyrillic:

  `node "e:\\JS Learning\\js\\lesson3.js"`

**When in doubt**: Ask the user whether the target environment is browser or Node, and whether the user wants edits to exercises or to productionize examples (add tests, scripts, or convert module formats).

---
If any section is unclear or you'd like the file to include extra examples (commit message conventions, PR template, or automated checks), tell me which and I'll iterate.
