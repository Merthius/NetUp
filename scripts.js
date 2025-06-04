const form = document.getElementById('chat-form');
const textarea = form.querySelector('textarea[name="message"]');
const feedList = document.getElementById('feed-list');

const signupOverlay = document.getElementById('signup-overlay');
const signupForm = document.getElementById('signup-form');
const signupName = document.getElementById('signup-name');

let username = localStorage.getItem('username');
if (!username) {
  signupOverlay.classList.remove('hidden');
}

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  username = signupName.value.trim();
  if (username) {
    localStorage.setItem('username', username);
    signupOverlay.classList.add('hidden');
  }
});

function buildCommentElement(text, user) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${user}</strong><p>${text}</p><button class="reply-btn">Antworten</button>`;
  const replies = document.createElement('ul');
  li.appendChild(replies);
  const replyForm = document.createElement('form');
  replyForm.classList.add('reply-form', 'hidden');
  replyForm.innerHTML = '<textarea></textarea><button type="submit">Senden</button>';
  li.appendChild(replyForm);
  return li;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = textarea.value.trim();
  if (text === '' || !username) return;
  const li = buildCommentElement(text, username);
  feedList.prepend(li);
  textarea.value = '';
});

feedList.addEventListener('click', (event) => {
  if (event.target.classList.contains('reply-btn')) {
    const li = event.target.closest('li');
    const replyForm = li.querySelector('.reply-form');
    replyForm.classList.toggle('hidden');
  }
});

feedList.addEventListener('submit', (event) => {
  if (event.target.classList.contains('reply-form')) {
    event.preventDefault();
    const textarea = event.target.querySelector('textarea');
    const text = textarea.value.trim();
    if (text === '' || !username) return;
    const replies = event.target.parentElement.querySelector('ul');
    const newLi = buildCommentElement(text, username);
    replies.prepend(newLi);
    textarea.value = '';
    event.target.classList.add('hidden');
  }
});
