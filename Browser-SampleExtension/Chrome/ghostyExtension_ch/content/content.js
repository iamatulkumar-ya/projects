

//alert("I am from content.js")

h1collection =  document.getElementsByTagName('h1');

for (var i = 0; i < h1collection.length; i++) {
  h1collection[i].style.color = 'pink';

}

 
var inputTagcollection = document.getElementsByTagName('input');
//alert("fetched element");
var ghostIDs=[]
var ghostInputIDs={}
for(i=0; i< inputTagcollection.length; i++)
{

  if(inputTagcollection[i].id)
    {
      ghostIDs.push(inputTagcollection[i].id)
      ghostInputIDs["id"+i.toString()] = inputTagcollection[i].id
    }
    else
    {
      let random_id = "id"+(Math.floor((Math.random() * 10000000) + 1)).toString();
      inputTagcollection[i].id = random_id
      ghostIDs.push(random_id)
      ghostInputIDs["id"+i.toString()] = random_id
    }
 
  // console.log(inputTagcollection[i].id)
  // console.log(inputTagcollection[i].name)
  //inputTagcollection[i].value="Superrrrr"
 
}



 console.log(ghostIDs);
console.log(inputTagcollection);
// console.log(ghostInputIDs.id0);

// Creating new element to show the image icon
const iconImg = document.createElement("img");
iconImg.src="chrome-extension://gpclgomccajgnmhlhbikamddakjmoolo/images/icon.png";
iconImg.width="100"
iconImg.height="100"
iconImg.className="iconImage"


for(i=0;i<ghostIDs.length;i++){

  document.getElementById(ghostIDs[i]).addEventListener('focus', (event)=> iaminfocus(event), false);
  document.getElementById(ghostIDs[i]).addEventListener('keypress', (event)=> iaminwritingmode(event), false);
  
} 


// triggers when user does focus the tag
function iaminfocus(event){
  const bodyData = document.getElementsByTagName('body');
  console.log(bodyData[0])
   bodyData[0].insertBefore(iconImg, bodyData[0].children[5]);
}


// triggers when user is typing
function iaminwritingmode(event){
 

  let inputValue = document.getElementById(event.target.id).value;

  if(inputValue !== "")
  {
    let allWords = inputValue.split(" ");

    if(allWords.length > 0) {
      for(i=0; i<allWords.length;i++){
        if(allWords[i].toUpperCase() === "CAT")
        {
          allWords[i] = "Dog";
        }
      }
    }

    document.getElementById(event.target.id).value = allWords.join(" ");

  }


}







// var inputTag0 = document.getElementById(ghostInputIDs.id0);

// // Activate the proofing as soon as user do click on input tag, run below code once only
// inputTag0.addEventListener('focus', (event)=>{

//   // console.log(event);
//   // console.log(inputTag0);
//   document.getElementsByTagName('body')[0].appendChild(iconImg)

//   const bodyData = document.getElementsByTagName('body');
//   console.log(bodyData[0])
//    bodyData[0].insertBefore(iconImg, bodyData[0].children[5]);


// })


// // adding a keypress listener for input tag
// inputTag0.addEventListener('keypress', (event)=>{

//   // console.log("key pressed"); 
//   // console.log(event.target.id)
//   let inputValue = document.getElementById(event.target.id).value;

//   if(inputValue !== "")
//   {
//     let allWords = inputValue.split(" ");

//     if(allWords.length > 0) {
//       for(i=0; i<allWords.length;i++){
//         if(allWords[i].toUpperCase() === "CAT")
//         {
//           allWords[i] = "Dog";
//         }
//       }
//     }

//     document.getElementById(event.target.id).value = allWords.join(" ");

//   }
  



// })





// click on the image to activate the proofing ?
iconImg.addEventListener('click',(event)=>{

  alert("Activate proofing!");
})




  
// h1collection1 =  document.getElementsByTagName('h1');

// for (var i = 0; i < h1collection1.length; i++) {
//   h1collection1[i].style.color = 'blue';
// }










 