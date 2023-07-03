# BocksBox
A mealkit and ready-made-meal hybrid delivery service create with react and bootstrap as a school project.

# Installation
1. Clone or download the repository
2. Make sure you have node.js installed (I am using the latest version)
3. While I recommend installing `pnpm`, `yarn` or the default `npm` will do
4. Open the downloaded project, make sure you are in the root directory, and then run `pnpm install` (Or otherwise for `yarn`, `npm`, etc.)
  - This should install all of the dependencies stored in the package.json file
5. Run `pnpm dlx json-server --watch src/data/db.json --port 8000` (Substitute `pnpm dpx` with `npx` if you're using `npm`)
  - This starts the JSON server database - It's likely temporary, but it's what I have for now.
6. In a separate terminal, in the root of the project, run `pnpm run dev`.
  - This will open the website in a local dev session, and it will tell you what the address it's running on.
7. Test to your heart's content!
