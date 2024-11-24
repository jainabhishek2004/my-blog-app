const container = document.getElementById("container");
let blogarr = JSON.parse(localStorage.getItem("blogs")) || []; // Retrieve existing blogs from localStorage

function showblog() {
    container.innerHTML = ""; // Clear previous blogs

    // If no blogs exist, display a message
    if (blogarr.length === 0) {
        const noBlogsMessage = document.createElement("p");
        noBlogsMessage.textContent = "No blogs to display!";
        container.appendChild(noBlogsMessage);
        return;
    }

    // Loop through each blog and display it
    for (let i = 0; i < blogarr.length; i++) {
        let newobj = blogarr[i];
        let newblog = document.createElement("div");
        newblog.classList.add('card');
        
        // Create the blog title with a link to a detailed page
        newblog.innerHTML = `
            <h2><a href="fullblog.html?index=${i}">${newobj.title}</a></h2>
            <p>${newobj.blog.split(/\s+/).slice(0, 20).join(' ')|| "No description available."}</p>
        `;
        container.appendChild(newblog);
    }
}

// Show blogs when the page loads
showblog();