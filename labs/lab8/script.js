function toggleTheme() {
    // Identify the <body> element of the page
    var body = document.body
    // Toggle .dark-mode css class on <body>
    body.classList.toggle("dark-mode")
}

let darkMode = document.getElementById("toggleButton");
darkMode.onclick = toggleTheme;
