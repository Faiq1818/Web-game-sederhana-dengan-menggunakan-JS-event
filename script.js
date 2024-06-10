let gambar1 = document.getElementById("gambar1");
let gambar2 = document.getElementById("gambar2");
let like = document.getElementById("like");
let dislike = document.getElementById("dislike");


function setwaktu(kondisi){
    kondisi.style.display = "block";
    setTimeout(function() {
        kondisi.style.display = "none";
    }, 1000);
}


gambar1.addEventListener('click', function() {
    setwaktu(like)
});
gambar2.addEventListener('click', function() {
     setwaktu(dislike)
});