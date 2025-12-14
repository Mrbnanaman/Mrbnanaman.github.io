console.log("helo world")
let stylish = document.getElementById("stylish")
console.log(stylish)
stylish.addEventListener("click", function(){
    console.log("click");
    let text = stylish.innerHTML
    stylish.innerHTML = "more and " + text
})
