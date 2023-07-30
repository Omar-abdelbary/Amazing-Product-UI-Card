let imgTop = document.querySelector(".top-imgProduct img") ; 
let images = document.querySelectorAll(".img-product img") ; 

for (let i = 0; i < images.length; i++ ) {
    images[i].addEventListener('click' , function (e) {

        let imgSrc = e.target.getAttribute('src') ; 

        imgTop.setAttribute('src' , imgSrc)
        
    })
    
}