const productContainers = [...document.querySelectorAll('.product-container')];
const ntxBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    ntxBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
})