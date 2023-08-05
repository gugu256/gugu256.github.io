async function readTextFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const fileContent = await response.text();
        return fileContent; // Return the file content as a resolved value of the promise.
    } catch (error) {
        console.error('Error reading the file:', error);
        throw error; // Rethrow the error to be caught by the caller if needed.
    }
  }
  
async function displayFileContent(filePath, targetElementId) {
    try {
        const fileContent = await readTextFile(filePath);
        const targetElement = document.getElementById(targetElementId);
        targetElement.innerHTML = fileContent;
    } catch (error) {
        // Handle any errors that occurred during reading the file.
    }
  }

displayFileContent("https://gugu256.github.io/articles.html", "articles")