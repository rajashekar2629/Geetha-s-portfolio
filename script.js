(function(){
  var card=document.getElementById("flip");
  function toggle(){var on=card.classList.toggle("is-flipped");card.setAttribute("aria-pressed",on?"true":"false")}
  card.addEventListener("click",toggle);
  card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}});
  try{document.getElementById("yr").textContent=new Date().getFullYear()}catch(e){}
})();
