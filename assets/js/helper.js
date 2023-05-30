const productsContainerElement = document.querySelector('.posts');

const createProductHtml = (tags, title, body) => 
`
    <div class="blogContainer">
        <h6 class="blogArticleTitle">${tags}</h6>
        <h4 class="blogHeader">${title}</h4>
        <h5 class="blogContent">${body}</h5>
    </div>
`;

export {productsContainerElement, createProductHtml}