var text = document.querySelector("input[type='text']");
var button = document.querySelector("button");
var div = document.querySelector("div");
console.log(text.value);

button.onclick = function(){
    // console.log('Button clicked');
    var content = text.value;
    div.innerText = content;
 }




// var button = null;

// button.onlick = function click(){
//     console.log('button clicked');
// }
// console.log(button);











// var text = document.querySelector("input[type='text']");
// var button = document.getElementById('btn')
// var div = document.querySelector("div");
// console.log(button);

// button.onclick = function click(){
//     // console.log('Button Clicked')
//     var content = document.getElementById("myText").value;
//     // console.log(content);
//     div.innerHTML = content;
// }