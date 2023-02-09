document.addEventListener("DOMContentLoaded", function(){
  const feed = document.querySelector("#postup-feed");
  const feedButton = document.querySelector(".header-btn");

  feed.style.display = "none";

  feedButton.addEventListener("click", function(){
    if (feed.style.display === "none") {
      feed.style.display = "block";
    } else {
      feed.style.display = "none";
    }
  });
});


const toggleBtn = document.querySelector("#toggle-dark-mode");
  const body = document.querySelector("body");

  toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
  });

      const form = document.querySelector("form");
      const postup = document.querySelector("textarea[name='postup']");
      const feed = document.querySelector("#postup-feed");
    
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const li = document.createElement("li");
        li.textContent = postup.value;
        feed.appendChild(li);
        postup.value = "";
      });
