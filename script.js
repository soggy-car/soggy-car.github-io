var soggy_img = document.getElementById('soggy-img');
var soggy_text = document.getElementById('soggy-text');
var audio = document.getElementById('scream');

function kill_soggy() {
soggy_img.style.visibility = 'hidden';
audio.play();
soggy_text.style.visibility = 'visible';
}
