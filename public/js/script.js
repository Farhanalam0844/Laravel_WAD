var data=[];
console.log(data);

function redirectToOrderForm1() {
   data=[];
    data.push({
        name: "Anabolic Mass Gainer",
        price:"1899"
    })
    console.log(data);
    window.location.href = "../order_form.html";
  }

  function redirectToOrderForm2() {
    data=[];
     data.push({
         name: "Labrada Iso Whey",
         price:"19000"
     })
     window.location.href = "../order_form.html";
     console.log(data);
     const form = document.getElementById('deliveryForm');
     const nameInput = form.querySelector('#name');
     const priceInput = form.querySelector('#price');
 
     // Set default values for name and price fields from the data array
     nameInput.value = "Labrada Iso Whey";
     priceInput.value = "19000";
 
   }
   function redirectToOrderForm3() {
    data=[];
     data.push({
         name: "Nitro Tech Protein",
         price:"1899"
     })
     console.log(data);
     window.location.href = "../order_form.html";
   }
   function redirectToOrderForm4() {
    data=[];
     data.push({
         name: "Whey Protein By OPTIMUM NUTRITION",
         price:"1899"
     })
     console.log(data);
     window.location.href = "../order_form.html";
   }
   function redirectToOrderForm5() {
    data=[];
     data.push({
         name: "Anabolic Mass Gainer",
         price:"14000"
     })
     console.log(data);

     window.location.href = "../order_form.html";
   }
   function redirectToOrderForm6() {
    data=[];
     data.push({
         name: "Cell Tech Creatine Monohydrate",
         price:"8000"
     })
     console.log(data);
     window.location.href = "../order_form.html";
   }
     
  function handleIndex() {
    window.location.href = "index.html";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}







// Function to set default values for name and price fields
function setDefaultValues() {
    const form = document.getElementById('deliveryForm');
    const nameInput = form.querySelector('#name');
    const priceInput = form.querySelector('#price');

    // Set default values for name and price fields from the data array
    nameInput.value = data[0].name;
    priceInput.value = data[0].price;
}

document.addEventListener('DOMContentLoaded', setDefaultValues);
