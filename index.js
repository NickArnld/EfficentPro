$(document).ready(function(){
    $("#aboutBtn").click(function(e){
        var elmnt = document.getElementById('aboutDiv');
        elmnt.scrollIntoView({behavior: "smooth", block: "center"});
        e.preventDefault()
    });
    $("#offerBtn").click(function(e){
        var elmnt = document.getElementById('offerDiv');
        elmnt.scrollIntoView({behavior: "smooth", block: "center"});
        e.preventDefault()
        
    });
    $("#contactBtn").click(function(e){
        var elmnt = document.getElementById('contactDiv');
        elmnt.scrollIntoView({behavior: "smooth", block: "center"});
        e.preventDefault()
        
    });
    $("#quoteSubmit").click(function(e){
        e.preventDefault();
        let partVolume = $()
        $("#quoteModal").modal();
    });
});