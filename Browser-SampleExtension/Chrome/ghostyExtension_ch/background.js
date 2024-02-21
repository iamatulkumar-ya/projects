// triggers when extension installs

chrome.runtime.onInstalled.addListener((reason) => {

  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'https://kumaratul.in'
    });
  }


});
















async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await  chrome.tabs.query(queryOptions);
  return tab;
}




// it will fire when a tab is active
chrome.tabs.onActivated.addListener((activeInfo)=>{
  console.log("Tab is getting changed");
  console.log(activeInfo); // {tabId: 1350708453, windowId: 1350708365}
  // console.log(changeInfo);
  // console.log(tab);
  
 chrome.tabs.getCurrent().then((t)=>{
  // console.log(t)

  })
 
  getCurrentTab().then((tab)=>{
    if(tab == undefined){}
    else
    {
      // console.log(tab)
    }

  });

 


  


})



var context_id = -1;

chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});


chrome.input.ime.onKeyEvent.addListener(

  function(engineID, keyData) {

    // console.log(keyData);
    if(keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {

      // modifying text
      chrome.input.ime.commitText({
        "contextID": context_ID,
        "text": keyData.key.toUpperCase()
      });
      return true;
    }

    else {return false;}
  }
)


// chrome.tabs.onActivated.addListener(()=>{
//   var event = new KeyboardEvent('keydown');
// document.querySelector('body').dispatchEvent(event)

// });
// chrome.alarms.onAlarm.addListener(function( alarm ) {
//   console.log("Got an alarm!", alarm);

//   // if(document != null){
//   //   el = document.getElementsByTagName('textarea');
//   //   console.log(el.text)
//   // }
// });

// chrome.alarms.create(

//   "executeMe",
//   {delayInMinutes: 0.1, periodInMinutes:0.1}

// )