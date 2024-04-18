
document.body.addEventListener("mouseover", (event) => {
  let tgt = event.target;
  
  if (tgt.id == "feat" || tgt.id == "comp") {
    tgt.parentNode.querySelector("ul").style.display = "flex";
  }
})

// let section = document.querySelector("header");

// section.addEventListener("mouseleave", () => {
//   let uls = document.querySelectorAll("ul");
//   let ulsArray = Array.from(uls);

//   ulsArray.forEach((element) => {
//       element.style.display = "none";
//   })
// })

let lis = Array.from(document.querySelectorAll(".navii"));

lis.forEach((li) => {
  let hovering;

  li.addEventListener("mouseover", () => {
    hovering = true;
  })
  
  li.addEventListener("mouseleave", () => {
    hovering = false;
  })

  li.addEventListener("mouseleave", (event) => {
    setTimeout(() => {
      if (!hovering) {
        li.querySelector("ul").style.display = "none";
      }
    }, 300)
  })
})