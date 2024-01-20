const passBox = document.querySelector("#Password");
const allSymb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
function passGen() {
    len = prompt("Enter password length reqired");

    var pass = "";
    while (pass.length < len) {
        pass += allSymb[Math.floor(Math.random() * allSymb.length)];
    }
    console.log(pass)
    passBox.value = pass;
}
function copy() {
    passBox.select();
    document.execCommand("copy");
}
// function mouseFollow() {
//     document.addEventListener("mousemove", function (dets) {
//         cursor = document.querySelector("#circle");
//         cursor.style.top=dets.y-22+"px";
//         cursor.style.left=dets.x-15+"px";
//     })
// }
// mouseFollow();
document.querySelector("#overlayele").addEventListener("mousemove",function(dets){
    // console.log(dets.x);
    // cursor.style.opacity=0;
    document.querySelector("#im").style.scale=1;
    document.querySelector("#im").style.opacity=1;
    document.querySelector("#im").style.left=dets.x-1160+"px";
    document.querySelector("#im").style.top=dets.y-650+"px";
})
document.querySelector("#overlayele").addEventListener("mouseleave",function(dets){
    // console.log(dets.x);
    document.querySelector("#im").style.scale=0;
    document.querySelector("#im").style.opacity=0;

})