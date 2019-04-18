import { join, resolve } from "path";
import { existsSync, copyFileSync } from "fs";
import shell from "shelljs";
import pkgDir from "pkg-dir";

const context = join(pkgDir.sync(), "src");

// Workaround for direct access to filesystem
const MacrosDevPath = resolve(context, "../../warframe-macros/wf-macros-ultimate/README.md");
const MacrosLocalDir = join(context, "assets", "markdown");
// We are in local development
shell.mkdir("-p", MacrosLocalDir);

const MacrosLocalPath = join(MacrosLocalDir, "macros-tb.md");

console.log("Copying file", MacrosDevPath);
if (existsSync(MacrosDevPath)) {
  console.log("Overwriting file.");
  copyFileSync(MacrosDevPath, MacrosLocalPath);
}
