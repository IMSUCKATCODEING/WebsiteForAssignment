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