// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// http://www.omdbapi.com/?apikey=[yourkey]&
let id;

let data = localStorage.getItem("amount")||0

let display =document.querySelector("#wallet")
    display.innerHTML=Number(data)


async function getmovies(){
    try{
        let input = document.querySelector("#search").value

        const url = `https://www.omdbapi.com/?i=tt3896198&apikey=78d118e4&s=${input}`
        let res = await fetch(url);
        let data =await res.json()
        // if(data.Search ==undefined){
        //     return;
        // }
        // console.log(data.Search)
        // appenddata(data.Search)
        return (data.Search);
    }
    catch{
        (function(err){
            console.log(err)
        })
    }
}

function appenddata(data){

    let maindiv = document.querySelector("#movies")
    maindiv.innerHTML=null
    data.forEach(function(el){

    let box = document.createElement("div")
    box.id = "box1"
    let innerbox = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.Poster
    
    let heading = document.createElement("p")
        heading.innerText=el.Title
    let btn = document.createElement("button")
        btn.innerText="Book Now"
        btn.class="book_now"
        let data3 = {
            Title:el.Title,
            Poster:el.Poster,
        }
        btn.addEventListener("click" , function(){
            localStorage.setItem("movie" , JSON.stringify(data3))
            window.location.href="checkout.html"
        })
    innerbox.append(heading , btn)
    box.append(image,innerbox)
    document.querySelector("#movies").append(box)

    })
    
}

async function main(){
    let a = await getmovies()
    console.log(a)
    appenddata(a)
}


function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func();
    },delay)
}