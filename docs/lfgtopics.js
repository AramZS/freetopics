(async function(){
  window.lfgtopics = window.lfgtopics ? window.lfgtopics : false;
  if (window.lfgtopics === false){
    window.lfgtopics = true;
    // https://github.com/patcg-individual-drafts/topics
    // https://developer.chrome.com/docs/privacy-sandbox/topics/overview/
    // Turn on Privacy Sandbox Ads API here: chrome://flags/
    // See your Topics here: chrome://topics-internals/
    // document.browsingTopics() returns an array of up to three topic objects in random order.
    const topics = await document.browsingTopics();
    console.log("Let's Fking Go get your topics v0.0.3", topics);


    // Create an iframe
    // Create a post-message mechanism 
    // send topics via postMessage
  }
})()
