const manuBtn = document.querySelector('.manu-bar');
const navigation = document.querySelector('.nav');
// console.log(manuBtn, navigation);
manuBtn.addEventListener("click", () => {
    const visibility = navigation.getAttribute("data-visible");
   
    if (visibility === 'false') {
        navigation.setAttribute('data-visible', 'true');
    }
    else{navigation.setAttribute('data-visible','true');
}
}); 
//  console.log(visibility)