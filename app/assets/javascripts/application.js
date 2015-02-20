// // This is a manifest file that'll be compiled into application.js, which will include all the files
// // listed below.
// //
// // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// // or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
// //
// // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// // compiled file.
// //
// // Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// // about supported directives.
// //
// //= require jquery
// //= require jquery_ujs
// //= require turbolinks
// //= require_tree .

// window.map = ''
// window.bermudaTriangle = ''

// $('document').ready(function() {
//   function initialize() {
//     var drawingManager = new google.maps.drawing.DrawingManager({

//     drawingControl: true,
//     drawingControlOptions: {
//       position: google.maps.ControlPosition.BOTTOM_LEFT,
//       drawingModes: [
//         google.maps.drawing.OverlayType.POLYGON,
//       ]
//     },
//     polygonOptions: 
//       {
//         strokeColor: '#FF0000',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: '#FF0000',
//         fillOpacity: 0.35,
//         editable: true
//       }
//     });



//     var mapOptions = {
//       zoom: 5,
//       center: new google.maps.LatLng(24.886436490787712, -70.2685546875),
//       mapTypeId: google.maps.MapTypeId.TERRAIN
//     };
//     map = new google.maps.Map(document.getElementById('map_canvas'),
//         mapOptions);
//     // Define the LatLng coordinates for the polygon's path.

//     drawingManager.setMap(map); // map.map is the reference to original map object
//     var triangleCoords = [
//       new google.maps.LatLng(25.774252, -80.190262),
//       new google.maps.LatLng(18.466465, -66.118292),
//       new google.maps.LatLng(32.321384, -64.75737),
//       new google.maps.LatLng(25.774252, -80.190262)
//     ];

//     // Construct the polygon.
//     bermudaTriangle = new google.maps.Polygon({
//       paths: triangleCoords,
//       strokeColor: '#FF0000',
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       fillColor: '#FF0000',
//       fillOpacity: 0.35,
//       editable: true
//     });

//   google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
//     if (event.type == google.maps.drawing.OverlayType.POLYGON) {
//       var overlay = event.overlay;
//       var polyline_count = overlay.getPath().getLength();
//       infoWindow = new google.maps.InfoWindow();
//       infoWindow.setContent('<div align="right"><div align="left" style="font-weight:bold;">Save Polyline</div><br>Polyline Name: <input type="text" size="15" value="Polyline '+(polyline_count+1)+'" /><br>Polyline Color (aBGR):<input type="text" size="15" value="990000ff" /><br>Polyline Width: <input type="text" size="15" value="4" /><br>Description: <textarea cols="20" rows="3"></textarea><br><input type="button" value="Save" onclick="save_kml_polyline();"/></div>');
//       infoWindow.setPosition(overlay.getPath().getAt(0));
//       infoWindow.open(map);
//     }
//   });

//   bermudaTriangle.setMap(map);
//   }




//   google.maps.event.addDomListener(window, 'load', initialize);
// });

// function addLine() {
//     bermudaTriangle.setMap(map);
//   }

//   function removeLine() {
//     bermudaTriangle.setMap(null);
//   }










// //   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
// // <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
// //   <head>
// //     <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
// //   <META NAME="AUTHOR" CONTENT="Rakshith Krishnappa">
// //   <META NAME="DESCRIPTION" CONTENT="KML Tool - Get Latitude and Longitude for KML Polyline">
// //   <META NAME="KEYWORDS" CONTENT="Google, maps, mashup, tools, kml, polyline">
// //   <META NAME="ROBOTS" CONTENT="ALL">
// //     <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
// //   <title>Mapmash | KML Creator | Tool to generate KML for Polyline</title>
// //     <style type="text/css">
// //   <!--
// //       html {
// //         height: 100%; width:100%;overflow:hidden;
// //       } 
// //     body {
// //     background-color: white;
// //     font-family: Arial, sans-serif;
// //     font-size:10pt
// //    }
// //    h1 {
// //    font-size: 18pt;
// //    }   
// //     #map {
// //     height: 100%;
// //            }  
// // #hand_b {
// //   width:31px;
// //   height:31px;
// //   background-image: url(http://google.com/mapfiles/ms/t/Bsu.png);
// // }
// // #hand_b.selected {
// //   background-image: url(http://google.com/mapfiles/ms/t/Bsd.png);
// // }

// // #placemark_b {
// //   width:31px;
// //   height:31px;
// //   background-image: url(http://google.com/mapfiles/ms/t/Bmu.png);
// // }
// // #placemark_b.selected {
// //   background-image: url(http://google.com/mapfiles/ms/t/Bmd.png);
// // }

// // #line_b {
// //   width:31px;
// //   height:31px;
// //   background-image: url(http://google.com/mapfiles/ms/t/Blu.png);
// // }
// // #line_b.selected {
// //   background-image: url(http://google.com/mapfiles/ms/t/Bld.png);
// // }

// // #shape_b {
// //   width:31px;
// //   height:31px;
// //   background-image: url(http://google.com/mapfiles/ms/t/Bpu.png);
// // }
// // #shape_b.selected {
// //   background-image: url(http://google.com/mapfiles/ms/t/Bpd.png);
// // }      
// //   --> 
// //   </style>

// //       <script type="text/javascript" src="http://www.google.com/jsapi?key=ABQIAAAARX_oFA0uuXZlBmAao5L7OxReTpQ9ak0vkPAD7kyhumap4VzdtBTEp2yMytLvcUANG8vdgiy2tVD_Ew"></script>
// //     <script type="text/javascript">
// //     google.load("maps", "2");
// //     //<![CDATA[
// //   //rakf1 modified code taken from these 2 sources: - http://www.gorissen.info/Pierre/maps/googleMapLocationv4.php and - Distance Measurement Tool - Google Mapplets
// //   // argItems code taken from 
// //   // http://www.evolt.org/article/Javascript_to_Parse_URLs_in_the_Browser/17/14435/?format=print

// //   var map;
// //   var points = [];
// //   var markers = [];
// //   var polyline = null;
// //   var endMarker = null;
// //   var coordinates = '';
// //   var polyline_coordinates = [];
// //   var marker_coordinates = [];
// //   var marker;
// //   var polyline_count = 0;
// //   var kml_polyline_data = [];
    
// //   function updatePolyline() {
// //     if (points) {
// //     if (polyline) {
// //       map.removeOverlay(polyline);
// //     }
// //     polyline = new GPolyline(points, "#ff0000", 4, 0.45, {"geodesic": 1});
// //     map.addOverlay(polyline);

// //     }
// //   }

// //   function addStart(point) {
  
// //     var baseIcon = new GIcon();
// //     baseIcon.iconSize = new GSize(24, 38);
// //     baseIcon.shadowSize = new GSize(37, 34);
// //     baseIcon.iconAnchor = new GPoint(12, 34);
// //     baseIcon.shadow = "http://www.google.com/mapfiles/shadow50.png";

// //     var icon = new GIcon(baseIcon); 
// //     icon.image = "http://www.google.com/intl/en_de/mapfiles/icon-dd-play-trans.png";
    
// //     marker = new GMarker(point,icon);
// //     map.addOverlay(marker,icon);

// //     GEvent.addListener(marker, 'dragend', function() {
// //     marker.getPointAsync(function(point) {
// //       points[0] = point;
// //       updatePolyline();
// //     })
// //     });
// //   }

// //   function updateEnd(point) {
// //     if (!endMarker) {
// //     endMarker = new GMarker(point);
// //     endMarker.markerId = 'end';
// //     map.addOverlay(endMarker);
// //     }
// //     endMarker.setPoint(point);

// //     GEvent.addListener(endMarker, 'dragend', function() {
// //     endMarker.getPointAsync(function(point) {
// //       points[points.length - 1] = point;
// //       updatePolyline();
// //     })
// //     });
// //   }

// //   function deleteEnd() {
// //     if (endMarker) {
// //     var oldEnd = points.pop();
// //     if (points.length > 1) {
// //       var newEnd = points[points.length - 1];
// //       endMarker.setPoint(newEnd);
// //     } else {
// //       map.removeOverlay(endMarker);
// //       endMarker = null;
// //     }
// //     updatePolyline();
// //     polyline_coordinates.pop();
// //     load_data();    
// //     } else {
// //     restart();    
// //     }
// //   }

// //   function restart() {
// //   //  map.clearOverlays();
// //     map.removeOverlay(marker);
// //     points = [];
// //     polyline = null;
// //     endMarker = null;
// //     document.getElementById("geocode").value = "";
// //     for(var i=polyline_coordinates.length;i>-1;i--)
// //     polyline_coordinates.pop();
// //     load_data();  
// //   }

// //   function reset() {
// //     map.clearOverlays();
// //     restart();
// //     document.getElementById('kml_button').disabled = 'disabled';
// //     polyline_count = 0;
// //   } 
  
// //   function show_coord () {
// //     var m = '';
// //     for(var i=0;i<polyline_coordinates.length;i++)
// //       m += polyline_coordinates[i]
// //     document.getElementById("coord").value = m; 
// //   }
  
// //   function load_data() {
// //     show_coord();
// //     if (polyline_coordinates.length > 0) document.getElementById("undo_button").disabled = '';
// //     else document.getElementById("undo_button").disabled = 'disabled';
// //   } 
  
// //   function show_kml() {
// //     var kml_header = '<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://earth.google.com/kml/2.1">\n <Document>\n  <name>'+document.getElementById("kml_name").value+'</name>\n  <description>'+document.getElementById("kml_desc").value+'</description>';
// //     var kml_footer = '\n </Document>\n</kml>';
// //     var polyline_data ='';
// //     for(var i=0;i<polyline_count;i++) {//alert(kml_polyline_data[i]);
// //       polyline_data += kml_polyline_data[i];
// //     }
// //     document.getElementById("geocode").value = kml_header + polyline_data + kml_footer;
// //     document.getElementById("geocode").select();
// //   }

// //   function save_kml_polyline() {
// //     var kml_polyline_header = '\n  <Style id="style'+(polyline_count+1)+'">\n   <LineStyle>\n    <color>'+document.getElementById("polyline_color").value+'</color>\n    <width>'+document.getElementById("polyline_width").value+'</width>\n   </LineStyle>\n  </Style>\n  <Placemark>\n   <name>'+document.getElementById("polyline_name").value+'</name>\n   <description>'+document.getElementById("polyline_desc").value+'</description>\n   <styleUrl>#style'+(polyline_count+1)+'</styleUrl>\n   <LineString>\n    <altitudeMode>relative</altitudeMode>\n    <coordinates>\n';
// //     var kml_polyline_footer = '   </coordinates>\n   </LineString>\n  </Placemark>';
// //     var polyline_data = '';
// //     for(var i=0;i<polyline_coordinates.length;i++)
// //       polyline_data += polyline_coordinates[i]; 
// //     kml_polyline_data[polyline_count] = kml_polyline_header + polyline_data + kml_polyline_footer;  
  
// //     ++polyline_count;
// //     map.closeInfoWindow();
// //     map.removeOverlay(endMarker);
// //     map.removeOverlay(marker);  
// //     points = [];
// //     polyline = null;
// //     endMarker = null;
// //     for(var i=polyline_coordinates.length;i>-1;i--)
// //       polyline_coordinates.pop();
// //     document.getElementById("kml_button").disabled = '';
// //     load_data();
// //   }
  
// //   function draw_polyline() {
// //     select('line_b');
// //       GEvent.addListener(map, 'click', function(overlay, point) {
// //       if (point) {
// //         if (polyline) {
// //           updateEnd(point);
// //         } else {
// //           addStart(point);
// //         }

// //         points.push(point);
// //         updatePolyline();
        
// //         var lat = point.lat().toFixed(4);
// //         var lon = point.lng().toFixed(4);

// //             coordinates = lon + "," + lat + "\n";
// //         polyline_coordinates.push(coordinates);
        
// //         load_data();
// //       }
// //       else if (overlay && map.getInfoWindow().isHidden()) {
// //         if (points.length > 1) {
// //           if(overlay.getPoint() == points[points.length-1]) {
// //             var info_point = overlay.getPoint();
// //             map.openInfoWindowHtml(info_point,'<div align="right"><div align="left" style="font-weight:bold;">Save Polyline</div><br>Polyline Name: <input type="text" size="15" id="polyline_name" value="Polyline '+(polyline_count+1)+'" /><br>Polyline Color (aBGR):<input type="text" size="15" id="polyline_color" value="990000ff" /><br>Polyline Width: <input type="text" size="15" id="polyline_width" value="4" /><br>Description: <textarea id="polyline_desc" cols="20" rows="3"></textarea><br><input type="button" value="Save" onclick="save_kml_polyline();"/></div>');
// //           //  map.removeOverlay(overlay);
// //           //  map.removeOverlay(marker);
// //           //  points = [];
// //           //  polyline = null;
// //           //  endMarker = null;
// //           //  save_polyline_kml(polyline_count);
// //           //  ++polyline_count;
// //           }
// //         }
// //       }
// //        });  
// //   } 

// //   function showAddress() {
// //     var geocoder = new GClientGeocoder();
// //     geocoder.getLatLng(
// //     document.getElementById("input").value,
// //     function(point) {
// //       if (!point) {
// //       alert(address + " not found");
// //       } else {
// //       map.setCenter(point, 11);
// //       var marker = new GMarker(point);
// //       map.addOverlay(marker);
// //       marker.openInfoWindowHtml(address);
// //         GEvent.addListener(marker, 'click', function() {
// //         map.removeOverlay(marker);
// //         });     
// //       }
// //     }
// //     );
// //   }
  
// // function select(buttonId) {
// //   document.getElementById("shape_b").className="unselected";
// //   document.getElementById("line_b").className="unselected";
// //   document.getElementById("placemark_b").className="unselected";
// //   document.getElementById(buttonId).className="selected";
// // }
  
// //   function load(){
// //   //  map = new GMap2(document.getElementById("map"));
// //     map = new GMap2(document.getElementById("map"),{draggableCursor: 'crosshair', draggingCursor: 'crosshair'});
// //       map.addControl(new GLargeMapControl()); // added
// //       map.addControl(new GMapTypeControl()); // added
// //     map.addMapType(G_PHYSICAL_MAP);
// //     map.addControl(new GOverviewMapControl());      
// //     map.setCenter(new GLatLng(37.35, -121.93), 12);
    
// //     document.getElementById("undo_button").disabled = 'disabled';
// //     document.getElementById("kml_button").disabled = 'disabled';  

// //   //  select("hand_b");   

// //     draw_polyline();
// //    }
// //     //]]>
// //     </script>   
// //   </head>
// //   <body onload="load()" onunload="GUnload()">
// //   <table width="100%" height="100%">
// //     <tr style="vertical-align:top">
// //       <td style="width:320px">
// //         <table><tr>
// //         <td><a href="http://mapmash.googlepages.com"><img src="logo_mapmash_02.png" border="0"></a></td>  
// //         <td><div id="placemark_b" onclick="location = 'kmlpoint.html'"/></td>
// //         <td><div id="line_b"/></td>
// //         <td><div id="shape_b" onclick="location = 'kmlpolygon.html'"/></td>
// //         </tr></table>
// //       </td>
// //       <td>
// //         <input type="button" value="New" onclick="reset()"/>
// //         <input id="undo_button" type="button" value="Undo" onclick="deleteEnd();" disabled="disabled"/>
// //         <input id="kml_button" type="button" value="Save as KML" onclick="document.getElementById('kml').style.visibility = 'visible';document.getElementById('geocode').value = '';" disabled="disabled"/>   
// //       </td>
// //       <td align="right">
// //         <nobr>
// //           <input id="input" type="text" size="25" name="address" value="Chicago, IL" />
// //           <input type="button" value="Go!" onclick="showAddress()" />
// //         </nobr>    
// //       </td>
// //     </tr>  
// //     <tr> 
// //       <td valign="top">
// //         <br>
// //         <div style="width:300px;font-size:8pt"><h1>Polyline KML Creator</h1>Click on the map to start drawing lines and click on the red marker to save a polyline. Select 'Save as KML' to generate KML file.</div>
// //         <br>
// //         <br>
// //         <br><b style="font-size:8pt">Coordinates (lng, lat):</b><br>
// //         <textarea id="coord" cols="30" rows="10" style="width:300px;"></textarea>
// //         <br>
// //         <br>  
// //           <script type="text/javascript"><!--
// //           google_ad_client = "pub-2773616400896769";
// //           /* maptools_300x250_01 */
// //           google_ad_slot = "1034665593";
// //           google_ad_width = 300;
// //           google_ad_height = 250;
// //           //-->
// //           </script>
// //           <script type="text/javascript"
// //           src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
// //           </script>   
// //       </td>   
// //       <td colspan="2">
// //         <div style="position:relative;width:100%;height:100%">
// //           <div id="map" style="width:100%;height:630px;min-height:630px;border:1px solid #999;"></div>
// //           <div id="kml" style="position:absolute; visibility:hidden; width:600px;height:500px; top:20px; left:20px; padding:10px; border:1px solid #aaa; z-index:99999;background:#fff;" align="right">
// //             <input type="button" value="Close" onclick="document.getElementById('kml').style.visibility = 'hidden';"/> <br> <br>  
// //             KML Name - <input type="text" size="30" id="kml_name" value="KML Name" /><br>
// //             KML Description - <input type="text" size="30" id="kml_desc" value="KML Description" /><br>
// //             <textarea id="geocode" cols="70" rows="15"></textarea><br />
// //             <input type="button" value="Generate KML" onclick="show_kml();"/><br>
// //           </div>
// //         </div> 
// //       </td>
// //     </tr>
// //   </table>
// //     <script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
// //     </script>
// //     <script type="text/javascript">
// //     _uacct = "UA-2417064-1";
// //     urchinTracker();
// //     </script>
// //   </body>
// // </html>