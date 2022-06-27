const http = require('http');
const jwt = require('jsonwebtoken');
const axios = require("axios");

const config = require('./../cfg/config.json');

const dataLayer = {

    /**
     * Get list of Hotels based on request data 
     * @param {JSON} data 
     * @returns {JSON} error, result
     */
    gatHotelList: async (data) => {

        const options = {
          method: 'GET',
          url: 'https://hotels4.p.rapidapi.com/properties/list',
          params: {
            destinationId: '1506246',
            pageNumber: '1',
            pageSize: '25',
            checkIn: '2020-01-08',
            checkOut: '2020-01-15',
            adults1: '1',
            sortOrder: 'PRICE',
            locale: 'en_US',
            currency: 'USD'
          },
          headers: {
            'X-RapidAPI-Key': '7OoVPagJVznLheEAs6vfrEzSw2tZ1vLu',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          }
        };


        
        return await axios(options);
    },


     /**
     * Get list of Locations based on request data 
     * @param {JSON} data 
     * @returns {JSON} error, result
     */
    getLocationData: async(data) =>  {


        const options = {
          method: 'GET',
          url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
          params: {query: 'new york', locale: 'en_US', currency: 'USD'},
          headers: {
            'X-RapidAPI-Key': '7OoVPagJVznLheEAs6vfrEzSw2tZ1vLu',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        
    }

 }

module.exports = dataLayer    
