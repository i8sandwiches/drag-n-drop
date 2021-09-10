const circle = document.querySelector(".circle");

//while you press left mouse button, activate 'onmosuedown'
circle.addEventListener("mousedown", onmousedown);


function onmousedown(e) {

    //////////////////////////////////////////////////////////////
    // accurate click position when you click on '.circle' ///////
    let shiftX = e.clientX - circle.getBoundingClientRect().left;
    let shiftY = e.clientY - circle.getBoundingClientRect().top;

    window.addEventListener("mousemove", onMouseMove);
    // '.circle' follow on mouse //
    function onMouseMove(e) {
        circle.style.left = e.pageX - shiftX + "px";
        circle.style.top = e.pageY - shiftY + "px";
    }
    //////////////////////////////////////////////////////////////

    // circle.addEventListener("mouseup", ()=> {

    // })
}
