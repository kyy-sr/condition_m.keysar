document.getElementById("orderButton").onclick = function () {
    let FoodPrice = parseInt(document.getElementById("food").value);
    let drinkPrice = parseInt(document.getElementById("drink").value);    
    
        let totalPrice = FoodPrice + drinkPrice;

        let discount = 0;

        if (totalPrice > 30){
            alert('ok');
        }
    }

