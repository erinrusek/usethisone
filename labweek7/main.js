

// console.log('nah, Im just browsing');


// function doSomething(thing){
// 	console.log('hey', thing)
// }
document.body.style.backgroundColor = "teal";

// This ¯\_( ͡❛ ͜ʖ ͡❛)_/¯ JS ¯\_( ͡❛ ⏏ ͡❛)_/¯ Looks (. ͡❛ ⏏ ͡❛.) Insane 

// function changeHeading (colour) {
// 	$('#h1').css({"background-color": colour})
$("#h1").hover(function(){
  $("#h1").css("background-color", "grey");
  }, function(){
  $("#h1").css("background-color", "black");
  $("#h1").css("text-align", "center");
});

// h2
$("#h2").dblclick(function(){
  $("#h2").css({"color": "red"});
});

// button 1
function doThis(innerText){
$(".innerbutton").html("AROUND!");
}

// hide p
$(".p1").dblclick(function(){
  $(this).hide();
});


// quote
$(document).ready(function(){
  $(".quote").click(function(){
    $(".quote").css({"color": "orange"});
    	$(".quote").css({"font-family": "'Cormorant Garamond', serif;"});
    		$(".quote").css({"text-align": "right"});
    		    $(".quote").css({"font-weight": "bold"});
    		        $(".quote").css({"font-size": "40px"});
 						$(".quote").css({"box-shadow": "2px 2px 5px blue;"});

      });
});

// $(document).ready(function(){
//   $("p").on("click", function(){
//     $(this).hide();

// p2

$(document).ready(function(){
  $(".p2").click(function(){
    $(".p2").css({"color": "teal"});
    	$(".p2").css({"font-family": "'courier', sans-serif;"});
    		$(".p2").css({"text-align": "left"});
    		    $(".p2").css({"font-weight": "bold"});
    		        $(".p2").css({"font-size": "50px"});
 						$(".p2").css({"box-shadow": "2px 2px 5px blue;"});
 							$(".p2").css({"background-color": "black"});

      });
});

// p3
     $(".p3").click(function(){
  $(".p3").hide();
});

// p4

$(".p4").hover(function(){
  $(this).css("background-color", "grey");
  }, function(){
  $(this).css("background-color", "black");
  $(".p4").css({"font-size": "20px"});
  $(".p4").css("text-align", "center");

});

// button bottom
function doSomething(click){
	console.log('Console: Hello, can I help you?');


setTimeout(function cb(click) {
	console.log('You: nah, Im just browsing');
}, 1200);

setTimeout(function cb(click) {
	console.log('Console: OK, just "call" me if you need anything....see what I did there? :)');
}, 3000);

}