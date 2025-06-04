const form = document.getElementById('chat-form');
const textarea = form.querySelector('textarea[name="message"]');
const feedList = document.getElementById('feed-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = textarea.value.trim();
  if (text === '') return;
  const li = document.createElement('li');
  li.textContent = text;
  feedList.prepend(li);
  textarea.value = '';
});
