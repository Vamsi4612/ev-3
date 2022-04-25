// Store the wallet amount to your local storage with key "amount"


let add=document.querySelector("#add_to_wallet")
add.addEventListener("click" , takeamount)

let data = localStorage.getItem("amount")||0

let display =document.querySelector("#wallet")
    display.innerHTML=Number(data)


function takeamount(){
    let data = localStorage.getItem("amount")||0

    let entered = document.querySelector("#amount").value
    let data1 = Number(entered)
    let data2 = Number(data)+data1
    // console.log(typeof data1,data1)
    console.log(typeof data2,data2)

    let localdata = localStorage.setItem("amount" , data2)
    // console.log(localdata)

    let display =document.querySelector("#wallet")
    display.innerHTML=Number(data)+data1
}