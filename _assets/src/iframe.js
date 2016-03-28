//Async iframe
function loadFrame(){
  setTimeout(() => {
    var myFrame = document.getElementById('googlemap');
    myFrame.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAVNaySvW8nzAEDefZV6CpfUcFsUc9NSz0&q=Piazza+San+Giovanni,Genazzano+RM";
  }, 500)
};

window.addEventListener('load', loadFrame, false);
