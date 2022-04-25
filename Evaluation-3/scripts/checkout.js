// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let data = localStorage.getItem("amount")||0

let display =document.querySelector("#wallet")
    display.innerHTML=Number(data)


let details = JSON.parse( localStorage.getItem("movie"))
console.log(details)
    let box = document.createElement("div")
    box.id = "box1"
    let innerbox = document.createElement("div")
    let image = document.createElement("img")
    image.src = details.Poster
    
    let heading = document.createElement("p")
        heading.innerText=details.Title
    innerbox.append(heading)
    box.append(image,innerbox)
document.querySelector("#movie").append(box)

function show(){
let name = document.querySelector("#user_name").value
let seat = document.querySelector("#number_of_seats").value

let num = Number(seat)*100
if(num>data){
    alert("Insufficient Balance!")
}
else{
    alert("Booking successfull!")
    num = data-num
    let localdata = localStorage.setItem("amount" , num)
    window.location.reload()
}
}