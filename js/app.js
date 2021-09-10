const circle = document.querySelector(".circle");

circle.addEventListener("mousedown", onmousedown);

function onmousedown(e) {

    let shiftX = e.clientX - circle.getBoundingClientRect().left;
    let shiftY = e.clientY - circle.getBoundingClientRect().top;

    window.addEventListener("mousemove", onMouseMove);

    function onMouseMove(e) {
        circle.style.left = e.pageX - shiftX   + "px";
        circle.style.top = e.pageY - shiftY + "px";
    }

    // circle.addEventListener("mouseup", ()=> {

    // })
}
