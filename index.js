// code solution

const URL = "http://localhost:3000/Hotelpaymentfeatures";

let listholder = document.getElementById("Hotelpaymentfeatures");
document.addEventListener('DOMContentLoaded', () => {
  document.getElementsByClassName("paymentfeatures")[0].remove();
  fetchPaymentFeatures(URL);
});

function fetchPaymentFeatures(URL) {
}

function fetchPaymentFeatures(URL) {
    fetch(URL)
      .then(response => response.json())
      .then(paymentFeatures => {
        paymentFeatures.forEach(paymentFeature => {
          displayPaymentFeature(paymentFeature);
        });
      });
  }
  function displayPaymentFeature(paymentFeature) {
    const li = document.createElement('li');
    li.style.cursor = "pointer";
    li.textContent = paymentFeature.toUpperCase();
    listHolder.appendChild(li);
    addClickEvent(li);
  }
  
  function addClickEvent(element) {
    element.addEventListener('click', () => {
      fetch(`${url}/${element.textContent.toLowerCase()}`)
        .then(res => res.json())
        .then(paymentFeature => {
          document.getElementById('book').textContent = 'book';
          setUpPaymentFeature(paymentFeature);
        });
    });
  }

  function displayPaymentFeatures() {
    const paymentFeatures = data.Hotelpaymentfeatures;
    const paymentFeaturesContainer = document.getElementById("paymentFeaturesContainer"); // Assuming there is an element with id "paymentFeaturesContainer" in your HTML
  
    paymentFeatures.forEach(feature => {
      const featureElement = document.createElement("div");
      featureElement.innerHTML = `
        <p>Bookable: ${feature.bookable}</p>
        <p>CVC Required: ${feature.cvc_required}</p>
        <p>Payable: ${feature.payable}</p>
        <p>Is Direct Payment: ${feature.is_direct_payment}</p>
        <p>Credit Card ID: ${feature.creditcard_id}</p>
        <p>Hotel ID: ${feature.hotel_id}</p>
        <button class="bookingButton">Make Booking</button>
      `;
      paymentFeaturesContainer.appendChild(featureElement);
    });
  
    const bookingButtons = document.getElementsByClassName("bookingButton");
    for (let i = 0; i < bookingButtons.length; i++) {
      bookingButtons[i].addEventListener("click", function() {
        makeBooking(paymentFeatures[i].bookable);
      });
    }
  }
  
  function makeBooking(bookable) {
    if (bookable) {
      alert("Booking successful!");
    } else {
      alert("Sorry, this feature is not bookable.");
    }
  }