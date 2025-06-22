// make some waves.
var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/50) + "s";
}

ocean.appendChild(docFrag);
//draggable fucntion
dragElement(document.querySelector(".aboutinfo"));
dragElement(document.querySelector(".linkinfo"));
dragElement(document.querySelector(".faq"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  // Ensure position is absolute or fixed for positioning to work
  elmnt.style.position = "absolute";

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let elemWidth = elmnt.offsetWidth;
    let elemHeight = elmnt.offsetHeight;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > viewportWidth - elemWidth) newLeft = viewportWidth - elemWidth;

    if (newTop < 0) newTop = 0;
    if (newTop > viewportHeight - elemHeight) newTop = viewportHeight - elemHeight;

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//exit
const exitBtn = document.getElementById('exitbtn');
exitBtn.addEventListener('click', () => {
  const aboutInfo = document.querySelector('.aboutinfo');
  if (aboutInfo) {
    aboutInfo.style.display = 'none';
  }
});
const exitlinkbtn = document.getElementById('exitlinkbtn')
exitlinkbtn.addEventListener('click', () => {
  const linkInfo = document.querySelector('.linkinfo');
  if (linkInfo) {
    linkInfo.style.display = 'none';
  }
});
const exitfaqbtn = document.getElementById('exitfaqbtn');
exitfaqbtn.addEventListener('click',()=>{
  const faq = document.querySelector('.faq');
  if(faq)
    {
      faq.style.display = 'none';
    }
})

//showabout
document.addEventListener('DOMContentLoaded', () => {
  const showAboutBtn = document.getElementById('showAbout');
  showAboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutInfo = document.querySelector('.aboutinfo');
    if (aboutInfo) {
      aboutInfo.style.display = 'block';
    }
  });
});
//showlinkinfo
document.addEventListener('DOMContentLoaded', () => {
  const showAboutBtn = document.getElementById('showinfo');
  showAboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutInfo = document.querySelector('.linkinfo');
    if (aboutInfo) {
      aboutInfo.style.display = 'block';
    }
  });
});
//showfaq
document.addEventListener('DOMContentLoaded', () => {
  const showAboutBtn = document.getElementById('showfaq');
  showAboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutInfo = document.querySelector('.faq');
    if (aboutInfo) {
      aboutInfo.style.display = 'block';
    }
  });
});
//use closet when have element of the same name

//dropanswer
const dropbtn = document.querySelectorAll('.dropbtn');

dropbtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Find the closest parent with class "q"
    const question = btn.closest('.q');
    
    // Toggle minHeight only for this question
    if (question.style.minHeight === '120px') {
      question.style.minHeight = '60px';
      btn.style.transform ='rotate(0deg)';
    } else {
      question.style.minHeight = '120px';
      btn.style.transform='rotate(180deg)'
    }
  });
});