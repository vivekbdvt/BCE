var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 12.85763,
        lng: 76.472998,
    });
    map.addMarker({
        lat: 12.85763,
        lng: 76.472998,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title"><b>Bahubali College Of Engineering</b></h5><p><span class="region">Gommatanagar, Shravanabelagola, Karnataka 573135, India</span><br>'
            	+'<span>081762 57276</span><br/><span><a href="bce.org.in">bce.org.in</a></span></p>'
        }
        
    });

});
