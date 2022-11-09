// Burger

const HEADER = document.querySelector('.header');
const BURGER = HEADER.querySelector('.menu-button');
const MENU = HEADER.querySelector('.header__navigation-list');
const BG = HEADER.querySelector('.menu-button__background');
const LINK = document.querySelectorAll('.navigation__item');

BURGER.addEventListener('click', function () {
    HEADER.classList.toggle('header-active');
    document.body.classList.toggle('no-scroll');
})

BG.addEventListener('click', function () {
    HEADER.classList.toggle('header-active');
    document.body.classList.toggle('no-scroll');
})

for (let i = 0; i < LINK.length; i++) {
    LINK[i].addEventListener('click', function() {
        HEADER.classList.remove('header-active');
        // document.body.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');

    });
}

// Slider

let sliderTestimonial = tns ({
    container: '.testimonial__list',
    items: 1,
    speed: 400,
    controls: 0,
    navPosition: 'bottom',
    mouseDrag: true,
})

let sliderOffer = tns ({
    container: '.offer__list',
    items: 1,
    speed: 400,
    controls: 0,
    navPosition: 'bottom',
    mouseDrag: true,
    lazyload: true,
    responsive: {
        "576": {
          "items": 2
        },
        "992": {
          "items": 3
        }
      },
})


// Cart 

const bag = document.querySelector('.bag');
const shopCart = document.querySelector('.shopping-cart');
const closeCart = document.querySelector('.close-cart');
const shopBG = document.querySelector('.cart-bg')

bag.addEventListener('click', function() {
    shopCart.classList.toggle('shopping-cart-open');
    document.body.classList.toggle('no-scroll');
    shopBG.classList.toggle('cart-bg-open');
});

closeCart.addEventListener('click', function() {
    shopCart.classList.toggle('shopping-cart-open');
    document.body.classList.toggle('no-scroll');
    shopBG.classList.toggle('cart-bg-open');
});

shopBG.addEventListener('click', function () {
    shopCart.classList.toggle('shopping-cart-open');
    document.body.classList.toggle('no-scroll');
    shopBG.classList.remove('cart-bg-open');
})

const addToCart = document.querySelectorAll('.add-cart');
const cartItem = document.getElementsByClassName('cart-item');

for (let i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
    button = event.target;
    let btn_parent = button.parentElement;
    let btn_grandparent = button.parentElement.parentElement
    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_grandparent.children[3].children[0].children[1].innerText
    let itemImage = btn_grandparent.children[1].src
    console.log(itemImage, itemPrice, itemName);
    addItemtoCart(itemImage, itemPrice, itemName);
    updateCartPrice()
}

function addItemtoCart(itemImage, itemPrice, itemName) {
    let cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    let cartList = document.querySelector('.cart-list');
    let cartImage = document.querySelectorAll('.cart-image');
    

    for (let i = 0; i < cartImage.length; i++) {
        if (cartImage[i].src == itemImage) {
            alert (`${itemName} has already been added to the cart`)
            return;
        }
    }

    let cartRowItems = `
        <img class="cart-image" src="${itemImage}" alt="">
        <div class="center">
            <div class="cart-title">${itemName}</div>
            <span class="cart-price">${itemPrice}</span>
            <span class="remove">Remove</span>
        </div>
        <div class="quantity">
                    <input type="number" class="quantity-number" value="1">
                </div>
       
            
        `
    
    cartItem.innerHTML = cartRowItems;
    cartList.append(cartItem);
    cartItem.getElementsByClassName('remove')[0].addEventListener('click', removeItem)
    cartItem.getElementsByClassName('quantity-number')[0].addEventListener('click', changeQuantity)
    updateCartPrice()
}

const removeBtn = document.getElementsByClassName('remove');
for (let i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
    btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    updateCartPrice()
}

let quantityInput = document.getElementsByClassName('quantity-number')[0];

for (let i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0){
      input.value = 1
    }
    updateCartPrice()
}

function updateCartPrice() {
    let total = 0
    for (let i = 0; i < cartItem.length; i ++) {
      cartRow = cartItem[i]
    let priceElement = cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement = cartRow.getElementsByClassName('quantity-number')[0]
    let price = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = quantityElement.value
    total = total + (price * quantity )
    
    }
    document.querySelector('.cart-total').innerText = total.toFixed(2)
    i = cartItem.length
    document.querySelector('.bag-quantity').textContent = [i]

    
}
let cartTotal = document.querySelector('.cart-total')
let cartPurchase = document.querySelector('.cart-purchase');
const modalWindow = document.querySelector('.modal-window');
const modalBg = document.querySelector('.modal-bg');
const orderBtn = document.querySelector('.order-button');

cartPurchase.addEventListener('click', function() {
    if(cartTotal.innerText < '1') {
        alert('Your cart is empty.')
    } else {
        shopCart.classList.remove('shopping-cart-open');
        // document.body.classList.remove('no-scroll');
        shopBG.classList.remove('cart-bg-open');
        modalWindow.classList.add('modal-window-open');
        modalBg.classList.toggle('modal-bg-open');
     }
});

modalBg.addEventListener('click', function() {
    this.classList.remove('modal-bg-open');
    modalWindow.classList.remove('modal-window-open');
    document.body.classList.remove('no-scroll');
})

// orderBtn.addEventListener('click', function() {
//     modalBg.classList.remove('modal-bg-open');
//     modalWindow.classList.remove('modal-window-open');
//     document.body.classList.remove('no-scroll');
// })






// let cartList = document.querySelector('.cart-list');
// let cartPurchase = document.querySelector('.cart-purchase');

// cartPurchase.addEventListener('click', function() {
//     if(cartList.firstChild) {
//         alert('hello')
//     } else {
//         alert('bye')
//     }
// })





// Animation
AOS.init();


