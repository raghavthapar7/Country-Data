"use strict";

const app = document.querySelector(".app");
const countryContainer = document.querySelector(".country-container");

// Making a AJAX call
const request = new XMLHttpRequest();

// Making a GET request with the URL of the API
request.open("GET", "https://restcountries.com/v3.1/name/Republic of India");

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
