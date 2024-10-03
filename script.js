// Set the page title
function setTitle(newTitle) {
    const titleElement = document.getElementById('pageTitle');
    if (newTitle) {
        titleElement.textContent = newTitle;
    } else {
        titleElement.textContent = 'Welcome to My Page'; 
    }
}

// Set the page description
function setDescription(newDescription) {
    const descriptionElement = document.getElementById('pageDescription');
    if (newDescription) {
        descriptionElement.textContent = newDescription;
    } else {
        descriptionElement.textContent = 'This is a customizable page.'; 
    }
}

// Set the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;

// Set the font color
function setFontColor(color) {
    document.body.style.color = color;
}
}

// Set the theme
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}
