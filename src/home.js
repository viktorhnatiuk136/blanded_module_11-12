//Логіка сторінки Home
import { createMarkupCategoryList, createMarkupProductsList } from './js/render-function';
import { getCategories, getProducts, getProductsByCategory } from "./js/products-api";
import { handleBtnClick } from "./js/handlers";

const categoryList = document.querySelector(".categories");
const productsList = document.querySelector(".products");


const resultCategory = await getCategories();
const resultMarkupCategory = createMarkupCategoryList(resultCategory);

categoryList.innerHTML = resultMarkupCategory;

const resultProducts = await getProducts();
const resultMarkupProducts = createMarkupProductsList(resultProducts.products)

productsList.insertAdjacentHTML("beforeend", resultMarkupProducts);

categoryList.addEventListener("click", handleBtnClick)








