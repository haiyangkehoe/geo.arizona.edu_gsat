function initMap() {
  var center = {lat: 10, lng:-30};
  var TUC = {lat: 32.2226, lng: -110.9747};
  var CDCAT = {lat: 38, lng: 36};
  var PULSE = {lat: -13, lng: -74};
  var CAUGHT = {lat: -16, lng: -68}; 
  var ECRAMP = {lat: 0.382, lng: -79.922};
  var iMUSH = {lat: 46.5, lng: -122.5};
  var JTREE = {lat: 33.8, lng: -115.9010};
  var IMAD = {lat: -35.85, lng: -72}; 
  var Tetons = {lat: 43.7904, lng: -110.6816};
  var IHVF = {lat: 46, lng: -121.8};
  var SRF = {lat: 31.720, lng: -110.875};
  var LeBarge = {lat: 42.57, lng: -110};
  var Batholiths = {lat: 54, lng: -127};
  var SNEP = {lat: 37.5, lng: -119};
  var SIEMBRA = {lat: -31, lng: -69};
  var NAF = {lat: 41, lng: 34};
  var CHARGE = {lat: -33, lng: -70};
  var BANJO = {lat: -22, lng: -67.3};
  var COP = {lat: 44.4, lng: -123.25};

  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 2, center: center}); 
                        
  var marker1 = new google.maps.Marker({position: TUC, title:"GSAT Home", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/yellow.png'});
  var marker2 = new google.maps.Marker({position: CDCAT, title:"CDCAT", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker3 = new google.maps.Marker({position: PULSE, title:"PULSE", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker4 = new google.maps.Marker({position: CAUGHT, title:"CAUGHT", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker5 = new google.maps.Marker({position: ECRAMP, title:"Ecuador RAMP", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker6 = new google.maps.Marker({position: iMUSH, title:"iMUSH", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker7 = new google.maps.Marker({position: JTREE, title:"Joshua Tree", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker8 = new google.maps.Marker({position: IMAD, title:"IMAD", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker9 = new google.maps.Marker({position: Tetons, title:"Grand Teton Fault, Nodal Deployment", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker10 = new google.maps.Marker({position: IHVF, title:"Indian Heaven Volcanic Field, Nodal Deploy", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker11 = new google.maps.Marker({position: SRF, title:"Santa Rita Fault, Nodal Deployment",  map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
  var marker12 = new google.maps.Marker({position: LeBarge, title:"LeBarge", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker13 = new google.maps.Marker({position: Batholiths, title:"Batholiths", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker14 = new google.maps.Marker({position: SNEP, title:"SNEP", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker15 = new google.maps.Marker({position: SIEMBRA, title:"SIEMBRA", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker16 = new google.maps.Marker({position: NAF, title:"NAF", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker17 = new google.maps.Marker({position: CHARGE, title:"CHARGE", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker18 = new google.maps.Marker({position: BANJO,title:"BANJO/SEDA", map: map, icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_gray.png'});
  var marker19 = new google.maps.Marker({position: COP, title:"Central Oregon Profile, Nodal Deployment", map: map, icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'});
}

