async function getmenu() {
    try{
        let response = await fetch ("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    let data = await response.json();

    showmenu(data);
    console.log(data);
    }
    catch(err){
console.log("err: ",err);
    }
}

let count = 0;
function showmenu(dishes){
    let menu = document.querySelector("#menu");
   menu.innerHTML="";
 dishes.meals.forEach(function(el){

   
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let price = document.createElement("h3");
    price.innerHTML ="Price: "+ Math.floor(Math.random()*500);

    var cartbtn = document.createElement("button");
    cartbtn.innerText = "Add to Cart"
    cartbtn.setAttribute("id","cart");

    cartbtn.addEventListener("click",addcart)
    div.append(image,price,cartbtn);
    menu.append(div);



  
 });
 
 let cartarr = [];
 function addcart(event){
   count++;
   let total = document.querySelector("#total");
   total.innerHTML = `Total Dishes :- ${count}`;

   cartarr.push(event);
  // console.log(cartarr);

  localStorage.setItem("Meal",JSON.stringify(cartarr));
  function displaydata(){
    window.location.href="cart.html";
}

 }


}
