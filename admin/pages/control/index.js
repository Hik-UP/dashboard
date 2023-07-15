import React, { useRef, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import API from '../../services/API';
import mapboxgl, { accessToken } from "mapbox-gl";
import AccessTokenService from "../../services/AccessTokenService";
import UserDataService from "../../services/UserDataService";
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiaGljY3VwLXN0YWZmIiwiYSI6ImNsangxeHVkbzAyNmwzdHJ4cmJiYWZmMm4ifQ.yI4259jlMq2elDiT_uK1kg';



export default function Control (access_token, user_data) {
  
    const [lng, setLng] = useState(2.35);
    const [lat, setLat] = useState(48.85);
    const [zoom, setZoom] = useState(5);
    const map = useRef(null);
    const mapContainer = useRef(null);

 

    useEffect(() => {
        const user_data = UserDataService.get();
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
        map.current.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true
          })
        );
        async function fetchGeoJSON(user_data) {
          try {
            console.log(user_data);
              let result = [];
              const response = await API.send('POST', '/api/trail/retrieve', user_data, true);
                let trails = response.data.trails;
                console.log(trails);
                trails.map((item) => {
                  let tmp = JSON.parse(item.geoJSON);
                   result.push(tmp.features[0].geometry.coordinates[0]);
                });
                console.log(result);
                return result;
            } catch (error) {
                console.error('Error fetching GeoJSON:', error);
            }
        }
        async function loadMarker() {
          let markers = await fetchGeoJSON(user_data);
          let geojson = {
            type: 'Feature',
            features: markers.map((marker) => ({
              geometry: {
                type: 'Point',
                coordinates: {
                  lat: marker[1],
                  lng: marker[0]
                }
              }
            }))
          };
          map.current.on('load', () => {
            geojson.features.forEach((marker) => {  // create a DOM element for the marker
            const markerIcon = document.createElement('div');
            markerIcon.className = 'location-marker';
            markerIcon.style.backgroundImage = 'url(/custom-marker.png)';
            markerIcon.style.width =  '60px';
            markerIcon.style.height = '90px';
            
            new mapboxgl.Marker(markerIcon)
              .setLngLat(marker.geometry.coordinates)
              .addTo(map.current);
            });
          });
        }
        loadMarker();
      
          //map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
          //return () => { map.current.remove()};
      });

    return (
        <Layout>
                <style jsx>{`
                    .map-container {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                    `}</style>
                    <div ref={mapContainer} className="map-container"/>
            <title>Hik'UP Admin</title>
        </Layout>
    );
}