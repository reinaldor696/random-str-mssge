const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is great",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is useful",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
  ];
  
  const randomCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    randomCommit
  };