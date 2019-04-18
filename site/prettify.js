const prettier = require("prettier");

const getSupportedExtensions = prettier => {
  const supportedExtensions = prettier
    .getSupportInfo()
    .languages.reduce((prev, language) => prev.concat(language.extensions || []), []);
  return supportedExtensions;
};

const formatAll = () => {
  const allExtensionsComaSeparated = getSupportedExtensions(prettier)
    .map(ext => ext.substring(1))
    .join(",");

  console.log("prettier", `{,!(node_modules)/**/}*.{${allExtensionsComaSeparated}}`, "--write");
};

formatAll();
