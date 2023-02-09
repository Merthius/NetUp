

// Get the feed button
const feedButton = document.querySelector(".feed-button");

// Get the feed container
const feedContainer = document.querySelector(".feed-container");

// Hide the feed container by default
feedContainer.style.display = "none";

// Add a click event listener to the feed button
feedButton.addEventListener("click", function() {
  // If the feed container is hidden
  if (feedContainer.style.display === "none") {
    // Show the feed container
    feedContainer.style.display = "block";
  } else {
    // Hide the feed container
    feedContainer.style.display = "none";
  }
});
