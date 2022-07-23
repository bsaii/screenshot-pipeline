// Include node fs (file stream)
const fs = require("fs");

function readWriteAsync() {
  // Create string of markdown to be inserted
  const updatedMd = `
  ## How to get started

  1. Clone the repository
  2. Run \`npm install\`
  3. Run \`npm test\`

  __NOTE: The react app for the project is in the\`client\` directory. It has its own git repository and can be managed using \`git submodule <options>\`__

  ## Project information

  A CI/CD workflow which will produce a screenshot of your homepage and keep it updated as you keep changing the code. This kind of always-up-to-date screenshot can be useful for your README or as the basis of marketing materials that include screenshots of your website.


  **[visit the website](https://euphonious-meerkat-72321b.netlify.app)** 


  ![screenshot.png](https://github.com/saiicodes/screenshot-pipeline/blob/main/screenshot.png)
  `;

  // Update README using FS
  fs.readFile("README.md", "utf-8", (err) => {
    if (err) {
      throw err;
    }

    // Write the new README
    fs.writeFile("README.md", updatedMd, "utf-8", (err) => {
      if (err) {
        throw err;
      }

      console.log("README update complete.");
    });
  });
}

// Call the function
readWriteAsync();
