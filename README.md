# freetopics


## Outputs 

- Homepage - https://free.topics.center/
- iFrame activation of Topics - https://free.topics.center/iframe-contents.html
- Write the iFrame to your page with this script - https://free.topics.center/lfgtopics.js
- Translate topic numbers to words with this script - https://free.topics.center/topicList.js

## Topics Resources 

- https://github.com/patcg-individual-drafts/topics
- https://github.com/dgirardi/Prebid.js/blob/c0a922cc59f074aa98a2784fe1d4e794c5da0a46/modules/topicsFpdModule.js
- https://p.teads.tv/topics.html
- https://developer.chrome.com/docs/privacy-sandbox/topics/overview/
- Turn on Privacy Sandbox Ads API here: chrome://flags/
- See your Topics here: chrome://topics-internals/
- Get some cool topics - https://trackthis.link/
- https://topics-demo.glitch.me/
- Test with very short epochs in Canary on OSX - `/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --enable-features=BrowsingTopics:time_period_per_epoch/15s,PrivacySandboxAdsAPIsOverride,PrivacySandboxSettings3,OverridePrivacySandboxSettingsLocalTesting`
-  document.browsingTopics() returns an array of up to three topic objects in random order.


## Todos 

- [x] Create an iFrame
- [x] Create a post message mechanism
- [x] Send topics via postMessage
- [ ] Create optional translator that can be loaded in to turn topics into english language equiv.  
