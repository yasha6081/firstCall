const Base = require("./base.model");
const fetch = require('node-fetch');

require('dotenv').config();
const key = process.env.ALPHA_KEY



  class CallStockForFirstTime extends Base {

    addData(stockTicker){
                                
        const endPoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockTicker}&outputsize=full&apikey=${key}`
             
        fetch(endPoint)
        .then(res => res.json())
        .then(data =>{

                  //const data =  response.json(); 
            //console.log(data)
            // const ohlcData =  data["Time Series (Daily)"];
            // const dataToArray =  Object.entries(ohlcData);  //loop throgh all keys & values
            
            // const sleep = (milliseconds) => {
            //     return new Promise(resolve => setTimeout(resolve, milliseconds))
            //   }
              
              
            //   const insertData = async () => {

            //       let firstId = parseInt(dataToArray.length -1) ;
            //       for (let j = 0 ; j <= firstId ; firstId--) {
            //         await sleep(2000)
                    
            //               const symbol_date =  dataToArray[firstId][0];//brings back the dates
            //               const opening =  dataToArray[firstId][1]["1. open"];
            //               const high =  dataToArray[firstId][1]["2. high"];
            //               const low =  dataToArray[firstId][1]["3. low"];
            //               const closing =  dataToArray[firstId][1]["4. close"];
                        
            //             let sql =  `INSERT INTO ${stockTicker}  ( symbol, symbol_date, opening, high, low, closing) VALUES ("${stockTicker}","${symbol_date}", "${opening}" ,"${high}","${low}", "${closing}")`
            //             return  this.query(sql, function(err, rows){
            //                       if(err){ 
            //                         return err
                                  
            //                       }
            //                       else {
                                  
            //                         return rows.affectedRows
            //                       }
            //                   }).catch(err => {return err})
                  

            //       }
                                        
                
            //     }
              
            //     return insertData().catch(err =>console.log(err))
          
        })

       

   
                 
    }
    

} 
    
    
  
  module.exports = CallStockForFirstTime;
  