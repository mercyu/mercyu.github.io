function updatePrice() {
    let s = document.getElementsByName("types");
    let select = s[0];
    let price = 0;
    let currprice1=0;
    let currprice2=0;
    
    let pr = document.getElementById("totalPrice");
    pr.innerHTML=0+" рублей";
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.types[priceIndex];
    }
    // Скрываем или показываем радиокнопки
    let radioDiv = document.getElementById("radios");
    let f;
    radioDiv.hidden = (select.value == "2" ?  f=false : true);
    // Смотрим, какая опция выбрана
    if(!f){let radios = document.getElementsByName("options");
    radios.forEach(function(radio) { 
      if (radio.checked) {
        let optionPrice = prices.options[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }                     
    });}
     // Скрываем или показываем чекбокс
    let checkDiv = document.getElementById("checkbox");
  checkDiv.hidden = (select.value == "3" ? false : true);
     // Проверяем, выполнено ли свойство
     let checkboxes = document.getElementsByName("prop")[0];
    if (checkbox.checked) {
      let propPrice = prices.property[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      } 
    };

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
      let checkboxes = document.querySelectorAll("#checkbox input");
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
    