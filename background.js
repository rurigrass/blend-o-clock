// const background = ""

console.log("I am background");

// chrome.action.onClicked.addListener(tab => { 
//     console.log(tab);
//     const {url} = tab;
//     console.log(`Loading: ${url}`); 
//   });

chrome.tabs.onCreated.addListener(function(tab) {
    console.log(tab);
})