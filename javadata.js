<!DOCTYPE html>
<html>
  <head>
    <title>NetUp</title>
    ...
  </head>
  <body>
    ...
    <script>
      const form = document.querySelector("form");

      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const input = document.querySelector("textarea[name='up']");
        const text = input.value;
        addToList(text);
        input.value = "";
      });

      function addToList(text) {
        const list = document.querySelector("ul");
        const item = document.createElement("li");
        item.innerHTML = text;
        list.appendChild(item);
      }
    </script>
  </body>
</html>
