const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content');
const closeButton = document.querySelector('.close_button');
const modalImage = document.querySelector('.modal_image');
const productList = document.querySelectorAll('.products');
const detailTitle = document.querySelector('.detail_title');
const detailPrice = document.querySelector('.detail_price');
const productCost = ['390,000đ','390,000đ','390,000đ','390,000đ','390,000đ','390,000đ','390,000đ','390,000đ'];
productList.forEach((list,index) => {
    const view = list.querySelector('.quick-view');
    const pro_img = list.querySelector('.product-thumb');

    view.addEventListener('click',() => {
        modal.classList.add('modal--bg');
        modalContent.classList.add('modal_content--show');
        modalImage.setAttribute('src', pro_img);
        detailTitle.innerText = 'product title ${index +1}';
        productCost.innerText = productCost[index];
    })
})
closeButton.addEventListener('click',() => {
    modal.classList.remove('modal--bg');
    modalContent.classList.remove('modal_content--show');
})
.addEventListener('click',() => {
    modal.classList.add('modal--bg');
    modalContent.classList.add('modal_content--show');
})