"use strict";

const app = document.querySelector(".app");
const countryContainer = document.querySelector(".country-container");

/* 
const showCountryData = function (country) {
  // Making a AJAX call
  const request = new XMLHttpRequest();

  // Making a GET request with the URL of the API
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  // Sending the request to the API
  request.send();

  request.addEventListener("load", function () {
    // Parsing the recieved data by destructuring the response
    const [data] = JSON.parse(request.responseText);

    const html = `<article class="country">
                <img
                    class="country-flag"
                    src=${data.flags.png}
                    alt="Country Flag"
                />
                <div class="country-data">
                    <div class="country-header">
                        <h2 class="country-name">${data.name.official}</h2>
                        <h3 class="country-region">${data.region}</h3>
                    </div>

                    <p class="country-row"><span>👫</span>${(
                      data.population / 1000000
                    ).toFixed(1)}M people</p>
                    <p class="country-row"><span>🗣</span>${Object.values(
                      data.languages
                    ).join(", ")}</p>
                    <p class="country-row"><span>💰</span>${
                      Object.values(data.currencies)[0].name
                    }</p>
                </div>
            </article>
`;

    //   console.log(Object.values(data.currencies)[0].name);
    countryContainer.insertAdjacentHTML("beforeend", html);
  });
};

showCountryData("Republic of India");
showCountryData("USA");
showCountryData("Portugal");
showCountryData("Spain");
 */

// New way of doing stuff

const renderCountry = function (data) {
  const html = `<article class="country">
                <img
                    class="country-flag"
                    src=${data.flags.png}
                    alt="Country Flag"
                />
                <div class="country-data">
                    <div class="country-header">
                        <h2 class="country-name">${data.name.common}</h2>
                        <h3 class="country-region">${data.region}</h3>
                    </div>

                    <p class="country-row"><span>👫</span>${(
                      data.population / 1000000
                    ).toFixed(1)}M people</p>
                    <p class="country-row"><span>🗣</span>${Object.values(
                      data.languages
                    ).join(", ")}</p>
                    <p class="country-row"><span>💰</span>${
                      Object.values(data.currencies)[0].name
                    }</p>
                </div>
            </article>
`;

  // Adding the data to the HTML file
  countryContainer.insertAdjacentHTML("beforeend", html);
};

const getCountryData = function (country) {
  // The country data is fetched by the API and once the response is
  // recieved, we parse it to json and then we return the data to
  // the function that has called it
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData("Portugal");
getCountryData("Republic of India");
