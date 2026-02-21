export function createMarkupCategoryList(arr) {
  return arr
    .map(item => {
      return `<li class="categories__item">
   <button class="categories__btn ${item === 'All' ? 'categories__btn--active' : ''}" type="button">${item}</button>
 </li>`;
    })
    .join('');
}

export function createMarkupProductsList(arr) {
  return arr
    .map(({ id, thumbnail, brand, category, title, price, description }) => {
      return `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${description}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>`;
    })
    .join('');
}
