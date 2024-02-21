let navbar= document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
}

// Home section script

document.querySelectorAll('input[type="number"]').forEach(inputNumber=>{

    // Streange function 'oninput'
    inputNumber.oninput = () =>{
        if(inputNumber.value.length> inputNumber.maxLength)
            inputNumber.val= inputNumber.value.slice(0, inputNumber.maxLength);
    };
});