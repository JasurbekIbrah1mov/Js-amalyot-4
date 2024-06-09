let ranges = document.querySelectorAll(".range");
let win = document.querySelectorAll(".val");
let img = document.querySelector("img");
let daff = document.querySelectorAll(".daf")

let blurValue = "0px"; 
let contrastValue = "100%"
let grayscaleValue = "100%"


ranges.forEach((item)=>{
    item.addEventListener("input", ()=>{
        if(item.dataset.index == "tl"){
            img.style.borderTopLeftRadius = `${item.value}px`
            win[0].value= `${item.value}px`
        }
        if(item.dataset.index == "tr"){
            img.style.borderTopRightRadius = `${item.value}px`
            win[1].value= `${item.value}px`
        }
        if(item.dataset.index == "br"){
            img.style.borderBottomRightRadius = `${item.value}px`
            win[2].value= `${item.value}px`
        }
        if(item.dataset.index == "bl"){
            img.style.borderBottomLeftRadius = `${item.value}px`
            win[3].value= `${item.value}px`
        }
        // ----------------------------------------------------
        if (item.dataset.index == "b") {
            blurValue = `${item.value}px`;
            img.style.filter = `blur(${blurValue})`;
            daff[0].value= `(${blurValue})`
        }
        if(item.dataset.index == "c"){
            contrastValue = `${item.value}%`
            img.style.filter = `contrast(${contrastValue})`
            daff[1].value= `(${contrastValue})`
        }
      
        if(item.dataset.index == "g"){
            grayscaleValue = `${item.value}%`
            img.style.filter = `grayscale(${grayscaleValue})`
            daff[2].value= `(${grayscaleValue})`
        }
      

    })
})



























// ranges.forEach((item) => {
//   item.addEventListener("input", () => {
//     if (item.dataset.index == "tl") {
//       box.style.borderTopLeftRadius = `${item.value}px`;
//       win[0].value = `${item.value}px`;
//     }
//     if (item.dataset.index == "tr") {
//       box.style.borderTopRightRadius = `${item.value}px`;
//       win[1].value = `${item.value}px`;
//     }
//     if (item.dataset.index == "br") {
//       box.style.borderBottomRightRadius = `${item.value}px`;
//       win[2].value = `${item.value}px`;
//     }
//     if (item.dataset.index == "bl") {
//       box.style.borderBottomLeftRadius = `${item.value}px`;
//       win[3].value = `${item.value}px`;
//     }
//   });
// });
