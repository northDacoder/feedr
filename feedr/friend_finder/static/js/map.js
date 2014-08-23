function HomeControl(controlDiv, map) {

    google.maps.event.addDomListener(zoomout, 'click', function() {
        var currentZoomLevel = map.getZoom();

        if (currentZoomLevel != 0) {
            map.setZoom(currentZoomLevel - 1);
        }
    });

    google.maps.event.addDomListener(zoomin, 'click', function() {
        var currentZoomLevel = map.getZoom();

        if(currentZoomLevel != 21) {
            map.setZoom(currentZoomLevel + 1);
        }
    });

}


function initialize() {
    var map_canvas = document.getElementById('map_canvas');

    // San Francisco
//    var latitude = 37.774929;
//    var longitude = -122.419416;

    // Center of USA
    var latitude = 39.50;
    var longitude = -98.35;
    var map_zoom = 4;

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = '#2d313f';
    var saturation_value = -20;
    var brightness_value = 5;

//     var var_infobox_props = {
//             content: "<strong>Peggy Guggenheim Collection</strong><br><br>Dorsoduro, 701-704<br>30123<br>Venezia<br>P: (+39) 041 240 5411<br><br><a href='http://www.guggenheim.org/venice' target='_blank' style='color:darkblue'>Plan your visit</a>"
//            ,disableAutoPan: false
//            ,maxWidth: 0
//            ,pixelOffset: new google.maps.Size(-10, 0)
//            ,zIndex: null
//            ,boxClass: "myInfobox"
//            ,closeBoxMargin: "2px"
//            ,closeBoxURL: "close_sm.png"
//            ,infoBoxClearance: new google.maps.Size(1, 1)
//            ,visible: true
//            ,pane: "floatPane"
//            ,enableEventPropagation: false
//        };



    //we define here the style of the map
//    var styles = [
//		{
//			//set saturation for the labels on the map
//			elementType: "labels",
//			stylers: [
//				{saturation: saturation_value}
//			]
//		},
//	    {	//poi stands for point of interest - don't show these lables on the map
//			featureType: "poi",
//			elementType: "labels",
//			stylers: [
//				{visibility: "off"}
//			]
//		},
//		{
//			//don't show highways lables on the map
//	        featureType: 'road.highway',
//	        elementType: 'labels',
//	        stylers: [
//	            {visibility: "off"}
//	        ]
//	    },
//		{
//			//don't show local road lables on the map
//			featureType: "road.local",
//			elementType: "labels.icon",
//			stylers: [
//				{visibility: "off"}
//			]
//		},
//		{
//			//don't show arterial road lables on the map
//			featureType: "road.arterial",
//			elementType: "labels.icon",
//			stylers: [
//				{visibility: "off"}
//			]
//		},
//		{
//			//don't show road lables on the map
//			featureType: "road",
//			elementType: "geometry.stroke",
//			stylers: [
//				{visibility: "off"}
//			]
//		},
//		//style different elements on the map
//		{
//			featureType: "transit",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "poi",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "poi.government",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "poi.sport_complex",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "poi.attraction",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "poi.business",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "transit",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "transit.station",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "landscape",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//
//		},
//		{
//			featureType: "road",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "road.highway",
//			elementType: "geometry.fill",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		},
//		{
//			featureType: "water",
//			elementType: "geometry",
//			stylers: [
//				{ hue: main_color },
//				{ visibility: "on" },
//				{ lightness: brightness_value },
//				{ saturation: saturation_value }
//			]
//		}
//	];

    styles = [
        {
            featureType: "road.local",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "poi",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "poi.attraction",
            stylers: [
                {visibility: "on"}
            ]
        },
        {
            featureType: "poi.place_of_worship",
            stylers: [
                {visibility: "on"}
            ]
        },

        {
            featureType: "poi.park",
            stylers: [
                {visibility: "on"}
            ]
        }
    ];

    var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: styles
    };

    var map = new google.maps.Map(map_canvas, map_options);

    for (var i = 0; i < photoData.length; i++) {
        var photo = photoData[i];
        if (photo.place != undefined) {
            setTimeout(addMarker, i * 250, photo, map);
        }
    }

    var homeControlDiv = document.createElement('div');
    var homeControl = new HomeControl(homeControlDiv, map);

    function addMarker(photo, map) {
        console.log(photo);

        var myLatLng = new google.maps.LatLng(photo.place.location.latitude, photo.place.location.longitude);
        var image = {
            url: photo.picture,
            scaledSize: new google.maps.Size(60, 60)
        };

        var go_icon = {
            url: 'http://mygooutings.com/wp-content/uploads/2014/06/go-app-icon3.png',
            scaledSize: new google.maps.Size(60, 60)
        };

        var contentString = '<a id="content" class="myInfobox" href="http://www.mygooutings.com">' +
            '<img width="200px" src="' + photo.source + '">' +
            '</a>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
            ,disableAutoPan: false
            ,maxWidth: 0
            ,pixelOffset: new google.maps.Size(-10, 0)
            ,zIndex: null
            ,boxClass: "myInfobox"
            ,closeBoxMargin: "2px"
            ,closeBoxURL: "close_sm.png"
            ,infoBoxClearance: new google.maps.Size(1, 1)
            ,visible: true
            ,pane: "floatPane"
            ,enableEventPropagation: false
        });

//        var marker = new google.maps.Marker({
//            position: myLatLng,
//            map: map,
//            icon: image
//        });

//        var circles = new google.maps.Marker({
//            map: map,
//            icon: {
//                path: google.maps.SymbolPath.CIRCLE,
//                scale: 10
//            },
//            position: myLatLng
//        });

        var marker = new google.maps.Marker({
            map: map,
            icon: go_icon,
            position: myLatLng
        });



        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

        var legend = document.getElementById('legend');

        for (var key in icons) {
            var type = icons[key];
            var name = type.name;
            var icon = type.icon;
            var div = document.createElement('div');
            div.innerHTML = '<img src="' + icon + '"> ' + name;
            legend.appendChild(div);
        }

    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));

}



google.maps.event.addDomListener(window, 'load', initialize);


