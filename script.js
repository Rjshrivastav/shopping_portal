const a = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`

function createCard(img, bName, desc, price, rating) {
    let html = `<div class="card">
    <div class="h-s">
                    <div class="heart"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 512 512">
                        <path
                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg></div>
                    <div class="share"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="30" viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg></div>
                    </div>
    <div class="card-img">
        <img src="${img}" alt="image">
    </div>
    <div class="card-text">
        <h1>${bName}</h1>
        <article>${desc}</article>
        <h2>${price}</h2>
    </div>
    <div class="card-rating">
    <span class="str checked">${rating}</span>
    <span class="str checked">${rating}</span>
    <span class="str checked">${rating}</span>
    <span class="str checked">${rating}</span>
    <span class="str">${rating}</span>
    </div>
    <button>Add to cart</button>
</div>`

document.querySelector(".card-container").innerHTML = document.querySelector(".card-container").innerHTML + html
}


function createReviewCard(pic, pName, rating) {
    let html = `<div class="card">
    <div class="review-top">
        <div class="profile-img">
            <img src="${pic}" alt="">
        </div>
        <div class="profile-name">
            <h1>${pName}</h1>
            <div class="card-rating">
    <span class="str checked">${rating}</span>
    <span class="str checked">${rating}</span>
    <span class="str checked">${rating}</span>
    <span class="str checked">${rating}</span>
    <span class="str">${rating}</span>
    </div>
        </div>
    </div>
    <div class="review-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab labore praesentium corrupti maiores nostrum, culpa ex rerum provident. Voluptatem?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab labore praesentium corrupti maiores nostrum, culpa ex rerum provident. Voluptatem?
    </div>
</div>`

document.querySelector(".review-container").innerHTML = document.querySelector(".review-container").innerHTML + html
}

createCard('assests/shoes1.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes2.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes3.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes4.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes5.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes6.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes7.png', 'NIKE', 'Running Shoe', '$19.99', a)
createCard('assests/shoes8.png', 'NIKE', 'Running Shoe', '$19.99', a)


createReviewCard('assests/demo-pic.jpg', 'just do it', a)
createReviewCard('assests/demo-pic.jpg', 'just do it', a)
createReviewCard('assests/demo-pic.jpg', 'just do it', a)
createReviewCard('assests/demo-pic.jpg', 'just do it', a)
createReviewCard('assests/demo-pic.jpg', 'just do it', a)
createReviewCard('assests/demo-pic.jpg', 'just do it', a)
