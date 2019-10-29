function updatePrice() {
    let s = document.getElementsByName("types");
    let select = s[0];
    let price = 0;
    let currprice1=0;
    let currprice2=0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.types[priceIndex];
    }
    let pr = document.getElementById("totalPrice");
    pr.innerHTML=price+" рублей";
    // Скрываем или показываем радиокнопки
    let radioDiv = document.getElementById("radios");
    radioDiv.hidden = (select.value == "2" ? false : true);
    // Смотрим, какая опция выбрана
    let radios = document.getElementsByName("options");
    radios.forEach(function(radio) { 
      if (radio.checked) {
        let optionPrice = prices.options[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }                     
    });
     // Скрываем или показываем чекбокс
    let checkDiv = document.getElementById("checkboxes");
  checkDiv.hidden = (select.value == "3" ? false : true);
     // Проверяем, выполнено ли свойство
     let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.properties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });

  let Counter=+document.getElementById("count").value;
  if(Counter!==undefined)
  price*=Counter;
  Counter=0;
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML = price + " рублей";
}
     // Данные о товарах
function getPrices() {
    return {
      types: [200, 600, 800],
      options: {
        option2: 100,
        option3: 200,
      },
      properties: {
        prop1:100,
        prop2: 200,
      }
    };
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    // Скрываем радиокнопки и чекбокс.
    let radioDiv = document.getElementById("radios");
    radioDiv.hidden = true;
    let checkDiv= document.getElementById("checkboxes");
    checkDiv.hidden=true;
    
    let s = document.getElementsByName("types");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
      });
      
      // Назначаем обработчик радиокнопок.  
      let radios = document.getElementsByName("options");
      radios.forEach(function(radio) {
        radio.addEventListener("change", function(event) {
          let r = event.target;
          console.log(r.value);
          updatePrice();
        });
      });
    
        // Назначаем обработчик чекбоксу.  
      let checkboxes = document.querySelectorAll("#checkboxes input");
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function(event) {
          let c = event.target;
          console.log(c.name);
          console.log(c.value);
          updatePrice();
        });
      });
    
      updatePrice();
    });
