(function() {
    
    //Generate a unique-ish cb handler
    var cb = "bh";
    for (var i = 0; i < 20; i++) {
        cb += Math.floor(Math.random() * 10);
    }
    
    //Display results
    window[cb] = function(e) {
        if (!window.BEHANCE_DOM) 
            var d = document.querySelector("#behance");
        else 
            var d = document.querySelector(window.BEHANCE_DOM);
        
        if (e.responseStatus === 200) {
            var title = e.responseData.feed.title;
            
            title = '<a href="http://be.net/' + BEHANCE_USER + '"><img src="http://assets.behance.net/img/portfolio/badges/badges/be-badge-small.png"></a>' + title;
            
            var link = e.responseData.feed.link;
            var body = "";
            for (var i = 0; i < e.responseData.feed.entries.length; i++) {
                var entry = e.responseData.feed.entries[i];
                //Remove the inline style
                var content = entry.content.replace(/style=".*?"/, "");
                //preprend a link
                content = content.replace(/>/, "></a>");
                content = "<a href='" + entry.link + "'>" + content;
                console.log(content);
                body += "<div class='borderrr behance_entry col-md-4 col-xs-6'><a href='" + entry.link + "' class='titleLink' class='titleLink' data-toggle='lightbox' data-gallery='multiimages'>" + entry.title + "</a><br/><p><small><em>" + content + "</em></small></p></div>";
            }
            
            var result = "<div class='behance_main'><div class='behance_title'>" + title + "</div>";
            result += "<div class='col-md-8 col-md-offset-2  col-xs-12'>" + body + "</div></div>";
            d.innerHTML = result;
            
        }
        else {
            //handle error
            d.innerHTML = "<div class='behance_main'><p>Sorry, we couldn't load the Behance feed.</p></div>";
        }
    }
    
    if (!BEHANCE_USER) 
        return;
    
    
    var url = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A//www.behance.net/" + BEHANCE_USER + ".xml&num=10&v=1.0&callback=" + cb;
    
    
    var script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
    

    
}());