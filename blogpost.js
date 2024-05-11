const blogList = document.getElementById("blog-list")

// STORE THE BLOGPOSTS
let blogs = []

//NEW BLOG FUNCTIONALITY
function addBlogPost(title, content) {
    let blog = {
        title: title,
        content: content
    }
    blogs.push(blog)

    displayBlogLists()
}

// Display TO LIST
function  displayBlogLists() {
    blogList.innerHTML = ' '

    for (let i = 0; i < blogs.length; i++) {
        blogList.innerHTML += `<h3>${blog.title}</h3><p>${blog.content}</p>`
        
    }
}

//Submit button
document.getElementById('blogForm').addEventListener('submit', function(event)   { 
    let title = document.getElementById("title").value 
    let content = document.getElementById("content").value
    
    addBlogPost(title, content)

    document.getElementById('blogForm').reset()
    document.getElementById('blogForm').style.display = "none"

})