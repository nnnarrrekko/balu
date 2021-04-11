let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    if(scroll_pos > 190){
        let posfix = document.querySelector(".position-fixed")
        posfix.position = ""
        posfix.classList.add("scrollAnim");
    }else{
        let posfix = document.querySelector(".position-fixed")
        posfix.classList.remove("scrollAnim");
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// function getData(){
//   fetch("./phonecode.json")
//   .then(res => {
//     if(res.ok){
//       return res.json()
//       .then(data => {
//         dial_code.innerText = data[10].dial_code
//         country_flag.src = `https://www.countryflags.io/${data[10].code}/flat/64.png`
//         country_flag.classList.add("country-flag");
//       })
//     }
//   })
// }

// let dial_code = document.getElementById("dial_code");
// let country_flag = document.getElementById("country-flag");

// function optionFill(){
//   let select = document.getElementsByClassName("select-country");
//   for(let i = 0; i < select.length; i++){
//     let newOp = document.createElement("option");

//   }
// }
// optionFill();


function getData(){
  fetch("./phonecode.json")
    .then(res => {
      if(res.ok){
        return res.json()
      }
  
    })
    .then(data => {
      let selectTag = document.getElementById("country-drp");
      let mapedData = data.map(elem => {
        let newOp = document.createElement("option");
        let name = document.createElement("span")
        let dial = document.createElement("span")
        name.innerText = elem.name;
        dial.innerText = elem.dial_code;
        newOp.appendChild(name);
        newOp.appendChild(dial)
        newOp.value = elem.code
        dial.classList.add("dial-code")
        selectTag.add(newOp)
        // return `<option value="${elem.code}"><span>${elem.name} ${elem.dial_code}</span></option>`;
      })
    })
  }
getData();
function onChange(){
  let select = document.getElementById("country-drp");
  let countryFlag = document.getElementById("country-flag");
  countryFlag.src = `https://www.countryflags.io/${select.value}/flat/64.png`;
  let dial_code = document.getElementById("dial_code")
  dial_code.innerText = select[select.selectedIndex].lastChild.innerText
}