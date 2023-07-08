//fetching data from api
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
function fetchHotelData() {
    fetch('http://localhost:3000/Hotels')
    .then(response => response.json())
    .then(data => displayHotelData(data))
    .catch(error => console.error('Error', error));
    }
    // Display Hotel detail
    function displayHotelData(data) {
    const hotelContainer = document.getElementById('Hotel-container');
    hotelContainer.innerHTML = '';
    
    data.forEach(record => {
    const recordElement = document.createElement('div');
    recordElement.innerHTML = `
    <p>Name: ${record.name}</p>
    <p>City: ${record.city}</p>
    <p>Bathrooms: ${record.bathrooms}</p>
    <p>Bedrooms: ${record.bedrooms}</p>
    <p>Beds: ${record.beds}</p>
    <img src="${record.gifUrl}" alt="${record.title} GifUrl" />
    
    `;
    hotelContainer.appendChild(recordElement);
    });
    }
    fetchHotelData()
    // Fetch hotel data on page load
    const navBtn = document.getElementById('nav-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const sideNav = document.getElementById('sidenav');
    const modal = document.getElementById('modal');
    
    navBtn.addEventListener("click", function(){
        sideNav.classList.add('show');
        modal.classList.add('showModal');
    });
    
    cancelBtn.addEventListener('click', function(){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    });
    
    window.addEventListener('click', function(event){
        if(event.target === modal){
            sideNav.classList.remove('show');
            modal.classList.remove('showModal');
        }
    });