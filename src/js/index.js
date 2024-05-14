let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'Thẻ Viettel 50 <br> Full Seri',
        image1: './image/viettel50.jpg',
        image2: './image/viettel50.jpg',
        old_price: '50.000d',
        curr_price: '47.000d'
    },
    {
        name: 'Thẻ Mobifone 100 <br> Full Seri',
        image1: './image/mobi100f.jpg',
        image2: './image/mobi100f.jpg',
        old_price: '100.000d',
        curr_price: '92.000d'
    },
    {
        name: 'Thẻ Viettel 100 <br> Full Seri',
        image1: './image/viettel100f.jpg',
        image2: './image/viettel100f.jpg',
        old_price: '100.000d',
        curr_price: '92.000d'
    },
    {
        name: 'Sữa ngôi sao phương nam 1.284g',
        image1: './image/npn128.jpg',
        image2: './image/nsp.jpg',
        old_price: '59.000d',
        curr_price: '55.000d'
    },
    {
        name: 'Sữa ngôi sao phương nam lon 380g',
        image1: './image/nspn1.jpg',
        image2: './image/lonnspn.jpg',
        old_price: '20.000d',
        curr_price: '18.500d'
    },
    {
        name: 'Nạp trực tiếp <br> Viettel 100',
        image1: './image/viettel100.jpg',
        image2: './image/viettel100.jpg',
        old_price: '100.000d',
        curr_price: '93.000d'
    },
    {
        name: 'Nạp trực tiếp <br> Vina 100',
        image1: './image/vina100.jpg',
        image2: './image/vina100.jpg',
        old_price: '100.000d',
        curr_price: '92.000d'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">MUA NGAY</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


