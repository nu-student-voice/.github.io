import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const templatePath = path.join(rootDir, "404.html");
const outputPath = path.join(rootDir, "dist", "public", "404.html");

const rawBasePath = process.env.BASE_PATH ?? "/";
const normalizedBase =
  !rawBasePath || rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");
const homeHref = normalizedBase ? `${normalizedBase}/` : "/";

const template = fs.readFileSync(templatePath, "utf8");
const compiled = template
  .replace(/__BASE_PATH__/g, normalizedBase)
  .replace(/__HOME_HREF__/g, homeHref);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, compiled, "utf8");

console.info(
  `Generated 404.html for base path "${
    normalizedBase || "/"
  }" at ${path.relative(rootDir, outputPath)}`
);
