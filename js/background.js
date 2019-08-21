chrome.contextMenus.create({
    title: "使用维基百科（中文）搜索 '%s'", 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://zh.wikipedia.org/wiki/' + encodeURI(params.selectionText)});
    }
});


chrome.contextMenus.create({
    title: "使用GitHub搜索：'%s'", 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://github.com/search?q=' + encodeURI(params.selectionText)});
    }
});


chrome.contextMenus.create({
    title: "Steam网页激活key：'%s'", 
    contexts: ['selection'], 
    onclick: function(params)
    {
        chrome.tabs.create({url: 'https://store.steampowered.com/account/registerkey?key=' + encodeURI(params.selectionText)});
    }
});



