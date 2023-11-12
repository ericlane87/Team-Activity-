const listofcities = 'Raleigh, New York, Dallas, minneapolis';
console.log(Array.isArray(listofcities));
let listofcitiesArray = listofcities.split(', ');
//console.log(Array.isArray(new Array(listofcities)));

//let listofcitiesArray = (new Array(listofcities));
console.log(listofcitiesArray);






const citiesElement = document.querySelector('#abc');
console.log(citiesElement);
if(citiesElement){
for (let city of listofcitiesArray) {
    city.trim(); 
    citiesElement.innerHTML += `<li>${city}</li>`;
}
}
else{
    console.error("not found")
}

for( i of listofcitiesArray){

    if(i === "minneapolis"){
       console.log("it's there")
    }
    else{
        console.log("not found")
    }
}