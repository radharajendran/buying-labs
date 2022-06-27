const data = require('./../data/hotel');
const http = require('./../shared/http');
const fs = require('fs');

const hotelController = {
   

    /**
     * To Get List of locations
     * @param {JSON} req 
     * @param {JSON} res 
     */
    getLocationData: async (req, res) => {
        
        let result = await data.getLocationData(req.body);
        http.send(req, res, result);       
    },

    /**
     * To get list of hotels based on search data
     * @param {JSON} req 
     * @param {JSON} res 
     */
    getHotelList: async(req, res) => {

        let result = await data.gatHotelList(req.body);
        console.log('controller', result)
        http.send(req, res, result);
    },
    
}


module.exports = hotelController;