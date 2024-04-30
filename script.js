let datafetch = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((result) => {
    // console.log(result)
    getshoppingitems(result)
});

let divtag=document.createElement("div");
divtag.className="col_4 items_container";

  function getshoppingitems(items){
console.log(items);
let temp=""
for(let i=0;i<items.length;i++){
    temp+=  
    `
    <div class="main">
    <div class="title">
    <p class= "inner_name"> Category : ${items[i].category}</p>
    <hr>
    <div class= "Products_images">
    <img src=${items[i].image} alt="" class="product_img">
    </div>
    
    <hr>
    <div class="innerbody">
    <p class= "inner_name"> Id : ${items[i].id}</p>
    <p class= "inner_name"> Title : ${items[i].title}</p>
    <p class= "inner_name"> Price : ${items[i].price}</p>
   
    </div>
    </div>
    </div>
    
      `
      document.getElementById("shoppingwebsite").innerHTML=temp
}

  }
