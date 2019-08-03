chrome.contextMenus.create({
    title: "使用维基百科（中文）搜索 '%s'", 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://zh.wikipedia.org/wiki/' + encodeURI(params.selectionText)});
    }
});

chrome.contextMenus.create({
    title: "使用维基百科（英文）搜索：'%s'", 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://en.wikipedia.org/wiki/' + encodeURI(params.selectionText)});
    }
});

