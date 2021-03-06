var disPercentage = document.getElementsByClassName("discount__percentage");
for (var i = 0; i < disPercentage.length; i++) {
    // console.log(disPercentage[i].childNodes[1].textContent)
    if (disPercentage[i].childNodes[1].textContent === "0%") {
        disPercentage[i].style.display = "none";
    }
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementsByClassName(id)[0];
    // var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hour');
    var minutesSpan = clock.querySelector('.min');
    var secondsSpan = clock.querySelector('.sec');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        //   daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 2 * 60 * 60 * 1000);
initializeClock('home-page__flash-sale', deadline);


$(".home-page__health-care .slider__prev").css("display", "none");

$(".home-page__health-care .slider__next").click(function () {
    var x = document.querySelector(".home-page__health-care .row");
    console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__health-care .row").toggleClass("swipe-next");
        $(".home-page__health-care .row").removeClass("swipe-prev");
    }

    $(".home-page__health-care .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__health-care .slider__prev").click(function () {
    $(".home-page__health-care .row").removeClass("swipe-next");
    $(".home-page__health-care .row").toggleClass("swipe-prev");

    $(".home-page__health-care .slider__next").css("display", "flex");
    $(this).css("display", "none");
});

//
$(".home-page__food .slider__prev").css("display", "none");

$(".home-page__food .slider__next").click(function () {
    var x = document.querySelector(".home-page__food .row");
    console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__food .row").toggleClass("swipe-next");
        $(".home-page__food .row").removeClass("swipe-prev");
    }

    $(".home-page__food .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__food .slider__prev").click(function () {
    $(".home-page__food .row").removeClass("swipe-next");
    $(".home-page__food .row").toggleClass("swipe-prev");

    $(".home-page__food .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book .slider__prev").css("display", "none");
$(".home-page__text-book .slider__next").click(function () {
    var x = document.querySelector(".home-page__text-book .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__text-book .row").toggleClass("swipe-next");
        $(".home-page__text-book .row").removeClass("swipe-prev");
    }

    $(".home-page__text-book .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book .slider__prev").click(function () {
    $(".home-page__text-book .row").removeClass("swipe-next");
    $(".home-page__text-book .row").toggleClass("swipe-prev");

    $(".home-page__text-book .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-2 .slider__prev").css("display", "none");
$(".home-page__text-book-2 .slider__next").click(function () {
    var x = document.querySelector(".home-page__text-book-2 .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__text-book-2 .row").toggleClass("swipe-next");
        $(".home-page__text-book-2 .row").removeClass("swipe-prev");
    }

    $(".home-page__text-book-2 .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-2 .slider__prev").click(function () {
    $(".home-page__text-book-2 .row").removeClass("swipe-next");
    $(".home-page__text-book-2 .row").toggleClass("swipe-prev");

    $(".home-page__text-book-2 .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-3 .slider__prev").css("display", "none");

$(".home-page__text-book-3 .slider__next").click(function () {
    var x = document.querySelector(".home-page__text-book-3 .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__text-book-3 .row").toggleClass("swipe-next");
        $(".home-page__text-book-3 .row").removeClass("swipe-prev");
    }

    $(".home-page__text-book-3 .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__text-book-3 .slider__prev").click(function () {
    $(".home-page__text-book-3 .row").removeClass("swipe-next");
    $(".home-page__text-book-3 .row").toggleClass("swipe-prev");

    $(".home-page__text-book-3 .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__toy .slider__prev").css("display", "none");

$(".home-page__toy .slider__next").click(function () {
    var x = document.querySelector(".home-page__toy .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__toy .row").toggleClass("swipe-next");
        $(".home-page__toy .row").removeClass("swipe-prev");
    }

    $(".home-page__toy .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__toy .slider__prev").click(function () {
    $(".home-page__toy .row").removeClass("swipe-next");
    $(".home-page__toy .row").toggleClass("swipe-prev");

    $(".home-page__toy .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__draw .slider__prev").css("display", "none");

$(".home-page__draw .slider__next").click(function () {
    var x = document.querySelector(".home-page__draw .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__draw .row").toggleClass("swipe-next");
        $(".home-page__draw .row").removeClass("swipe-prev");
    }

    $(".home-page__draw .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__draw .slider__prev").click(function () {
    $(".home-page__draw .row").removeClass("swipe-next");
    $(".home-page__draw .row").toggleClass("swipe-prev");

    $(".home-page__draw .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__child-book .slider__prev").css("display", "none");

$(".home-page__child-book .slider__next").click(function () {
    var x = document.querySelector(".home-page__child-book .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__child-book .row").toggleClass("swipe-next");
        $(".home-page__child-book .row").removeClass("swipe-prev");
    }

    $(".home-page__child-book .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__child-book .slider__prev").click(function () {
    $(".home-page__child-book .row").removeClass("swipe-next");
    $(".home-page__child-book .row").toggleClass("swipe-prev");

    $(".home-page__child-book .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__manga .slider__prev").css("display", "none");

$(".home-page__manga .slider__next").click(function () {
    var x = document.querySelector(".home-page__manga .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__manga .row").toggleClass("swipe-next");
        $(".home-page__manga .row").removeClass("swipe-prev");
    }

    $(".home-page__manga .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__manga .slider__prev").click(function () {
    $(".home-page__manga .row").removeClass("swipe-next");
    $(".home-page__manga .row").toggleClass("swipe-prev");

    $(".home-page__manga .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__calc .slider__prev").css("display", "none");

$(".home-page__calc .slider__next").click(function () {
    var x = document.querySelector(".home-page__calc .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__calc .row").toggleClass("swipe-next");
        $(".home-page__calc .row").removeClass("swipe-prev");
    }

    $(".home-page__calc .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__calc .slider__prev").click(function () {
    $(".home-page__calc .row").removeClass("swipe-next");
    $(".home-page__calc .row").toggleClass("swipe-prev");

    $(".home-page__calc .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__vpp .slider__prev").css("display", "none");

$(".home-page__vpp .slider__next").click(function () {
    var x = document.querySelector(".home-page__vpp .row");
    // console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__vpp .row").toggleClass("swipe-next");
        $(".home-page__vpp .row").removeClass("swipe-prev");
    }

    $(".home-page__vpp .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__vpp .slider__prev").click(function () {
    $(".home-page__vpp .row").removeClass("swipe-next");
    $(".home-page__vpp .row").toggleClass("swipe-prev");

    $(".home-page__vpp .slider__next").css("display", "flex");
    $(this).css("display", "none");
});
var hp_slider_count = 0;

setInterval(function(){
    $(".home-page__slider .slider__image").addClass("swipe-next");

    hp_slider_count ++;
    if (hp_slider_count <= 7) {
        $('.slider__image.swipe-next').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    } else {
        hp_slider_count = 0;
        $('.slider__image.swipe-next').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    }
}, 3000);


$(".home-page__slider .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__slider .slider__image").addClass("swipe-next");
    hp_slider_count++;
    if (hp_slider_count <= 7) {
        $('.slider__image.swipe-next').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    } else {
        hp_slider_count = 0;
        $('.slider__image.swipe-next').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    }
});
$(".home-page__slider .slider__prev").click(function () {
    hp_slider_count--;
    $(".home-page__slider .slider__image").addClass("swipe-prev");
    if (hp_slider_count > 0 && hp_slider_count <= 7) {
        $('.slider__image.swipe-prev').css('transform', 'translateX(' + -hp_slider_count + '00%)');
    } else {
        hp_slider_count = 0;
        $('.slider__image.swipe-prev').css('transform', 'translateX(' + 0 + '00%)');
    }
});

$(".side-bar__left").click(function () {
    $(".side-bar").toggleClass("show");
    var x = document.getElementsByClassName("side-bar__right")[0];
    // console.log(x.style.boxShadow)
    if (!x.style.boxShadow == "") {
        x.style.boxShadow = "";
    } else {
        x.style.boxShadow = "0px 0px 4px 2px #999999";
    }
});


var para = document.createElement("p");
var node = document.createTextNode("T?? B??nh Y??n V??? H???nh Ph??c");
para.appendChild(node);

var para2 = document.createElement("p");
var node2 = document.createTextNode('Sau th??nh c??ng c???a cu???n s??ch ?????u tay ???Ph???i l??ng v???i c?? ????n??? ch??ng h???a s?? n???i ti???ng v?? t??i n??ng Kulzsc ???? tr??? l???i v???i m???t cu???n s??ch v?? c??ng ?????c bi???t mang t??n: "T?? b??nh y??n - v??? h???nh ph??c" ??? s???c n??t phong c??ch c?? nh??n v???i m???t ch??t "th?? th???n, r???t hi???n".');
para2.appendChild(node2);

var para3 = document.createElement("p");
var node3 = document.createTextNode('Kh??ng gi???ng v???i nh???ng cu???n s??ch ch??? ????? ?????c, "T?? b??nh y??n ??? v??? h???nh ph??c" l?? m???t cu???n s??ch m?? ?????c gi??? v???a t??m ???????c "H???nh ph??c to to t??? nh???ng ??i???u nho nh???" v???a ???????c th???c h??nh ngay l???p t???c. M???t s??? k???t h???p m???i l??? ?????y th?? v??? gi???a th??? lo???i s??ch t???n v??n v?? s??ch t&o...');
para3.appendChild(node3);

var rank_1 = {
    img: "./assets/img/rank-1.jpg",
    bookName: "T?? B??nh Y??n V??? H???nh Ph??c (T??i B???n 2021)",
    author: "Kulzsc",
    point: 26041,
    publisher: "NXB Ph??? N??? Vi???t Nam",
    price: 79000,
    discount: 18,
    rank: 1,
    desc: [
        para,
        para2,
        para3
    ]
}
var para2_1 = document.createElement("p");
para2_1.textContent = "";
var em = document.createElement("em");
em.textContent = "T???t c??? nh???ng tr???i nghi???m trong chuy???n phi??u du theo ??u???i v???n m???nh c???a m??nh ???? gi??p Santiago th???u hi???u ???????c ?? ngh??a s??u xa nh???t c???a h???nh ph??c, h??a h???p v???i v?? tr??? v?? con ng?????i.";

para2_1.appendChild(em);
var em2 = document.createElement("em");
// em = "";
em2.textContent = "Nh?? gi??? kim ";
var para2_2 = document.createElement("p");
para2_2.textContent = "";
var node4 = document.createTextNode("");
node4.textContent = "Ti???u thuy???t ";
para2_2.appendChild(node4);
para2_2.appendChild(em2);
console.log(para2_2)
// para2_2.appendChild(node2);
var node5 = document.createTextNode("");
node5.textContent = " c???a Paulo Coelho nh?? m???t c??u chuy???n c??? t??ch gi???n d???, nh??n ??i, gi??u ch???t th??, th???m ?????m nh???ng minh tri???t huy???n b?? c???a ph????ng ????ng. Trong l???n xu???t b???n ?????u ti??n t???i Brazil v??o n??m 1988, s??ch ch??? b??n ???????c 900 b???n. Nh??ng, v???i s??? ph???n ?????c bi???t c???a cu???n s??ch d??nh cho to??n nh??n lo???i, v?????t ra ngo??i bi??n gi???i qu???c gia, ";
para2_2.appendChild(node5);
var em3 = document.createElement("em");
// em = "";
em3.textContent = "Nh?? gi??? kim ";
para2_2.appendChild(em3);
var node6 = document.createTextNode("???? l??m rung ?????ng h??ng tri???u t??m h???n, tr??? th??nh m???t trong nh???ng cu???n s??ch b??n ch???y nh???t m???i th???i ?????i, v?? c??...");
para2_2.appendChild(node6);

var rank_2 = {
    img: "./assets/img/rank-2.jpg",
    bookName: "Nh?? Gi??? Kim (T??i B???n 2021)",
    author: "Paulo Coelho",
    point: 24426,
    publisher: "NXB H???i Nh?? V??n",
    price: 79000,
    discount: 15,
    rank: 2,
    desc: [
        para2_1,
        para2_2
    ]
}

var para3_1 = document.createElement('p');
var em3_1 = document.createElement('em');
em3_1.textContent = '"T??i l??c 6 tu???i: M??? ??i, 25 tu???i con s??? mua cho m??? m???t c??n nh?? l???n v?? chi???c xe h??i!';
para3_1.appendChild(em3_1);

var para3_2 = document.createElement('p');
var em3_2 = document.createElement('em');
em3_2.textContent = 'T??i l??c 25 tu???i: M??? y??u, shipper ?????n r???i con c??n thi???u 20k ????? nh???n h??ng."';
para3_2.appendChild(em3_2);
var para3_3 = document.createElement('p');
para3_3.textContent = '????ng l?? tu???i tr??? ch??a tr???i s??? ?????i, l???n r???i m???i bi???t h??a ra cu???c ?????i kh??ng ch??? c?? m??u h???ng, kh??ng ph???i c??i g?? m??nh th??ch, m??nh mu???n l?? a l?? h???p b???n s??? c?? ???????c ngay, m?? tr??i l???i - b???n ph???i v???t l???n v???i ????? th???, d?? ch??? ????n gi???n l?? ????? s???ng m???t ?????i b??nh th?????ng th??i.';
var para3_4 = document.createElement('p');
para3_4.textContent = 'Nh??ng m?? h???i th???t l??ng nh??, cu???c ?????i th???c s??? ???kh?? ?????? v?? ???bu???n??? t???i v???y ???';
var rank_3 = {
    img: "./assets/img/rank-3.jpg",
    bookName: "Vui V??? Kh??ng Qu???u Nha 2",
    author: "??? ????y Zui N??",
    point: 24155,
    publisher: "NXB Ph??? N??? Vi???t Nam",
    price: 69000,
    discount: 20,
    rank: 3,
    desc: [para3_1, para3_2, para3_3, para3_4]
}
var rank_4 = {
    img: "./assets/img/rank-4.jpg",
    bookName: "Vui V??? Kh??ng Qu???u Nha",
    author: "??? ????y Zui N??",
    point: 24002,
    publisher: "NXB Ph??? N??? Vi???t Nam",
    price: 79000,
    discount: 18,
    rank: 4,
    desc: [
        para2_1,
        para2_2
    ]
}
var rank_5 = {
    img: "./assets/img/rank-5.jpg",
    bookName: "T??? ??i???n Ti???ng Em",
    author: "Khotudien",
    point: 20000,
    publisher: "NXB Ph??? N??? Vi???t Nam",
    price: 79000,
    discount: 18,
    rank: 5,
    desc: [
        para,
        para2,
        para3
    ]
}

var ranksItem = new Array(rank_1, rank_2, rank_3, rank_4, rank_5);

var ranksItemImgs = document.querySelectorAll(".infor__img img");

var ranksItemAuthors = document.querySelectorAll(".label__author");

var ranksItemPoints = document.querySelectorAll(".label__point");

var ranksItemProductNames = document.querySelectorAll(".label__product-name");

for (var i = 0; i < 5; i++) {
    ranksItemImgs[i].src = ranksItem[i].img;
    ranksItemAuthors[i].textContent = ranksItem[i].author;
    ranksItemPoints[i].textContent = ranksItem[i].point + " ??i???m";
    ranksItemProductNames[i].textContent = ranksItem[i].bookName;
}
function addInfoRight(rank) {
    document.getElementsByClassName("detail__right__name")[0].textContent = rank.bookName;
    document.querySelectorAll(".board__detail img")[0].src = rank.img;
    document.getElementsByClassName("detail__right__author")[0].textContent = "T??c gi???: " + rank.author;
    document.getElementsByClassName("detail__right__publisher")[0].textContent = "Nh?? xu???t b???n: " + rank.publisher;
    document.querySelectorAll(".detail__right .price")[0].textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(rank.price);
    document.querySelectorAll(".detail__right .final-price")[0].textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(rank.price - rank.price * rank.discount / 100);
    document.getElementsByClassName("right__desc")[0].textContent = '';
    for (var i = 0; i < rank.desc.length; i++) {
        // var p = '<p>' +
        //   '        <em>' + 100 + '</em>' +
        //   '        <span>100</span>' +
        //   '    <span class="Weight">' + 100 + '</span>' +
        //   '<p>';

        // $('.right__desc').append(p);
        document.getElementsByClassName("right__desc")[0].append(rank.desc[i]);
    }

    document.getElementsByClassName("discount")[0].textContent = "-" + rank.discount + "%";
}
addInfoRight(rank_1);
var documentTopFive = document.querySelectorAll(".first-five__item");

for (var i = 0; i < documentTopFive.length; i++) {
    documentTopFive[i].addEventListener("mouseover", function () {
        console.log(this.childNodes[1].textContent.trim());
        if (this.childNodes[1].textContent.trim() === "01") {
            addInfoRight(rank_1);
        }
        if (this.childNodes[1].textContent.trim() === "02") {
            addInfoRight(rank_2);
        }
        if (this.childNodes[1].textContent.trim() === "03") {
            addInfoRight(rank_3);
        }
        if (this.childNodes[1].textContent.trim() === "04") {
            addInfoRight(rank_4);
        }
        if (this.childNodes[1].textContent.trim() === "05") {
            addInfoRight(rank_5);
        }
    });
}



var block_item_count = 0;
$(".home-page__toy-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__toy-block .block__slider .row").addClass("swipe-next");
    block_item_count++;
    if (block_item_count <= 6) {
        $('.home-page__toy-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -block_item_count * 50 + '%)');
    } else {
        block_item_count = 0;
        $('.home-page__toy-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -block_item_count * 50 + '%)');
    }
});

$(".home-page__toy-block .slider__prev").click(function () {
    block_item_count--;
    $(".home-page__toy-block .block__slider .row").addClass("swipe-prev");
    if (block_item_count > 0 && block_item_count <= 7) {
        $('.home-page__toy-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -block_item_count * 50 + '%)');
    } else {
        block_item_count = 0;
        $('.home-page__toy-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});
var frgnCount = 0;
$(".home-page__foreign-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__foreign-block .block__slider .row").addClass("swipe-next");
    frgnCount++;
    if (frgnCount <= 6) {
        $('.home-page__foreign-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -frgnCount * 50 + '%)');
    } else {
        frgnCount = 0;
        $('.home-page__foreign-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -frgnCount * 50 + '%)');
    }
});

$(".home-page__foreign-block .slider__prev").click(function () {
    frgnCount--;
    $(".home-page__foreign-block .block__slider .row").addClass("swipe-prev");
    if (frgnCount > 0 && frgnCount <= 7) {
        $('.home-page__foreign-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -frgnCount * 50 + '%)');
    } else {
        frgnCount = 0;
        $('.home-page__foreign-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var childCount = 0;
$(".home-page__child-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__child-block .block__slider .row").addClass("swipe-next");
    childCount++;
    if (childCount <= 6) {
        $('.home-page__child-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -childCount * 50 + '%)');
    } else {
        childCount = 0;
        $('.home-page__child-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -childCount * 50 + '%)');
    }
});

$(".home-page__child-block .slider__prev").click(function () {
    childCount--;
    $(".home-page__child-block .block__slider .row").addClass("swipe-prev");
    if (childCount > 0 && childCount <= 7) {
        $('.home-page__child-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -childCount * 50 + '%)');
    } else {
        childCount = 0;
        $('.home-page__child-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var vppCount = 0;
$(".home-page__vpp-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__vpp-block .block__slider .row").addClass("swipe-next");
    vppCount++;
    if (vppCount <= 6) {
        $('.home-page__vpp-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -vppCount * 50 + '%)');
    } else {
        vppCount = 0;
        $('.home-page__vpp-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -vppCount * 50 + '%)');
    }
});

$(".home-page__vpp-block .slider__prev").click(function () {
    vppCount--;
    $(".home-page__vpp-block .block__slider .row").addClass("swipe-prev");
    if (vppCount > 0 && vppCount <= 7) {
        $('.home-page__vpp-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -vppCount * 50 + '%)');
    } else {
        vppCount = 0;
        $('.home-page__vpp-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var vanHocCount = 0;
$(".home-page__vanhoc-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__vanhoc-block .block__slider .row").addClass("swipe-next");
    vanHocCount++;
    if (vanHocCount <= 6) {
        $('.home-page__vanhoc-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -vanHocCount * 50 + '%)');
    } else {
        vanHocCount = 0;
        $('.home-page__vanhoc-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -vanHocCount * 50 + '%)');
    }
});

$(".home-page__vanhoc-block .slider__prev").click(function () {
    vanHocCount--;
    $(".home-page__vanhoc-block .block__slider .row").addClass("swipe-prev");
    if (vanHocCount > 0 && vanHocCount <= 7) {
        $('.home-page__vanhoc-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -vanHocCount * 50 + '%)');
    } else {
        vanHocCount = 0;
        $('.home-page__vanhoc-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var ecoCount = 0;
$(".home-page__eco-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__eco-block .block__slider .row").addClass("swipe-next");
    ecoCount++;
    if (ecoCount <= 6) {
        $('.home-page__eco-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -ecoCount * 50 + '%)');
    } else {
        ecoCount = 0;
        $('.home-page__eco-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -ecoCount * 50 + '%)');
    }
});

$(".home-page__eco-block .slider__prev").click(function () {
    ecoCount--;
    $(".home-page__eco-block .block__slider .row").addClass("swipe-prev");
    if (ecoCount > 0 && ecoCount <= 7) {
        $('.home-page__eco-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -ecoCount * 50 + '%)');
    } else {
        ecoCount = 0;
        $('.home-page__eco-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var psychoCount = 0;
$(".home-page__psycho-block .slider__next").click(function () {
    // var x = document.querySelector(".home-page__slider .slider__image");
    // // console.log(x);
    // if(!x.classList.contains("swipe-next")){
    $(".home-page__psycho-block .block__slider .row").addClass("swipe-next");
    psychoCount++;
    if (psychoCount <= 6) {
        $('.home-page__psycho-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -psychoCount * 50 + '%)');
    } else {
        psychoCount = 0;
        $('.home-page__psycho-block .block__slider .row.swipe-next').css('transform', 'translateX(' + -psychoCount * 50 + '%)');
    }
});

$(".home-page__psycho-block .slider__prev").click(function () {
    psychoCount--;
    $(".home-page__psycho-block .block__slider .row").addClass("swipe-prev");
    if (psychoCount > 0 && psychoCount <= 7) {
        $('.home-page__psycho-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + -psychoCount * 50 + '%)');
    } else {
        psychoCount = 0;
        $('.home-page__psycho-block .block__slider .row.swipe-prev').css('transform', 'translateX(' + 0 + '%)');
    }
});

var swiperImgUrl = ["./assets/img/cambridge.jpg", "./assets/img/cengage.jpg"
    , "./assets/img/Harper-Collins.jpg", "./assets/img/hachette.jpg", "./assets/img/macgrawhill.jpg"
    , "./assets/img/macmillan.jpg", "./assets/img/oxford.jpg"
    , "./assets/img/paragon.jpg", "./assets/img/PearsonLogo_Avatar.png", "./assets/img/penguin.jpg", "./assets/img/sterling.jpg"
    , "./assets/img/usborn.jpg"
    , "./assets/img/Scholastic-bar-logo.png"];

for (var i = 0; i < swiperImgUrl.length; i++) {
    var aDivImg =
        '<div class="swiper__image-container">' +
        '<a href=#>' +
        '<img src="' + swiperImgUrl[i] + '">' +
        '</a>' +
        '</div>';
    $('.home-page__swiper .swiper__container .row').append(aDivImg);
}

$(".home-page__swiper .slider__next").click(function () {
    var x = document.querySelector(".home-page__health-care .row");
    console.log(x);
    if (!x.classList.contains("swipe-next")) {
        $(".home-page__swiper .row").toggleClass("swipe-next");
        $(".home-page__swiper .row").removeClass("swipe-prev");
    }

    $(".home-page__swiper .slider__prev").css("display", "flex");
    $(this).css("display", "none");
});
$(".home-page__swiper .slider__prev").click(function () {
    $(".home-page__swiper .row").removeClass("swipe-next");
    $(".home-page__swiper .row").toggleClass("swipe-prev");

    $(".home-page__swiper .slider__next").css("display", "flex");
    $(this).css("display", "none");
});

// $('h3').text('Anh Y??u Em');
// $('.section__nav li a').text('Anh Y??u Em');
