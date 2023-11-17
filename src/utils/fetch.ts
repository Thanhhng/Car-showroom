export interface FilterProps {
	manufacturer?: string;
	year?: number;
	model?: string;
	limit?: number;
	fuel?: string;
}

export async function fetchCars ({model,manufacturer,year,limit=14,fuel="gas"} : FilterProps) {
	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3ab9eef721msh33ce24eceb4d3e1p13f616jsn5ecf79565559',
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
	return `${url}`;
}