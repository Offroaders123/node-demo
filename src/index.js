import { readFile } from "node:fs/promises";

const demoContent = await readFile("./hello-world.txt", { encoding: "utf-8" });
console.log(demoContent);

// console.log("hi mom! this will live-reload!");

// `Buffer` is unique to Node.js, it's a custom version of `Uint8Array` which has some other helpful methods and such
// it works mostly the same

// this is how it reads files by default
// You can read it as UTF-8 as well, just with another argument

// First I'll demo this out to show you

// So it just runs it and logs the contents, then the process ends

// To watch the file as it changes, you can run it with the watch flag! That's a modern Node.js feature 🔥 (lol)