const productContainer = document.getElementById("products");
const search = document.getElementById("search");
const productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});