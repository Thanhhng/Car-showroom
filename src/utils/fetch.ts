export async function fetchCars () {
	const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b495e8e362msh59eaa27cc3dc177p169616jsn4b80ffe51839',
			'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export const getImage = (car: any) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	url.searchParams.append('customer', "hrjavascript-mastery");
	url.searchParams.append('make', car.make);
	url.searchParams.append('modelFamily', car.model.split(" ")[0]);
	url.searchParams.append('modelYear', `${car.year}`);
	return url;
}