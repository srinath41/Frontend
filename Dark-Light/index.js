function switchMode() {
    let moon = document.getElementById ("sun");
    let scenery = document.querySelector('.scenary')
      if(moon.className=="sun"){
        scenery.classList.add('hide')
        // scenery.innerHTML="Good morning"
        moon.className="moon";
        document.body.style.backgroundColor = "#141D26";
        document.body.style.color = "#fff";
      }
    else {
      // scenery.innerHTML="Good night"
      scenery.classList.remove('hide')
      moon.className ="sun";
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }