/**
 * Created by Code pen on 17.12.2016.
 * To change the number of elements go to index.html
 */


var items = document.querySelectorAll('a.circle');

for(var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

    items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
}

var centerCircle = document.querySelector('#centerCircle');
centerCircle.onmouseover = function (e) {
    e.preventDefault();
    document.querySelector('#regularCircle').classList.add('open');
};
centerCircle.onclick = function (e) {
    e.preventDefault();
    var classList = document.querySelector("#regularCircle").classList;
    if (classList.contains("open")){
    	classList.remove("open");
    }else {
    	classList.add("open");
    }
};

