import React from 'react';
import { useEffect, useRef } from 'react';
import { Map } from 'ol';
import "./Mapa.css";
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Style,Icon} from 'ol/style/Icon';


export const Mapa = (props) =>{
    const mapRef=useRef();
    useEffect(() =>{
        const mapa= new Map({
            target: mapRef.current,
            layers:[
                new TileLayer({
                    source: new OSM({
                        attributions: []
                    })
                })
            ],
            view: new View({
                zoom:5,
                center:[-23.58201,-46.64096]
            })
    });
        var markers= new VectorLayer({
            source: new VectorSource(),
            style: new Style({
                Image: new Icon({
                    anchor: [0.5,1],
                    src:"",
                })
            })
        });
        mapa.addLayer(markers);
        var marker= new Feature(new Point(0,0))
        console.log("Passo 1",mapRef.current)
    },[]);

    return <div className="map"></div>
}