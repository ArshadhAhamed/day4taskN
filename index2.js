// 1. Object comparison::

var a={name:'person 1',age:5}
var b={age:5,name:'person 1'}
let flag=true
for(var key in a)
{
    if(a[key]!==b[key])
    flag=false;
    break;
}
console.log(flag)


// ____________________________________________________________________
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all"); 
xhr.send();
xhr.onload = function () {
    const data = JSON.parse(xhr.response)
   // 2. To display the country flags
    
                       data.forEach((val)=>{
      console.log(`Flag is : ${val.flags.png}`)
    })
// _______________________________________________________________________
//  3. To display the name,region,subregion,population
data.forEach((val)=>{
  console.log(`Name:${val.name.common},Region:${val.region},Subregion:${val.subregion},Population:${val.population}`)
})
}