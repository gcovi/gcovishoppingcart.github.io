if (document.readyState=='loading'){    /*Function checks if page is loading.(Body of the website) */ 
    document.addEventListener('DOMContentLoaded', ready)
}else {/*If it's done loading just continue and load ready function.*/
    ready()
}



$(document).ready(function(){ /*Function for getting stuff from json file and priting it out in table*/ 
	$.getJSON('https://raw.githubusercontent.com/cobeisfresh/frontend-tasks/shopping-cart/products.json', function(data){
		var products_data='';
		$.each(data.products,function(key,value){
           
               
                    products_data += '<ul class="itemList">';
                        products_data += '<li><img class="cart-image" src="' + value.image + '"></img></li>';
                        products_data += '<li class="itemName">'+value.name+'</li>';
                        products_data += '<li class="itemAmount">'+value.price.amount+'</li>';
	     		        products_data += '<li class="itemValute">'+value.price.currency+"&#47"+'</li>';
                        products_data += '<li class="itemUnits">'+value.price.measureUnit+'</li>';
                        products_data += '<li><button class="btn btn-shopping btn-primary" id="button" title="Add item to cart" onclick="addToCartClicked()">Cart &#128722;</button></li>';
                    products_data += '</ul>';
                    
        });
	$('#products_table').append(products_data);
    }) 
})

function ready(){   
    var removeCartItemButtons =document.getElementsByClassName('btn-danger')
    for(var i=0; i<removeCartItemButtons.length; i++){
            var button=removeCartItemButtons[i]
            button.addEventListener('click' , removeCartItem)
        }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i=0; i<quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)

    }

}



function removeCartItem(event){/*Function that removes cart item. Deletes whole item (Name/quantity/price).*/ 
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value<=0){
        input.value=1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var title = products_data.value.name
    
}

function updateCartTotal() { /*Function that pudates cart by going trough  elements in cart */
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('HRK', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'HRK' 
}
 