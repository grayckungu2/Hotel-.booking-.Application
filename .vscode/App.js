const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://airbnb19.p.rapidapi.com/api/v2/getPropertyDetails',
  params: {
    propertyId: '-1',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': '1deea4c09amsh3f251fe6f82b9f3p1d354bjsne182995ce605',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}