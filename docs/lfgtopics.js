(async function(){
  window.lfgtopics = window.lfgtopics ? window.lfgtopics : false;
  if (window.lfgtopics === false){
    // https://github.com/patcg-individual-drafts/topics
    // document.browsingTopics() returns an array of up to three topic objects in random order.
    const topics = await document.browsingTopics();
    console.log("Let's Fking Go get your topics", topics);


    // Create an iframe
    // Create a post-message mechanism 
    // send topics via postMessage
    window.lfgtopics = true;
  }
})()
