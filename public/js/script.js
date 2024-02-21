let navbar= document.querySelector('.header .flex .navbar');
// let popup=document.getElementById('popup');

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

// function openPopup(){
//     popup.classList.add("open-popup");
// }
// function closePopup(){
//     popup.classList.remove("open-popup");
// }

//Toggle the pop-up bar
const popup=document.getElementById("popup");
        
function openPopup1(){
    popup1.classList.toggle("open-popup");
}
function closePopup1(){
   popup1.classList.toggle("open-popup");
}

const fetchData = async () => {
    try{
        const response = await fetch("http://localhost:3000/cities")
        const data = await response.json()
        console.log(data)
        return data;
    }
    catch(err){
        console.log(err)
    }
}

const Agra = document.querySelector("#Agra")
// console.log(cityName)
fetchData().then(data => {
    Agra.innerHTML = data[0].city
    // console.log(data)
})
const AgraDate = document.querySelector("#AgraDate")
// console.log(cityName)
fetchData().then(data => {
    AgraDate.innerHTML = data[0].date
    // console.log(data)
})

const  Uttrakhand= document.querySelector("#Uttrakhand")
fetchData().then(data => {
    Uttrakhand.innerHTML = data[1].city
    // console.log(data)
})

const  Patna= document.querySelector("#Patna")
fetchData().then(data => {
    Patna.innerHTML = data[2].city
    // console.log(data)
})

const Hyderabadh = document.querySelector("#Hyderabadh")
fetchData().then(data => {
    Hyderabadh.innerHTML = data[3].city
    // console.log(data)
})

const Jaipur = document.querySelector("#Jaipur")
fetchData().then(data => {
    Jaipur.innerHTML = data[4].city
    // console.log(data)
})

const Gaya = document.querySelector("#Gaya")
fetchData().then(data => {
    Gaya.innerHTML = data[5].city
    // console.log(data)
})

// data.map(data => return <Component city={`data.city`} />)

////


function openPopup2(){
    popup2.classList.toggle("open-popup");
}
function closePopup2(){
   popup2.classList.toggle("open-popup");
}

function openPopup3(){
    popup3.classList.toggle("open-popup");
}
function closePopup3(){
   popup3.classList.toggle("open-popup");
}

function openPopup4(){
    popup4.classList.toggle("open-popup");
}
function closePopup4(){
   popup4.classList.toggle("open-popup");
}

function openPopup5(){
    popup5.classList.toggle("open-popup");
}
function closePopup5(){
   popup5.classList.toggle("open-popup");
}

function openPopup6(){
    popup6.classList.toggle("open-popup");
}
function closePopup6(){
   popup6.classList.toggle("open-popup");
}

AOS.init({
    duration: 400,
    delay: 200, 
});