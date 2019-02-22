(function() {
	const foodEl = document.getElementById('food');
	const foodDiscountEl = document.getElementById('food__discount');
	const foodTotalEl = document.getElementById('food__total');

	const drinkEl = document.getElementById('drink');
	const drinkDiscountEl = document.getElementById('drink__discount');
	const drinkTotalEl = document.getElementById('drink__total');

	const peopleTotalEl = document.getElementById('people__total');
	const tipsEl = document.getElementById('tips');
	const tipsTotalEl = document.getElementById('tips__total');

	const totalEl = document.getElementById('total');

	const calculateTips = () => {
		const peopleTotal = _parseIntText(peopleTotalEl)
		const tips = _parseIntText(tipsEl);
		const foodAndDrinks = calculateDrink() + calculateFood();
		const tipsTotal = (tips / peopleTotal) * foodAndDrinks;
		tipsTotalEl.innerText = Math.ceil(tipsTotal);
		return tipsTotal;
	}

	const calculateDrink = () => {
		const drink = _parseIntText(drinkEl);
		const drinkDiscount = _parseIntText(drinkDiscountEl);
		drinkTotal = (drink * (1 - drinkDiscount / 100));
		drinkTotalEl.innerText = Math.ceil(drinkTotal);
		return drinkTotal;
	}

	const calculateFood = () => {
		const food = _parseIntText(foodEl);
		const foodDiscount = _parseIntText(foodDiscountEl);
		foodTotal = (food * (1 - foodDiscount / 100));
		foodTotalEl.innerText = Math.ceil(foodTotal);
		return foodTotal;
	}

	const calculateTotal = () => {
		const total = calculateFood() + calculateDrink() + calculateTips();
		totalEl.innerText = isNaN(total) ? 'undefinedundefinedNaN[]{}' : Math.ceil(total);
		return total;
	}

	const _parseIntText = (element) => {
		return parseInt(element.innerText || 0, 10);
	}

	document.body.addEventListener('keyup', calculateTotal);
	document.body.addEventListener('keypress', (e) => {
	    if (isNaN(String.fromCharCode(e.which))) {
	    	e.preventDefault();
	    }
	});
})();
