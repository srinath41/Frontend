
function switchMode() {
  let moon = document.getElementById("sun");
  let m1 = document.querySelector(".m1") || document.querySelector(".d-m1");
  let m2 = document.querySelector(".m2") || document.querySelector(".d-m2");
  let m3 = document.querySelector(".m3") || document.querySelector(".d-m3");
  let land =
    document.querySelector(".land") || document.querySelector(".d-land");
  let sky = document.querySelector(".sky") || document.querySelector(".d-sky");
  let trees =
    document.querySelectorAll(".t") || document.querySelectorAll(".d-t");
  let branches =
    document.querySelectorAll(".b") || document.querySelectorAll(".d-b");
  let leaves =
    document.querySelectorAll(".l") || document.querySelectorAll(".d-l");
  let rivers =  document.querySelectorAll(".r") || document.querySelectorAll(".d-r");

  if (
    moon.className == "sun" &&
    m1.className == "m1" &&
    m2.className == "m2" &&
    m3.className == "m3" &&
    sky.className == "sky" &&
    land.className == "land"
  ) {
    moon.className = "moon";
    m1.className = "d-m1";
    m2.className = "d-m2";
    m3.className = "d-m3";
    land.className = "d-land";
    sky.className = "d-sky";
    console.log("hello");
    trees.forEach((tree) => {
      if (tree.classList.contains("t")) {
        tree.classList.remove("t");
        tree.classList.add("d-t");
      }
    });
    branches.forEach((branch) => {
      if (branch.classList.contains("b")) {
        branch.classList.remove("b");
        branch.classList.add("d-b");
      }
    });
    leaves.forEach((leaf) => {
      if (leaf.classList.contains("l")) {
        leaf.classList.remove("l");
        leaf.classList.add("d-l");
      }
    });
    rivers.forEach((stream) => {
      if (stream.classList.contains("r")) {
        stream.classList.remove("r");
        stream.classList.add("d-r");
      }
    });

    document.body.style.backgroundColor = "#141D26";
    document.body.style.color = "#fff";
  } else {
    let trees = document.querySelectorAll(".d-t");
    let branches = document.querySelectorAll(".d-b");
    let leaves = document.querySelectorAll(".d-l");
    let rivers =  document.querySelectorAll(".d-r");
    moon.className = "sun";
    m1.className = "m1";
    m2.className = "m2";
    m3.className = "m3";
    land.className = "land";
    sky.className = "sky";
    trees.forEach((tree) => {
      if (tree.classList.contains("d-t")) {
        tree.classList.remove("d-t");
        tree.classList.add("t");
      }
    });

    branches.forEach((branch) => {
      if (branch.classList.contains("d-b")) {
        branch.classList.remove("d-b");
        branch.classList.add("b");
      }
    });

    leaves.forEach((leaf) => {
      if (leaf.classList.contains("d-l")) {
        leaf.classList.remove("d-l");
        leaf.classList.add("l");
      }
    });

    rivers.forEach((stream) => {
      if (stream.classList.contains("d-r")) {
        stream.classList.remove("d-r");
        stream.classList.add("r");
      }
    });

    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
