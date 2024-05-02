// Fetching data from the fakestoreapi.com/products API
let datafetch = fetch("https://fakestoreapi.com/products")
  // Parse the response as JSON
  .then((data) => data.json())
  // Once data is retrieved, call getshoppingitems function
  .then((result) => {
    // console.log(result)
    getshoppingitems(result)
});

// Creating a new div element
let divtag=document.createElement("div");
// Adding a CSS class to the div element
divtag.className="col_4 items_container";

// Function to display shopping items
function getshoppingitems(items){
    console.log(items);
    let temp=""
    // Looping through the items
    for(let i=0;i<items.length;i++){
        // Generating HTML for each item
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
        
        `;
        // Adding the generated HTML to the shopping website container
        document.getElementById("shoppingwebsite").innerHTML=temp;
    }
}
