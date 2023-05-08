let setup = `<script>(async function(){
  window.lfgtopics = window.lfgtopics ? window.lfgtopics : false;
  if (window.lfgtopics === false){
    window.lfgtopics = true;
    // https://github.com/patcg-individual-drafts/topics
    // https://github.com/dgirardi/Prebid.js/blob/c0a922cc59f074aa98a2784fe1d4e794c5da0a46/modules/topicsFpdModule.js
    // https://developer.chrome.com/docs/privacy-sandbox/topics/overview/
    // Turn on Privacy Sandbox Ads API here: chrome://flags/
    // See your Topics here: chrome://topics-internals/
    // Get some cool topics - https://trackthis.link/
    // document.browsingTopics() returns an array of up to three topic objects in random order.
    const topics = await document.browsingTopics();
    console.log("Let's Fking Go get your topics v0.0.4", topics);


    // Create an iframe
    // Create a post-message mechanism 
    // send topics via postMessage
  }
})()</script>`;
if (!document.getElementById('lfgtopics')){
  let iFrame = document.createElement('iframe');
  iFrame.id = "lfgtopics";
  iFrame.src = `https://free.topics.center/iframe-contents.html?cb=12312323sadf`;
  iFrame.width = 0;
  iFrame.height = 0;
  document.body.prepend(iFrame);
}

