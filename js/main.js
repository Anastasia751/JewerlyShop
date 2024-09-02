let horizonScroll = document.querySelector(".new_arrivals");
let leftBtn = document.getElementById('.leftBtn');
let rightBtn = document.getElementById('.rightBtn');

rightBtn.addEventListener('click', ()=> {
    horizonScroll.style.scrollBehavior = "smooth",
    horizonScroll.scrollLeft += 1450;
});

leftBtn.addEventListener('click', ()=> {
    horizonScroll.style.scrollBehavior = "smooth",
    horizonScroll.scrollLeft -= 1450;
});




const category = document.querySelectorAll(".shop_category");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase();

        category.forEach(shop_category => {
        const title = shop_category.querySelector(".shop_category h4").textContent.toLowerCase();
        if(title.includes(query)) {
            shop_category.style.display = "block"
        } else {
            shop_category.style.display = "none"
        }
    });

});