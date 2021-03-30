let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://www.worldcoinindex.com/apiservice/json?key=Lc4uB4zjPGTGowXFWbPnKLcBHPMWdlBLHmd';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
};

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    console.log(data1.Markets[0].Name);
    console.log('USD$' + data1.Markets[0].Price_usd);
    console.log('EUR$' + data1.Markets[0].Price_eur);
});