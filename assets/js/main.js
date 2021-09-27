function header(){
    let header = document.getElementById("scroll__header");
    window.addEventListener("scroll", function(){
        var h = window.scrollY;
        if(h > 80){
            header.classList.add("active");
        } else {
            header.classList.remove('active')
        }
    })
}
header()

let menu__category = document.querySelector(".menu__category");
let menuBar = document.querySelector("#menu")
window.addEventListener("scroll", function () {
    var h = window.scrollY;
    if (h > 80) {
        menu__category.classList.add("active");
        menuBar.classList.add('top')
    } else {
        menu__category.classList.remove("active");
        menuBar.classList.remove("top")
    }
})


function menuCategory() {
    let clickCategory = document.querySelector(".menu__category > .icon");
    let check = "first";
    clickCategory.addEventListener("click", function () {
        if (check == "first") {
            check = "secondary";
            menu__category.classList.add("show");
        } else if (check == "secondary") {
            check = "first";
            menu__category.classList.remove("show");
        }
    })
}

menuCategory() 

function navBar() {
    let menuBar = document.querySelector("#menu")
    let nav = document.querySelector(".nav__bar");
    let check = "first";
    let closeMenu =  document.querySelector(".close");
    nav.addEventListener("click", function () {
        if (check == "first") {
            check = "secondary";
            menuBar.classList.add("active");
        } else if (check == "secondary") {
            check = "first";
            menuBar.classList.remove("active");
        }
    })

    closeMenu.addEventListener("click", function(){
        menuBar.classList.remove("active");
    })
}

navBar()

function allCategory(){
    let checks ="clickOne";
    let menuTitle = document.getElementById("click__show--info");
    let menuList = document.querySelector("#menu__show");
    menuTitle.addEventListener("click", function(){
        if(checks == "clickOne"){
            checks = "clickTwo";
            menuList.classList.add("active")
        } else if(checks == "clickTwo"){
            checks = "clickOne";
            menuList.classList.remove("active")
        }
    })
}

allCategory()

// sub__menu--main

function subMenu(){
    let sub = document.querySelectorAll(".sub");
    for (let i = 0; i < sub.length; i++) {
        sub[i].addEventListener("click", function () {
            var testSub = this.className;
            for (i = 0; i < sub.length; i++) {
                sub[i].className = "sub item";
            }
            if (testSub == "sub item") {
                this.className="sub item change";
            }
        })
    }
}

subMenu()

// footer

function footer() {
    let footerItem = document.querySelectorAll(".footer__top > .footer__top--list > .footer__top--item")
    let footerDesc = document.querySelectorAll(".footer__top > .footer__top--list > .footer__top--item> .footer__top--list")

    for (let i = 0; i < footerItem.length; i++) {
        footerItem[i].addEventListener("click", function () {
            var check = this.className;
            for (i = 0; i < footerDesc.length; i++) {
                footerItem[i].className = "footer__top--item";
            }
            if (check == "footer__top--item") {
                this.className = "footer__top--item active"
            }
        })
    }
}

footer()



