var sidebar = document.getElementById("navSideBar");

function nav_open() {
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function nav_close() {
    sidebar.style.display = "none";
}
