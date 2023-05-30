import * as helper from './helper.js';

function getAndListProducts() {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => {
        
        [...json.posts].splice(0, 4).forEach(post => {

            helper.productsContainerElement.innerHTML += helper.createProductHtml(
                post.tags, post.title, post.body
            );

        });

    })
}

getAndListProducts();

// https://dummyjson.com/products bunu çekin
// içindeki 6 tane ürünü alın
// ekrana güzel bir html ile basın

// history.pushState({id: 10}, 'About', '/about')