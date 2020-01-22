$(document).ready(function(){ /*Function for getting stuff from json file and priting it out in table*/ 
	$.getJSON('https://raw.githubusercontent.com/cobeisfresh/frontend-tasks/shopping-cart/products.json', function(data){
		var products_data='';
		$.each(data.products,function(key,value){
			products_data += '<tr class="columnstats">';
			products_data += '<td class="priceDisplay" ><img class="cartimg" src="' + value.image + '"></img></td>';	
			products_data += '<td class="itemName">'+value.name+'</td>';
            products_data += '<td href="#" class="columnstats">'+value.price.amount+'</td>';
			products_data += '<td class="priceDisplay">'+value.price.currency+"&#47"+'</td>';
            products_data += '<td class="priceDisplay">'+value.price.measureUnit+'</td>';
            products_data += '<td class="priceDisplay"><button href="#" class="myButton" title="Add item to cart">Cart</button></td>';
            products_data += '</tr>';
        });

        
  
	$('#products_table').append(products_data);
    })
}) 
                   
