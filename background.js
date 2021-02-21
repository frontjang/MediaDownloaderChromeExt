chrome.webRequest.onBeforeRequest.addListener(function (e) {
	if(e.url.indexOf(".mp4")>0) {
		console.log(e.url);
		chrome.downloads.download({
            url: e.url,
            filename: e.url.replace(/^.*[\\\/]/, "").split('?')[0]
        });
	}
}, {urls: ["<all_urls>"], types: ["media"]}, ["requestBody"]);