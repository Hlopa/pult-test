'use scrict';

document.addEventListener("DOMContentLoaded", function () {

  //Slider

  $('.preview-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
  });

  $('.sales-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
  })


  //Products

  const productList = document.querySelector('.products__list'),
    productsImg = document.querySelector('.products__img'),
    productsItems = document.querySelectorAll('.products__item'),
    productsDetailItems = document.querySelectorAll('.products-detail__item');

  productList.addEventListener('mouseover', (e) => {

    if (e.target.className === 'products__item') {

      productsItems.forEach((item) => { item.classList.remove('products__item-active') });

      e.target.classList.add('products__item-active');
      productsImg.setAttribute('src', e.target.dataset.src);
      if (productsImg.previousElementSibling && productsImg.previousElementSibling.type === 'image/webp') {
        productsImg.previousElementSibling.setAttribute('srcset', e.target.dataset.src);
      }
    };
  })

  productList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'products__link') {
      productsDetailItems.forEach((item) => {
        item.classList.remove('products-detail__item--active')
      });

      const li = document.querySelector(`[data-link=${e.target.dataset.name}]`);
      li.classList.add('products-detail__item--active');
    };

    const productsMiniList = document.querySelector('.products-detail__item--active .products-mini__list');
    const productImageMain = document.querySelector('.products-detail__item--active .products-detail__image-main');
    const productImageMini = document.querySelectorAll('.products-detail__item--active .mini-img');
    const productsDetailColor = document.querySelector('.products-detail__item--active .products-detail__color');

    productsMiniList.addEventListener('click', (e) => {

      if ((e.target.tagName).toLowerCase() === 'img') {

        productImageMini.forEach((item) => { item.classList.remove('product-mini-item--active') });

        productImageMain.setAttribute('src', e.target.dataset.src);
        if (productImageMain.previousElementSibling && productImageMain.previousElementSibling.type === 'image/webp') {
          productImageMain.previousElementSibling.setAttribute('srcset', e.target.dataset.src);
        }

        if (productsDetailColor) {
          productsDetailColor.textContent = e.target.dataset.color;
        }

        e.target.classList.add('product-mini-item--active');
      }
    })
  })
});
