var input = document.getElementById('input');
var button = document.getElementById('send');
var articles = document.getElementById('demo');

button.addEventListener("click", postData);

function postData() {

    articles.innerHTML = "<div class='title'>" + input.value + "</div>";
}