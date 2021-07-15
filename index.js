if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const port = 3000;
const app = express();
const fetch = require('node-fetch');

const api_key = process.env.API_KEY;
app.use(express.static('public'));

app.get('/quote', async(request, response) => {
    const fetchApi = await fetch(
        "https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
        })

        const quoteRes = await fetchApi.json();
        response.json(quoteRes);
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`);
});