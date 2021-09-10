const circle = document.querySelector(".circle");
// const container = document.querySelector(".container");

//while you press left mouse button, activate 'onmosuedown'
circle.addEventListener("mousedown", dragDrop);

function dragDrop(e) {

    //////////////////////////////////////////////////////////////
    // accurate click position when you click on '.circle' ///////
    let shiftX = e.clientX - circle.getBoundingClientRect().left;
    let shiftY = e.clientY - circle.getBoundingClientRect().top;

    window.addEventListener("mousemove", drop);
    // '.circle' follow on mouse //
    function drop(e) {
        circle.style.left = e.pageX - shiftX + "px";
        circle.style.top = e.pageY - shiftY + "px";
    }
    //////////////////////////////////////////////////////////////

    // circle.addEventListener("mouseup", ()=> {

    // })
    //////////////////////////////////////////////////////////////
    // container.addEventListener("mouseleave", whenMouseOut);

    // function whenMouseOut() {
        
    // }

    // if ()
}
