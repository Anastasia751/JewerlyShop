//let leftBtn = document.getElementById('.leftBtn');
//let rightBtn = document.getElementById('.rightBtn');
document.addEventListener("DOMContentLoaded", () => {
  // Get the elements
  let horizonScroll = document.querySelector(".new_arrivals");
  let leftBtn = document.getElementById("leftBtn");
  let rightBtn = document.getElementById("rightBtn");

  // Debugging: Check if elements are correctly selected
  if (!horizonScroll || !leftBtn || !rightBtn) {
    console.error("One or more elements are not found.");
    return;
  }

  // Add event listeners to buttons
  rightBtn.addEventListener("click", () => {
    console.log("Right button clicked");
    horizonScroll.scrollLeft += 300; // Adjust the scroll value if needed
  });

  leftBtn.addEventListener("click", () => {
    console.log("Left button clicked");
    horizonScroll.scrollLeft -= 300; // Adjust the scroll value if needed
  });
});

const category = document.querySelectorAll(".shop_category");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = searchInput.value.toLowerCase();

  category.forEach((shop_category) => {
    const title = shop_category
      .querySelector(".shop_category h4")
      .textContent.toLowerCase();
    if (title.includes(query)) {
      shop_category.style.display = "block";
    } else {
      shop_category.style.display = "none";
    }
  });
});
