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

// Usage example:
const filePath = 'https://gugu256.github.io';


let projectsToggled = false
let contactsToggled = false
let coffeeToggled = false
let newsToggled = false

function displayProjects() {
  if (projectsToggled == false) {
    //document.getElementById("projectspart").innerHTML =  readTextFile(filePath);
    displayFileContent('https://gugu256.github.io/projects.html', 'projectspart');
    document.getElementById("arrowprojects").innerHTML = "▾"
    projectsToggled = true
  } else {
    document.getElementById("projectspart").innerHTML = ""
    document.getElementById("arrowprojects").innerHTML = "▸"
    projectsToggled = false
  }
}

function displayContacts() {
  if (contactsToggled == false) {
    displayFileContent('https://gugu256.github.io/contacts.html', 'contactspart');
    document.getElementById("arrowcontacts").innerHTML = "▾"
    contactsToggled = true
  } else {
    document.getElementById("contactspart").innerHTML = ""
    document.getElementById("arrowcontacts").innerHTML = "▸"
    contactsToggled = false
  }
}

function displayCoffee() {
  if (coffeeToggled == false) {
    displayFileContent('https://gugu256.github.io/donating.html', 'coffeepart');
    document.getElementById("arrowcoffee").innerHTML = "▾"
    coffeeToggled = true
  } else {
    document.getElementById("coffeepart").innerHTML = ""
    document.getElementById("arrowcoffee").innerHTML = "▸"
    coffeeToggled = false
  }
}

function displayNews() {
  if (newsToggled == false) {
    document.getElementById("newspart").innerHTML = ""
    document.getElementById("arrownews").innerHTML = "▾"
    newsToggled = true
  } else {
    document.getElementById("newspart").innerHTML = ""
    document.getElementById("arrownews").innerHTML = "▸"
    newsToggled = false
  }

}