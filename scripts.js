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
