/**
 * Created by grizeldi on 30.12.2016.
 */
//Used to open menu on hover
var menuOpener = document.querySelector("#menuImage");
var menu = document.querySelector(".menuBar");
var openerDiv = document.querySelector(".menuButton");

menuOpener.onmouseover = function (e) {
    e.preventDefault();
    menu.classList.add("openMenu");
    openerDiv.classList.add("rotMenuButton");
};

menu.addEventListener('mouseout', makeMouseOutFn(menu), true);

//Thanks interweb!
function makeMouseOutFn(elem){
    var list = traverseChildren(elem);
    return function onMouseOut(event) {
        var e = event.toElement || event.relatedTarget;
        if (!!~list.indexOf(e)) {
            return;
        }
        menu.classList.remove("openMenu");
        openerDiv.classList.remove("rotMenuButton");
    };
}

function traverseChildren(elem){
    var children = [];
    var q = [];
    q.push(elem);
    while (q.length>0){
        var elem = q.pop();
        children.push(elem);
        pushAll(elem.children);
    }
    function pushAll(elemArray){
        for(var i=0;i<elemArray.length;i++){
            q.push(elemArray[i]);
        }
    }
    return children;
}