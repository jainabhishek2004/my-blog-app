const btn = document.getElementById("Enter");
        const title = document.getElementById("title");
        const blog = document.getElementById("blog");

        let blogarr = JSON.parse(localStorage.getItem("blogs")) || []; 

        btn.addEventListener("click", () => {
            if (title.value.trim() === "" || blog.value.trim() === "") {
                alert("Complete Title and Blog");
            } else {
                const blogObject = {
                    title: title.value.trim(),
                    blog: blog.value.trim(),
                };

                blogarr.push(blogObject); 
                localStorage.setItem("blogs", JSON.stringify(blogarr)); 

                title.value = ""; 
                blog.value = ""; 

                alert("Blog submitted successfully!");
            }
        });