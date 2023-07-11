//fetching data from api
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