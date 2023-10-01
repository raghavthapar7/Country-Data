"use strict";

const app = document.querySelector(".app");
const countryContainer = document.querySelector(".country-container");

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
getCountryData("USA");
getCountryData("Spain");
