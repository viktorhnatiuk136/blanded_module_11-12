import { getProductsByCategory, getProducts } from './products-api';
import { createMarkupProductsList } from './render-function';

const productsList = document.querySelector('.products');
const categoryList = document.querySelector('.categories');

export async function handleBtnClick(event) {
  let products;
  let btn = event.target;
  if (btn.classList.contains('categories__btn')) {
    if (btn.textContent !== 'All') {
      products = await getProductsByCategory(btn.textContent);
    } else {
      products = await getProducts();
    }

    const newMarkup = createMarkupProductsList(products.products);

    productsList.innerHTML = '';
    productsList.insertAdjacentHTML('beforeend', newMarkup);

    console.log(productsList.querySelector('.categories__btn--active'));

    categoryList
      .querySelector('.categories__btn--active')
      .classList.remove('categories__btn--active');

    btn.classList.add('categories__btn--active');
  }
}
