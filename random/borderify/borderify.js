
// jquery

src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js" 




// title
document.title = "Amazon.com"; 

// alert

var subtext = document.getElementsByClassName("alert"); 
for (var i = 0, l = subtext.length; i < l; i++) {
subtext[i].innerHTML = "You must be on the wrong page, click anywhere to re-route";
};


// background
// document.body.style.backgroundColor = "gray";


// RIP

var imgs = document.querySelectorAll("img");
for (var i = 0, l=imgs.length; i < l; i++) {
imgs[i].src="https://i.imgflip.com/2df6m9.jpg" };




// remove stupid id

$(document).ready(function(){
    $("div").removeClass("home-main home-top-banner col-12 col-lg-7");
  });

$(document).ready(function(){
    $("div").removeClass("heading text-center p-3 pt-4 pt-lg-5");
  });


$(document).ready(function(){
    $("div").removeClass("product-name col-7 col-sm-5 col-lg-7 pl-sm-4 m-0");
  });

$(document).ready(function(){
    $("div").removeClass("top-trending product-impressions");
  });

$(document).ready(function(){
    $("div").removeClass("w-100 d-inline-block divider");
  });

$(document).ready(function(){
    $("div").removeClass("prod-tile row m-0 product-impression");
  });


// dropdowns change in innerHTML

  
function scrollLeft() {
    this.innerHTML = "🅹🆄🆂🆃";
}

function scrollRight() {
    this.innerHTML = "discover";
}

document.getElementById('discover').addEventListener("mouseover",scrollLeft);
document.getElementById('discover').addEventListener("mouseout",scrollRight);



function left() {
    this.innerHTML = "🅿🆄🆃";
}

function right() {
    this.innerHTML = "play";
}

document.getElementById('play').addEventListener("mouseover",left);
document.getElementById('play').addEventListener("mouseout",right);


function three() {
    this.innerHTML = "&nbsp&nbsp&nbsp🅼🅴&nbsp&nbsp&nbsp";
}

function threeb() {
    this.innerHTML = "experience";
}

document.getElementById('experience').addEventListener("mouseover",three);
document.getElementById('experience').addEventListener("mouseout",threeb);


function four() {
    this.innerHTML = "🅾🆄🆃 🅾🅵";
}

function fourb() {
    this.innerHTML = "shop by category";
}

document.getElementById('shop by category').addEventListener("mouseover",four);
document.getElementById('shop by category').addEventListener("mouseout",fourb);



function five() {
    this.innerHTML = "&nbsp&nbsp&nbsp🅼🆈&nbsp&nbsp&nbsp";
}

function fiveb() {
    this.innerHTML = "shop by brand";
}

document.getElementById('shop-by-brand').addEventListener("mouseover",five);
document.getElementById('shop-by-brand').addEventListener("mouseout",fiveb);


function six() {
    this.innerHTML = "🅼🅸🆂🅴🆁🆈";
}

function sixb() {
    this.innerHTML = "deals & picks";
}

document.getElementById('deals_picks').addEventListener("mouseover",six);
document.getElementById('deals_picks').addEventListener("mouseout",sixb);

// footers


var subtext = document.getElementsByClassName("menu-footer locate-store"); 
for (var i = 0, l = subtext.length; i < l; i++) {
subtext[i].innerHTML = "ℍ𝔸𝕍𝕀ℕ𝔾 𝔽𝕌ℕ?";
};


var subtext = document.getElementsByClassName("footer-header text-bold"); 
for (var i = 0, l = subtext.length; i < l; i++) {
subtext[i].innerHTML = "░W░h░y░ ░a░r░e░ ░y░o░u░";
};

var subtext = document.getElementsByClassName("title d-none d-sm-block footer-header text-bold"); 
for (var i = 0, l = subtext.length; i < l; i++) {
subtext[i].innerHTML = "Ɩɛą۷ıŋɠ ʂơ ʂơơŋ?";
};



// dropdown links


var text = document.getElementsByClassName("dropdown-link"); 
for (var i = 0, l = text.length; i < l; i++) {
text[i].innerHTML = "Click anywhere to shop T̸̡̹̊ǫ̸̗̰̮̪̤̓̏͋͛̈́̽ͅŷ̵̞̞̀̿͑̽͠s̷̡̡̲͖̠̫̳̰͔̉̊̀̒̕ŗ̵̭̱̪͌̇̈́ͅǘ̶̢̙́͒̄͐͝s̸̮̥̪̭̟̔͒̒̔͛̍̍̓̍̈́";
};




// welcome to the code that DOESN'T FUCKING WORK QHEWPOUFQPJBFPIJQBEKJNFKQJWNEDKJNWQKJ :(


// links redirect to online retail


$(document).ready(function() {
    $("a").attr("href", "https://www.amazon.com/")
});


var headone = document.getElementsByClassName("product-name"); 
for (var i = 0, l = headone.length; i < l; i++) {
headone[i].innerHTML = "Click anywhere to send condolences";
};

// document.querySelectorAll("a").attr("href", "https://stackoverflow.com");


// $("a").attr("href", "https://www.amazon.com/")


// scroll event

 window.onscroll = function() {
        var pageHeight=document.documentElement.offsetHeight,
        windowHeight=window.innerHeight,
        scrollPosition=window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

        document.getElementsByClassName("row mt-2 mt-md-3").innerHTML=pageHeight+','+windowHeight+','+scrollPosition;


        if (pageHeight <= windowHeight+scrollPosition) {
            alert('Did you mean to go to https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?https://www.amazon.com/?');
        }
        };


// headertop
var boop = document.getElementsByClassName("data-content"); 
for (var i = 0, l = boop.length; i < l; i++) {
boop[i].innerHTML = "Click anywhere to shop T̸̡̹̊ǫ̸̗̰̮̪̤̓̏͋͛̈́̽ͅŷ̵̞̞̀̿͑̽͠s̷̡̡̲͖̠̫̳̰͔̉̊̀̒̕ŗ̵̭̱̪͌̇̈́ͅǘ̶̢̙́͒̄͐͝s̸̮̥̪̭̟̔͒̒̔͛̍̍̓̍̈́";
};

var boop = document.getElementsByTagName("span"); 
for (var i = 0, l = boop.length; i < l; i++) {
boop[i].innerHTML = "M͎a͎y͎ ͎i͎t͎ ͎r͎e͎s͎t͎ ͎i͎n͎ ͎p͎e͎a͎c͎e͎";
};



// copyright


var text = document.getElementsByClassName("col-lg-8 col-sm-7 pull-sm-5 pull-lg-4 copyright-notice"); 
for (var i = 0, l = text.length; i < l; i++) {
text[i].innerHTML = "Thank you for spending your time in the graveyard, now back to online shopping©";
};