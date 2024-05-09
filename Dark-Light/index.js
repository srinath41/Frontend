function switchMode() {
    let moon = document.getElementById ("sun");
    let m1 = document.querySelector('.m1') || document.querySelector('.d-m1')
    let m2 = document.querySelector('.m2')  || document.querySelector('.d-m2')
    let m3 = document.querySelector('.m3')  || document.querySelector('.d-m3')
    let land = document.querySelector('.land')  || document.querySelector('.d-land')
    let sky = document.querySelector('.sky')  || document.querySelector('.d-sky')

      if(moon.className=="sun" && m1.className=="m1"
      && m2.className=="m2"&& m3.className=="m3"&& sky.className=="sky" && land.className=="land"

      ){
        moon.className="moon";  
        m1.className='d-m1'
        m2.className='d-m2'
        m3.className='d-m3'
        land.className='d-land'
        sky.className='d-sky'
        document.body.style.backgroundColor = "#141D26";
        document.body.style.color = "#fff";
      }
    else {
      moon.className ="sun";
      m1.className='m1'
      m2.className='m2'
      m3.className='m3'
      land.className='land'
      sky.className='sky'
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }