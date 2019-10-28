function updatePrice() {
    let s = document.getElementsByName("types");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.types[priceIndex];
    }
    let radioDiv = document.getElementById("radios");
    radioDiv.hidden = (select.value == "2" ? false : true);

    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.options[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }                                  
    });

    let checkDiv = document.getElementById("checkbox");
  checkDiv.hidden = (select.value == "3" ? false : true);

    if (checkbox.checked) {
      let propPrice = prices.property.prop;
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  let currentCount=document.getElementById("count");
  price*=currentCount;
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML = price + " рублей";
}
function getPrices() {
    return {
      types: [200, 600, 800],
      options: {
        option2: 100,
        option3: 200,
      },
      property: {
        prop: 200,
      }
    };
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки и чекбокс.
    let radioDiv = document.getElementById("radios");
    radioDiv.hidden = true;
    let checkDiv= document.getElementById("checkbox");
    checkDiv.hidden=true;
    
    let s = document.getElementsByName("types");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
   
    
    // Назначаем обработчик радиокнопок.  
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
  
      // Назначаем обработчик чекбокса.  
    //let checkboxes = document.getElementsByName("prop");
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });

// Назначаем обработчик поля ввода.
let counter=document.getElementById("count");
counter.addEventListener("change",function(event){
let b=event.target;
console.log(b.value);
updatePrice();
});

    updatePrice();
  });
   });