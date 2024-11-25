let blogarr = JSON.parse(localStorage.getItem("blogs")) || [];
   const input = document.getElementById("search-inp");
   const append = document.getElementById("my-search");

  
input.addEventListener("input", () => {
  const search = input.value.toLowerCase();

 
  append.innerHTML = ""; 

  if (search) {
    const filtered = blogarr.filter(blog => blog.title.toLowerCase().includes(search));
    console.log(filtered);

   
    const list = document.createElement('ul');

    filtered.forEach((element, i) => { 
      const listItem = document.createElement('li');
      
      const link = document.createElement('a');
      link.href = `fullblog.html?index=${blogarr.indexOf(element)}`;
      listItem.addEventListener("click",()=>{
        window.location.href = `fullblog.html?index=${blogarr.indexOf(element)}`;
        

      })
      link.classList.add('new-a') ;
      link.textContent = element.title; 
      listItem.appendChild(link); 
      list.appendChild(listItem); 
    });

    
    append.appendChild(list);

    
    if (filtered.length > 0) {
      append.style.display = 'block'; 
    } else {
      append.style.display = 'none'; 
    }
  } else {
    
    append.style.display = 'none';
  }
});
