const dropDownContent = document.querySelector('.dropdown-content')
const dropDownBtn = document.querySelector('.dropbtn');

function changeDropDown() {
   dropDownContent.classList.toggle("show");
   dropDownBtn.classList.toggle("dropbtn-active");
}

dropDownBtn.addEventListener('click', changeDropDown);

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropDownContent.classList.remove("show");
        dropDownBtn.classList.remove("dropbtn-active");
    }
  }