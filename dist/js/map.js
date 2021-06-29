export default function map(){


    let map = L.map('map').
     setView([40.70514, -73.93814],
     13);

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
     L.control.scale().addTo(map);

     let marker = L.marker([40.70514, -73.93814]).addTo(map)

}