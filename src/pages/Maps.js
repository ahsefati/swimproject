import { Row, Layout,  } from "antd";

import React, { useRef } from 'react';
import { useEffect } from "react";
import '../css/Dashboard.css'


import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

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

        const view = new MapView({
            container: mapDiv.current,
            map: webmap
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