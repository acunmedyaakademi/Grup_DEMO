import { addObj, discountedPrice } from './utils.js';

const container = document.querySelectorAll('.product-list');
const filterContainer = document.querySelector('.filter-list');

let products = [];
let categories = [];
let filter = [];

const getProducts = () => {
  window.addEventListener('load', () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => {
        products = json.products;

        createElement();
        createFilter();
      });
  });
};

const createElement = () => {
  const tempArray = [];
  let tempObject = [];

  products.map((item) => tempArray.push(item.category));

  container.forEach((item) => {
    const piece = item.getAttribute('piece') || products.length;
    item.innerHTML = '';

    if (filter.length > 0) {
      filter.map(
        (filterItem) =>
          (tempObject = [
            ...tempObject,
            ...products.filter((productItem) => {
              return productItem.category === filterItem;
            }),
          ])
      );
    } else {
      tempObject = [...products];
    }

    tempObject.slice(0, piece).map((productItem) => {
      item.innerHTML += `
        <a href='#' class="card">
          <div class='image-container'>
            <img src=${productItem.thumbnail} alt=${productItem.title} />
          </div>
          <div class='discount'>-${productItem.discountPercentage}%</div>

          <div class="card-content">       
            <p class='card-title'>${productItem.title}</p>
            <p class='description'>${productItem.description}</p>
            <div class="price-container">
              <p class="price">${discountedPrice(
                productItem.price,
                productItem.discountPercentage
              )} EUR</p>
              <p class="discounted-price">${productItem.price} EUR</p>
            </div>         
          </div>
        </a>
      `;
    });
  });

  categories = [...new Set(tempArray)];
};

const createFilter = () => {
  categories.map((category) => {
    filterContainer.innerHTML += `
        <li class='filter'>
          <input type="checkbox" id=${category} class='filter-checkbox' value=${category} />
          <label for=${category}>${category}</label>
        </li>
      `;
  });

  handleChange();
};

const handleChange = () => {
  const filterCheckBoxes = document.querySelectorAll('.filter-checkbox');

  filterCheckBoxes.forEach((item) => {
    item.addEventListener('change', function () {
      filter = addObj(filter, item.value);

      createElement();
    });
  });
};

export default getProducts;
