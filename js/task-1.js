const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

for (const categoryItem of categoriesItems) {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryLiElems = categoryItem.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryLiElems}`);
}
