if (!document.getElementById('lfgtopics')){
  let iFrame = document.createElement('iframe');
  iFrame.id = "lfgtopics";
  iFrame.src = `https://free.topics.center/iframe-contents.html?cb=12312323sadf`;
  iFrame.width = 0;
  iFrame.height = 0;
  iFrame.style.border = 0;
  iFrame.style.display = "none";
  if (window.topicRequester){
    iFrame.onload="topicRequester()"
  }
  document.body.prepend(iFrame);
}

