import { Row, Layout,  } from "antd";

import React, { useRef } from 'react';
import { useEffect } from "react";
import '../css/Dashboard.css'


import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Map from "@arcgis/core/Map";

const { Content, } = Layout;



const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}




const Maps = () => {
    window.addEventListener('scroll', reveal);
    
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
        /**
         * Initialize application
         */
        const webmap = new WebMap({
            portalItem: {
            id: "aa1d3f80270146208328cf66d022e09c"
            }
        });
        // const webmap = new Map({
        //     basemap: "streets-vector"
        //   });

        

        var graphicsLayer = new GraphicsLayer();
        fetch("../assets/BRB_WS_Data_Final.csv")
            .then(response => response.text())
            .then(csvText => {
                var rows = csvText.split("\n");
                // var headers = rows[0].split(",");
                for (var i = 1; i < rows.length; i++){
                    var columns = rows[i].split(",");
                    var longitude = parseFloat(columns[3]);
                    var latitude = parseFloat(columns[4]);
                    if (!isNaN(longitude) && !isNaN(latitude)){
                        var point = {
                            type: "point",
                            longitude: longitude,
                            latitude: latitude
                        };
                        var graphic = new Graphic({
                            geometry: point,
                            symbol: { type: "simple-marker", color: "blue" } // Customize the symbol
                        });
                        graphicsLayer.add(graphic);
                    }
                }
               
                graphicsLayer.visible = true;
                webmap.add(graphicsLayer);
            });
        webmap.add(graphicsLayer);

        var svgPathData = "150,154 150,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,154 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 151,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,155 152,156 152,156 152,156 152,156 152,156 152,156 152,156 152,156 152,156 152,156 152,156 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,155 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 153,154 154,154 154,154";
        var pathCommands = svgPathData.split(/(?=[MLC])/);
        var gslayer = new GraphicsLayer();
        // var coordinates = [];
        pathCommands.forEach(function(command){
            var parts = command.trim().split(/\s+/);
            var coords = parts.map(parseFloat);
            // currentPoint = { x: coords[0], y: coords[1] }; // Update current point
            // coordinates.push({ x: currentPoint.x, y: currentPoint.y });
            // Create a Graphic with the coordinates
            var graphic_boundry = new Graphic({
                geometry: {
                    type: "point", // Use the appropriate geometry type
                    x: coords[0],  // Replace with extracted x-coordinate
                    y: coords[1]   // Replace with extracted y-coordinate
                },
                symbol: { type: "simple-marker", color: "red" } // Customize symbol
            });
  
            // Add the Graphic to the GraphicsLayer
            gslayer.add(graphic_boundry);

        });
        gslayer.visible = true;
        webmap.add(gslayer);

        const view = new MapView({
            container: mapDiv.current,
            map: webmap,
            center: [-114, 51],
            zoom: 11
        });

        const bookmarks = new Bookmarks({
            view,
            // allows bookmarks to be added, edited, or deleted
            editingEnabled: true
        });

        const bkExpand = new Expand({
            view,
            content: bookmarks,
            expanded: true
        });

        // Add the widget to the top-right corner of the view
        view.ui.add(bkExpand, "top-right");

        // bonus - how many bookmarks in the webmap?
        webmap.when(() => {
            if (webmap.bookmarks && webmap.bookmarks.length) {
            console.log("Bookmarks: ", webmap.bookmarks.length);
            } else {
            console.log("No bookmarks in this webmap.");
            }
        });
        }
    }, []);


    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                
                >
                    <Row justify={"center"}>
                        
                        <div style={{height:'80vh', width:'78vw'}} ref={mapDiv}>
                            
                        </div>
                    </Row>
                    
                </Content>
            
        </>
        
    )
}

export default Maps;