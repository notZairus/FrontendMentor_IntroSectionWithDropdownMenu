
document.body.addEventListener("mouseover", (event) => {
  let tgt = event.target;
  
  if (tgt.id == "feat" || tgt.id == "comp") {
    tgt.nextElementSibling.src = "./images/icon-arrow-up.svg";
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
  let Hovering = false;

  li.addEventListener("mouseover", () => {
    Hovering = true;
  })

  li.addEventListener("mouseleave", () => {
    Hovering = false;
  })

  li.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!Hovering) {
        li.querySelector("ul").style.display = "none";
        li.querySelector(".arrow").src = "./images/icon-arrow-down.svg";
      }
    }, 300)
  })

})

let bground = document.querySelector(".aside").querySelector("img");

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 427) {
    bground.src = "./images/image-hero-mobile.png";
  }
})

let sidebar = document.getElementById("sdbr");

document.addEventListener("click", (event) => {
  let tgt = event.target;
  let sdbrContent = sidebar.querySelector(".sidecontent");
  let dark = document.querySelector(".dark-blur");

  if (tgt.id == "menu" || tgt.id == "menuimg")
  {
    sidebar.style.width = "270px";
    sdbrContent.style.display = "block";
    dark.style.display = "block";
    dark.style.opacity = "1";
  }
  else if (tgt.id == "menucloseimg" || tgt.id == "dark-blur") {
    sdbrContent.style.display = "none";
    sidebar.style.width = "0px";
    dark.style.display = "none";
    dark.style.opacity = "0";
  }
})

sidebar.addEventListener("click", (event) => {
  let tgt = event.target;
  let UnorderedList;

  if (tgt.id == "featside" || tgt.id == "compside"){
    let nextEm = tgt.nextElementSibling;
    while (nextEm) {
      if (nextEm.tagName === "UL") {
        UnorderedList = nextEm;
        break;
      }
      nextEm = nextEm.nextElementSibling;
    }
  }

  if (UnorderedList.style.display == "none") {
    UnorderedList.style.display = "flex";
    tgt.nextElementSibling.src = "./images/icon-arrow-up.svg";
  }
  else {
    UnorderedList.style.display = "none";
    tgt.nextElementSibling.src = "./images/icon-arrow-down.svg";
  }
})