var Map = function() {
  var googleMapStyle;
  var googleMapType;
  var googleMapOptions;
  var googleMapIcon;
  var map;
  var init = function() {
    googleMapIcon = "http://elixeur.com/assets/img/map-pin.png";
    googleMapStyle = [
      { elementType: "geometry", stylers: [{ color: "#212121" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{ color: "#757575" }]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#181818" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#1b1b1b" }]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: "#2c2c2c" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#000000" }, { lightness: 35 }]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { lightness: 17 }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#3c3c3c" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#000000" }, { lightness: 17 }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#4e4e4e" }]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#000000" }, { lightness: 40 }]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#000000" }, { lightness: 10 }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#3d3d3d" }]
      }
    ];
    renderMap([23.735187, 90.4121556], 16, "map");
    plotMapPoint(
      23.735187,
      90.4121556,
      "https://www.google.com.bd/maps/place/Elixeur/@23.735187,90.4121556,17z/data=!3m1!4b1!4m5!3m4!1s0x3755b85f1ab6a141:0x5401b1ff98a57ab7!8m2!3d23.735187!4d90.4143443"
    );
  };
  var renderMap = function(center, zoom, element) {
    if ($("#" + element).length == 0) return;
    googleMapType = new google.maps.StyledMapType(googleMapStyle, {
      name: "Elixeur"
    });
    googleMapOptions = {
      zoom: zoom,
      disableDefaultUI: true,
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      center: new google.maps.LatLng(center[0], center[1]),
      mapTypeControlOptions: {
        mapTypeIds: [
          google.maps.MapTypeId.SATELLITE,
          google.maps.MapTypeId.TERRAIN,
          "Elixeur"
        ]
      }
    };
    map = new google.maps.Map(
      document.getElementById(element),
      googleMapOptions
    );
    map.mapTypes.set("Elixeur", googleMapType);
    map.setMapTypeId("Elixeur");
  };
  var plotMapPoint = function(lat, lng, url) {
    var googleMapMarker = new google.maps.Marker({
      url: url,
      map: map,
      position: new google.maps.LatLng(lat, lng),
      icon: googleMapIcon
    });
    googleMapMarker.setMap(map);
    google.maps.event.addListener(googleMapMarker, "click", function() {
      window.open(googleMapMarker.url);
    });
  };
  init();
}
