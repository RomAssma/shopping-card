

      
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".card");
    const totalPriceElement = document.querySelector('.total-price');

    function updateTotal() {
        let total = 0;
        products.forEach(product => {
            const quantityElement = product.querySelector('.quantity');
            const unitPriceElement = product.querySelector('.unit-price');

            let quantity = parseInt(quantityElement.textContent);
            let price = parseFloat(unitPriceElement.textContent.replace("$", ""));
            total += quantity * price;
        });
        totalPriceElement.textContent = total.toFixed(2) + "$";
    }

    products.forEach(product => {
        const plusButton = product.querySelector('.fa-plus-circle');
        const minusButton = product.querySelector('.fa-minus-circle');

        plusButton.addEventListener('click', function() {
            let quantityElement = product.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        minusButton.addEventListener('click', function() {
            let quantityElement = product.querySelector('.quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });
    });

    // Initial update
    updateTotal();
});


const coeurs=document.querySelectorAll(".fa-heart")

 coeurs.forEach(coeur=> {
coeur.addEventListener('click', function () {
    coeur.style.color = "red"; 
 console.log( 'click coeur')
})})

 
 

    var products=document.querySelectorAll('.card-body');
    function deleteElement(event) {
        
        const listItem = event.target.parentElement;
        listItem.remove();
    }
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', deletecard);
        
    });
    function deletecard(event){
        const card =event.target.closest(".card");
        if (card)
            {card.remove();

        }
    }
    




 
      
