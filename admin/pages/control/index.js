import React, { useRef, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import API from '../../services/API';
import mapboxgl, { accessToken } from "mapbox-gl";
import UserDataService from "../../services/UserDataService";

import 'mapbox-gl/dist/mapbox-gl.css';
import { Button, Modal, Input } from 'antd';
mapboxgl.accessToken = 'pk.eyJ1IjoiaGljY3VwLXN0YWZmIiwiYSI6ImNsangxeHVkbzAyNmwzdHJ4cmJiYWZmMm4ifQ.yI4259jlMq2elDiT_uK1kg';



export default function Control (access_token, user_data) {
    const [newlat, setnewlat] = useState(false);
    const [newlgn, setnewlgn] =  useState(0);

    const [lngLatSelected, setlngLatSelected] = useState(false);

    const [username, setInputValueUsername] = useState('');
    const [email, setInputValueEmail] = useState('');

    const [lng, setLng] = useState(2.35);
    const [lat, setLat] = useState(48.85);
    const [zoom, setZoom] = useState(5);
    const map = useRef(null);
    const mapContainer = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

    const showModaUpdate = () => {
      setIsModalOpenUpdate(true);
    };
    
    const handleOkUpdate = () => {
      setIsModalOpenUpdate(false);
    };

    const handleCancelUpdate = () => {
      setIsModalOpenUpdate(false);
    };

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleSubmit = async () => {

    }
    const handleOk = async () => {
      try {
        const user_data = UserDataService.get();
        let trail = {};
        trail.name = "Added by admin in dashboard";
        trail.address = "Added by admin in dashboard";
        trail.description = "Added by admin in dashboard";
        trail.pictures = ["https://google.com"];
        trail.latitude = lngLatSelected.lat;
        trail.longitude = lngLatSelected.lng;
        trail.difficulty = 0;
        trail.duration = 0;
        trail.distance = 0;
        trail.uphill = 0;
        trail.downhill = 0;
        trail.tools = [];
        trail.relatedArticles = [];
        trail.labels = [];
        let geojson = {
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [[
                lngLatSelected.lng,
                lngLatSelected.lat
              ]]}}]}
        trail.geoJSON = JSON.stringify(geojson);
        const response = await API.CreateMarker('POST', '/api/trail/create', user_data, trail, true);
        console.log(response);
        setIsModalOpen(false);
      } catch (error) {
        console.log(error);
        setIsModalOpen(false);
      }
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

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
                console.log(response);
                trails.map((item) => {
                  let tmp = JSON.parse(item.geoJSON);
                  console.log(tmp);
                  if (typeof tmp.features !== 'undefined' && typeof tmp.features[0] !== 'undefined' && 'undefined'  && typeof tmp.features[0].geometry.coordinates[0] !== 'undefined' ) {
                    result.push(tmp.features[0].geometry.coordinates[0]);
                  } else {
                    //result.push(tmp.features.geometry.coordinates);
                  }
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
            features: markers?.map((marker) => ({
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
            geojson?.features?.forEach((marker) => {  // create a DOM element for the marker
            const markerIcon = document.createElement('div');
            markerIcon.className = 'location-marker';
            markerIcon.style.backgroundImage = 'url(/custom-marker.png)';
            markerIcon.style.width =  '60px';
            markerIcon.style.height = '90px';
            
            new mapboxgl.Marker(markerIcon)
              .setLngLat(marker.geometry.coordinates)
              .addTo(map.current);
            
              markerIcon.addEventListener('click', () => {
                // Open the modal when the marker is clicked
                //openModal(marker.name);
                setIsModalOpenUpdate(true);
              });
            });

          });
        }
        loadMarker();
        map.current.on('contextmenu', (e) => {
          e.preventDefault();
          const lngLat = e.lngLat;
          setlngLatSelected(lngLat);
          console.log('Right-clicked at:', lngLat);
          setIsModalOpen(true);
        });
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
                    <Modal title="Ajout de marqueur" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Voulez vous ajouter un marqueur à l'emplacement : </p>
                    <p>longitude : {lngLatSelected.lng} </p>
                    <p>latitude: {lngLatSelected.lat}</p>
                  </Modal>
                  <Modal title="Modification du marqueur" open={isModalOpenUpdate} onOk={handleOkUpdate} onCancel={handleCancelUpdate}>
                    <p>longitude : </p> < Input placeholder="longitude" onChange={e => { setnewlgn(e.currentTarget.value); }}/>
                    <p></p>
                    <p>latitude: </p><Input placeholder="latitude" onChange={e => { setnewlat(e.currentTarget.value); }}/>
                    <p></p>
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                    </Modal>
            <title>Hik'UP Admin</title>
        </Layout>
    );
}