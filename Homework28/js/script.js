let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let kitchen = {
    category: "kitchen",
}

let devices = {
    category: "devices",
}

let cosmetics = {
    category: "cosmetics",
}

function addProoto(arr,obj){
	return arr.forEach(item => {
		Object.setPrototypeOf(item, obj);
	});
}

addProoto(kitchenProducts, kitchen);
addProoto(devicesProducts, devices);
addProoto(cosmeticsProducts, cosmetics);

function render (arr) {
    let box = '';
    arr.forEach(item => {
        let price = item.price.length ? item.price.join("-") : item.price;
        box += `
        <div class="box" style="width: calc(100% / ${arr.length});">
            <div class="img-wrap">
                <img src="images/${item.category}/${item.type}.svg" alt="${item.type}">
			</div>
			<p class="text">
				Name: <span class="text-mod">${item.type}</span>
			</p>
			<p class="text">
				Price: <span class="text-mod">${price}</span>
			</p>
		</div>`;
    });
	return document.querySelector(".wraper").insertAdjacentHTML("beforeend",
	`
	<div class="section">
		<p class="category">Category: ${arr[0].category}</p>
		<div class="box-wrap">
			${box}
		</div>
	</div>
	`);
}

render(kitchenProducts);
render(devicesProducts);
render(cosmeticsProducts);