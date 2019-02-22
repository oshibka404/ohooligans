(function() {
	const foodEl = document.getElementById('food');
	const foodDiscountEl = document.getElementById('food__discount');
	const foodTotalEl = document.getElementById('food__total');

	const foodSoupEl = document.getElementById('food__soup');
	const foodSoupPriceEl = document.getElementById('food__soup-price');
	const foodWithSoupTotalEl = document.getElementById('food__with-soup-total');

	const drinkEl = document.getElementById('drink');
	const drinkDiscountEl = document.getElementById('drink__discount');
	const drinkTotalEl = document.getElementById('drink__total');

	const peopleEl = document.getElementById('people');
	const tipsEl = document.getElementById('tips');
	const tipsTotalEl = document.getElementById('tips__total');

	const totalEl = document.getElementById('total');

	const calculateTips = () => {
		const people = parseInt(peopleEl.innerText || 0, 10);
		const tips = parseInt(tipsEl.innerText || 0, 10);
		const tipsTotal = tips / people;
		tipsTotalEl.innerText = Math.ceil(tipsTotal);
		return tipsTotal;
	}

	const calculateDrink = () => {
		const drink = parseInt(drinkEl.innerText || 0, 10);
		const drinkDiscount = parseInt(drinkDiscountEl.innerText || 0, 10);
		drinkTotal = (drink * (1 - drinkDiscount / 100));
		drinkTotalEl.innerText = Math.ceil(drinkTotal);
		return drinkTotal;
	}

	const calculateFood = () => {
		const food = parseInt(foodEl.innerText || 0, 10);
		const foodDiscount = parseInt(foodDiscountEl.innerText || 0, 10);
		foodTotal = (food * (1 - foodDiscount / 100));
		foodTotalEl.innerText = Math.ceil(foodTotal);
		return foodTotal;
	}

	const calculateSoup = () => foodSoupEl.checked ? parseInt(foodSoupPriceEl.innerText || 0, 10) : 0;

	const calculateFoodWithSoup = () => {
		const total = calculateSoup() + calculateFood();
		foodWithSoupTotalEl.innerText = String(total);
		return total;
	}

	const calculateTotal = () => {
		const total = calculateFoodWithSoup() + calculateDrink() + calculateTips();
		totalEl.innerText = isNaN(total) ? 'undefinedundefinedNaN[]{}' : Math.ceil(total);
		return total;
	}

	const toggleSoup = () => {
		document.getElementById('soup').classList.toggle('disabled');
	}

	foodSoupEl.addEventListener('change', toggleSoup);

	document.body.addEventListener('keyup', calculateTotal);
	document.body.addEventListener('click', calculateTotal);
	document.body.addEventListener('keypress', (e) => {
	    if (isNaN(String.fromCharCode(e.which))) {
	    	e.preventDefault();
	    }
	});
})();