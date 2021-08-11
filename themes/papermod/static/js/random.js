// thanks to https://www.w3schools.com/js/js_json_http.asp
var xmlhttp = new XMLHttpRequest();
var url = "/index.json";


xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

// Thanks to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function myFunction(arr) {
    var out = "";
    var i = getRandomInt(arr.length);
    out = arr[i].permalink;
    document.getElementById("random-article-link").setAttribute('href', out);
}