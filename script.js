const letter = document.querySelector(".letter")
const triangle = document.querySelector(".triangle")
const paper = document.querySelector(".paper")
const box = document.querySelector(".box")

let open = false;

letter.onclick = ()=>{
    if(open) return;
    open = true
    triangle.style.transform = "translateY(-50%) rotate(180deg) scaleY(0.001)"
    setTimeout(() => {
        triangle.style.transform = "translateY(-50%) rotate(0deg) scaleY(0.001)"
        triangle.style.zIndex = "-10"
    }, 200);
    setTimeout(() => {
        triangle.style.transform = "scaleY(1) translateY(-92.5%)"
    }, 400);
    setTimeout(() => {
        paper.style.transform = "translateY(-130%) translateX(-50%)"
    }, 900);
    setTimeout(() => {
        paper.style.transform = "translateY(-30%) translateX(-50%) scale(1.5)"
        paper.style.zIndex = "1000"
    }, 900+500)
}