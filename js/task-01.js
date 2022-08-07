const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.children;

console.log("Number of categories:", categoriesItems.length);

for (let i = 0; i < categoriesItems.length; i += 1) {
  console.log("Category:", categoriesItems[i].firstElementChild.textContent);
  console.log("Elements:", categoriesItems[i].lastElementChild.children.length);
}
