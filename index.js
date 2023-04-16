var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("about-content");
function opentab(tabName){
    for(const tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(const tabContent of tabContents){
        tabContent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-content");
}

// for menu
var sideMenu = document.getElementById("sideMenu");
function openmenu() {
    sideMenu.style.right="0";
}
function closemenu() {
    sideMenu.style.right="-150px";
}

// for contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbwdoOf37mp02ar1c7lC2t-Ii0gPw879ItBnenVZsupYpn7tnXI80y7se8HQWAckTcY/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message sent successfully!";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })