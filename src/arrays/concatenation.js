let countries = ['Bangladesh', 'India', 'Pakistan'];
let saarcCountries = countries.concat('Maldives', 'Bhutan', 'Nepal', 'Afghanistan', 'Sri Lanka');
let echo = val => console.log(val);
// saarcCountries.forEach( val => echo(val));

// map
let upperCasedSaarcCountries = saarcCountries.map(country => country.toUpperCase());
upperCasedSaarcCountries.forEach(echo);
