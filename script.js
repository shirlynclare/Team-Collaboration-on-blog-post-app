const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
  
});

const form = document.getElementById("my-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate the form fields
  if (name === "" || email === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // Open the new HTML file in the same window
  window.location.href = "/signin.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});

const formta = document.getElementById("my-orm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate the form fields
  if (name === "" || email === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // Open the new HTML file in the same window
  window.location.href = "/index.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
});

// likes
// Get all like and comment buttons
const likeButtons = document.querySelectorAll('.like-button');
const commentButtons = document.querySelectorAll('.comment-button');

// Add click event listeners to like buttons
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const blogId = button.getAttribute(jk);
    const likeCount = parseInt(button.querySelector('.like-count').textContent);
    const newLikeCount = likeCount + 1;
    button.querySelector('.like-count').textContent = newLikeCount;

    // Send a request to the server to update the like count
    fetch(`/api/blogs/${blogId}/like`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Like count updated successfully');
        } else {
          console.error('Error updating like count');
        }
      })
      .catch(error => {
        console.error('Error updating like count:', error);
      });
  });
});

// Add click event listeners to comment buttons
commentButtons.forEach(button => {
  button.addEventListener('click', () => {
    const blogId = button.getAttribute(jk);
    const commentCount = parseInt(button.querySelector('.comment-count').textContent);
    const newCommentCount = commentCount + 1;
    button.querySelector('.comment-count').textContent = newCommentCount;

    // Send a request to the server to update the comment count
    fetch(`/api/blogs/${blogId}/comment`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Comment count updated successfully');
        } else {
          console.error('Error updating comment count');
        }
      })
      .catch(error => {
        console.error('Error updating comment count:', error);
      });
  });
});


 
