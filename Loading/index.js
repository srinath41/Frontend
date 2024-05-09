// let s="----";
// let c=0;
// let ld=document.getElementById("ld");
// let ani=document.getElementById("ani");
// let x=false;
// ld.onclick=function(){
//     while(x!=true){
//         let i=0;
//         for(let j=1;j<5;j++){
//             ani.textContent=s.slice(i,j);
//             console.log(s.slice(i,j))
//         }
//     c+=1;
//     if (c===10){
//         x=true;
//     }
// }
// }









// let s = "⬛⬛⬛⬛⬛⬛⬛";
// let c = 0;
// let ld = document.getElementById("ld");
// let ani = document.getElementById("ani");
// let x = false;

// ld.onclick = function () {
    
//     function animateLoading() {
//         if (c < s.length) {
//             ani.textContent = s.slice(0, c + 1);
//             c++; 
//             setTimeout(animateLoading, 200);
//         } else {
//             x = true;
//         }
//     }
//     animateLoading();
// };




let s = "⬛⬛⬛⬛⬛⬛";
let c = 0;
let ld = document.getElementById("ld");
let ani = document.getElementById("ani");
let x = false;

ld.onclick = function () {
    
    function animateLoading() {
        if (c < s.length) {
            ani.textContent = s.slice(0, c + 1);
            c++; 
            setTimeout(animateLoading, 200);
        } else {
            c = 0;
            animateLoading(); 
        }
    }
    animateLoading();
};
