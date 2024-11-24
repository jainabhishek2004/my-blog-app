const fullBlogContainer = document.getElementById("full-blog-container");
const blogarr = JSON.parse(localStorage.getItem("blogs")) || []; // Retrieve existing blogs from localStorage

// Get the index from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');

if (index !== null && blogarr[index]) {
    const blog = blogarr[index];
    fullBlogContainer.innerHTML = `<h1>${blog.title}</h1><p>${blog.blog}</p>`;
} else {
    fullBlogContainer.innerHTML = "<p>Blog not found!</p>";
}