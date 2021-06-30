require('dotenv').config({path: '/.env'});

export default function tracker(){
    const url_api = 'https://geo.ipify.org/api/v1?apiKey=';
    const apiKey = procces.env.API_KEY;
    const url_apiAdress= '&ipAddress=';

    let ip = "";
    let location = ""
    let timezone = "";
    let utc = "";

    const getUserIP = () =>{
        fetch('https://api.ipify.org')
        .then(res => res.text())
        .then(data =>{
            ip = data
            console.log(ipData);
        })
    };

    const trackerData = ip_data =>{
        
    }

    getUserIP();
}