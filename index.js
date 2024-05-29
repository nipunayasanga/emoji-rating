// Select all elements with the class "fa-star" and assign them to starsEl
const starsEl = document.querySelectorAll(".fa-star");

// Select all elements with the class "far" and assign them to emojisEl
const emojisEl = document.querySelectorAll(".far");

// Define an array of colors to be used for each rating level
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

// Initial call to updateRating to set the default rating to 0
updateRating(0);

// Iterate over each star element and add a click event listener
starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    // When a star is clicked, update the rating based on the star's index
    updateRating(index);
  });
});

// Function to update the rating visuals based on the clicked star's index
function updateRating(index) {
  // Iterate over each star element
  starsEl.forEach((starEl, idx) => {
    // Add the "active" class to all stars up to and including the clicked star
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      // Remove the "active" class from stars beyond the clicked star
      starEl.classList.remove("active");
    }
  });

  // Iterate over each emoji element
  emojisEl.forEach((emojiEl) => {
    // Move the emoji to the left based on the index and change its color
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
