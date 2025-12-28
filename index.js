console.log("helo world")

// secret link
let secret = document.getElementsByClassName("secretlink")[0];
let secretcanter = 0;

secret.addEventListener('mouseenter',function() {
    if (secretcanter <100){
        secret.style.top= Math.random() * 100 + "%";
        secret.style.right= Math.random() * 100 + "%";
        secretcanter++;
        console.log(secretcanter)
    }
})



// style

let stylish = document.getElementById("stylish")
console.log(stylish)
stylish.addEventListener("click", function(){
    console.log("click");
    let text = stylish.innerHTML
    stylish.innerHTML = "more and " + text
    stylish.style.backgroundColor = makeRandomColor()
})




function makeRandomColor(){
    let r =Math.floor(Math.random() * 0)
    let g =Math.floor(Math.random() * 256)
    let b =Math.floor(Math.random() * 256)
    
    let color = `rgb(${r}, ${g}, ${b})`;

return color;

}





let resetcheese = document.getElementById("resetcheese")
console.log(resetcheese)
resetcheese.addEventListener("click", function(){
    console.log("click")
    stylish.innerHTML = "more cheese"


})
