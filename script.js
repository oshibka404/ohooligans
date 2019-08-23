(function() {
	const paramString = window.location.search.substr(1); // cut off `?` symbol
	const params = {};
	const paramArray = paramString.split("&");
	for (let i = 0; i < paramArray.length; i++) {
		const [paramName, paramValue] = paramArray[i].split("=");
		if (!isNaN(paramValue)) {
			params[paramName] = paramValue;
		}
	}

	if (typeof params.total !== 'undefined') {
		document.getElementById('people__total').innerText = params['total'];
	}
	if (typeof params.tips !== 'undefined') {
		document.getElementById('tips').innerText = params['tips'];
	}

	const foodEl = document.getElementById('food');
	const foodDiscountEl = document.getElementById('food__discount');
	const foodTotalEl = document.getElementById('food__total');

	const foodSoupEl = document.getElementById('food__soup');
	const foodSoupPriceEl = document.getElementById('food__soup-price');
	const foodWithSoupTotalEl = document.getElementById('food__with-soup-total');

	const drinkEl = document.getElementById('drink');
	const drinkDiscountEl = document.getElementById('drink__discount');
	const drinkTotalEl = document.getElementById('drink__total');

	const peopleTotalEl = document.getElementById('people__total');
	const tipsEl = document.getElementById('tips');
	const tipsTotalEl = document.getElementById('tips__total');

	const totalEl = document.getElementById('total');

	const calculateTips = (moneyTotal) => {
		const peopleTotal = _parseIntText(peopleTotalEl)
		const tips = _parseIntText(tipsEl);
		const tipsTotal = (tips / peopleTotal) * moneyTotal;
		tipsTotalEl.innerText = Math.ceil(tipsTotal);
		return tipsTotal;
	}

	const calculateDrink = () => {
		const drink = _parseIntText(drinkEl);
		const drinkDiscount = _parseIntText(drinkDiscountEl);
		const drinkTotal = (drink * (1 - drinkDiscount / 100));
		drinkTotalEl.innerText = Math.ceil(drinkTotal);
		return drinkTotal;
	}

	const calculateFood = () => {
		const food = _parseIntText(foodEl);
		const foodDiscount = _parseIntText(foodDiscountEl);
		const foodTotal = (food * (1 - foodDiscount / 100));
		foodTotalEl.innerText = Math.ceil(foodTotal);
		return foodTotal;
	}

	const calculateSoup = () => {
		return foodSoupEl.checked ? _parseIntText(foodSoupPriceEl) : 0;
	}

	const calculateFoodWithSoup = () => {
		const total = calculateSoup() + calculateFood();
		foodWithSoupTotalEl.innerText = String(total);
		return total;
	}

	const calculateTotal = () => {
		const totalWithoutTips = calculateFoodWithSoup() + calculateDrink();
		const total = totalWithoutTips + calculateTips(totalWithoutTips);
		totalEl.innerText = isNaN(total) ? 'undefinedundefinedNaN[]{}' : Math.ceil(total);
		return total;
	}

	const _parseIntText = (element) => {
		return parseInt(element.innerText || 0, 10);
	}

	const toggleSoup = () => {
		document.getElementById('soup').classList.toggle('disabled');
	}

	foodSoupEl.addEventListener('change', toggleSoup);
	window.addEventListener('load', calculateTotal);
	document.body.addEventListener('keyup', calculateTotal);
	document.body.addEventListener('click', calculateTotal);
	document.body.addEventListener('keypress', (e) => {
	    if (isNaN(String.fromCharCode(e.which))) {
	    	e.preventDefault();
	    }
	});
})();
