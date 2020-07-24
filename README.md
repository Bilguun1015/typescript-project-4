# Sorting

_Will work on Bubble Sort for sorting different inputs, such as arrays, linked list and string. Main idea is to reuse this sorting method._

## Environment Setup

1. **tsc --init** to initialize tsconfig.json file

2. **In the tsconfig file uncomment and add the build and src file**

   - `"outDir": "./build"` -- Redirect output structure to the directory.
   - `"rootDir": "./src"` -- Specify the root directory of input files. Use to control the output directory structure with --outDir.

3. **Install nodemon and concurrentyl**

   - `npm init -y` -- creates package.json
   - `npm install nodemon concurrently` -- concurrently helps to run multiple scripts at the same time

4. **Update script tag in package.json**

   `"scripts": { "start:build": "tsc -w", "start:run": "nodemon build/index.js", "start": "concurrently npm:start:*" },`
