import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
	method: 'GET',
	params: {
	  bl_latitude: '11.847676',
	  tr_latitude: '12.838442',
	  bl_longitude: '109.095887',
	  tr_longitude: '109.149359',
	},
	headers: {
	  'X-RapidAPI-Key': '7ab9d3936amshc82dadd2a909770p118d07jsn44a2df62284d',
	  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
  };

export const getPlacesData = async () => {
	try {
		const {
			data: { data }
		} = await axios.get(url, options);
		return data;
	} catch (e) {
		console.log('Fetch data Error: ' + e.message);
	}
}