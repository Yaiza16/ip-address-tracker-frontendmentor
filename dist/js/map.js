export default function map(mapX = 40.70514 , mapY = -73.93814){
    let map = L.map('map').
     setView([mapX, mapY],
     13);

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
     L.control.scale().addTo(map);

     let marker = L.marker([mapX, mapY]).addTo(map)
}