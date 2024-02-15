import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import API from '../../services/API';
import mapboxgl, { accessToken } from "mapbox-gl";
import UserDataService from "../../services/UserDataService";
import SearchBar from '../../components/SearchBar';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button, Modal, Input } from 'antd';
mapboxgl.accessToken = 'pk.eyJ1IjoiaGljY3VwLXN0YWZmIiwiYSI6ImNsangxeHVkbzAyNmwzdHJ4cmJiYWZmMm4ifQ.yI4259jlMq2elDiT_uK1kg';


export default function Control (access_token, user_data) {
    const router = useRouter();
    const [newlat, setnewlat] = useState(-0.0);
    const [newlgn, setnewlgn] =  useState(-0.0);
    const [address, setaddress] =  useState('');
    const [input, setInput] = useState('');
    const [resultsearch, setresultsearch] = useState([]);
    const [selectedMarker, setselectedMarker] = useState('');
    const [parentState, setParentState] = useState('Initial Value');
    const [Trails, setTrails] = useState([]);
    const [lngLatSelected, setlngLatSelected] = useState(false);
    const [markersLoaded, setMarkersLoaded] = useState(false);
    const [username, setInputValueUsername] = useState('');
    const [email, setInputValueEmail] = useState('');
    const [Markers, setMarkers] = useState([]);
    const [Markers1, setMarkers1] = useState('');
    const [Markers2, setMarkers2] = useState('');

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
      updateMarker(selectedMarker);
    }


    const updateParentState = (newState) => {
      setParentState(newState);
      setaddress(newState);
      console.log(newState);
    }

    async function fetchTrails() {
      try {
          const user_data = UserDataService.get();
          console.log(user_data);
          const response = await API.fetchTrails("POST", '/api/trail/retrieve', user_data, true);
            let trails = response.data.trails;
            return trails;
        } catch (error) {
            console.error('Error fetching Trails:', error);
        }
    }

    async function getMarker(selectedMarker) {
      console.log('getMarker');
      let trails = await fetchTrails();
      console.dir(trails);
      for (var i = 0; i < trails.length; i++) {
        let tmp = JSON.parse(trails[i].geoJSON);
        console.log('selectedMArker :');
        console.dir(selectedMarker);
        if (typeof tmp.features !== 'undefined' && typeof tmp.features[0] !== 'undefined' && typeof tmp.features[0].geometry !== 'undefined'  && typeof tmp.features[0].geometry.coordinates[0] !== 'undefined') { 
          if (tmp.features[0].geometry.coordinates[0][0] === selectedMarker.lng && tmp.features[0].geometry.coordinates[0][1] === selectedMarker.lat) {
            return i;
          }
        }
      }
    }

    async function fetchCoordinates() {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxgl.accessToken}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("response : " + data.features[0].center[0] +" "+ data.features[0].center[1]);

          return (data.features[0].center);
          console.log("here  : " + newlgn + " " + newlat);
        } else {
          console.error('Error fetching coordinates:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function updateMarker(selectedMarker) {
      let index = await getMarker(selectedMarker);
      console.dir(index);
      let data = {};
      let trails = await fetchTrails(user_data);
      let tmp = JSON.parse(trails[index].geoJSON);
      data.id = trails[index].id;
      data.latitude = newlat;
      data.longitude = newlgn;
      console.log(typeof tmp.features[0]);
      let coord = await fetchCoordinates();
      console.log("fetchCoordinates : " + coord);
      setnewlgn(coord[0]);
      setnewlat(coord[1]);
      tmp.features[0].geometry.coordinates[0][0] = coord[0];
      tmp.features[0].geometry.coordinates[0][1] = coord[1];
      console.log('tmp');
      console.dir(tmp);
      data.geoJSON = JSON.stringify(tmp);
      console.log('here');
      console.log(data);
      const user_data = UserDataService.get();
      const response = await API.CreateMarker('PUT', '/api/trail/update', user_data, data, true);
      let result = response.data.trails;
      console.log(result);
      setIsModalOpenUpdate(false);
      router.reload();
    }

    const handleOk = async () => {
      try {
        const user_data = UserDataService.get();
        let trail = {};
        trail.name = "Added by admin in dashboard";
        trail.address = "Added by admin in dashboard";
        trail.description = "Added by admin in dashboard";
        trail.pictures = ["https://google.com"];
        let coord = await fetchCoordinates();
        trail.latitude = coord[1];
        trail.longitude = coord[0];
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
                coord[0],
                coord[1]
              ]]}}]}
        trail.geoJSON = JSON.stringify(geojson);
        const response = await API.CreateMarker('POST', '/api/trail/create', user_data, trail, true);
        console.log(response);
        setIsModalOpen(false);
        router.reload();
      } catch (error) {
        console.log(error);
        setIsModalOpen(false);
        router.reload();
      }
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
     const marker = loadMarker();
     console.log("returned by loadMarker(): " + marker[0]);
     //const myArray = Markers[0]?.split(",");
     //console.log(myArray);
     //console.log("Markers[0] : " + Markers[0] + " Markers[1] : " + Markers[0]);
        const user_data = UserDataService.get();
        if (map.current && markersLoaded == true ) return;
        console.log("markers: " + Markers1+ " " + Markers2);
          map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [Markers1, Markers2],
            //center: [lng, lat],
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

        async function fetchGeoJSON() {
          try {
              let result = [];
              const user_data2 = UserDataService.get();
              const response = await API.send('POST', "/api/trail/retrieve", user_data2, true);
                let trails = response.data.trails;
                console.log(trails);
                console.log(response);
                trails.map((item) => {
                  let tmp = JSON.parse(item.geoJSON);
                  console.log(tmp);
                  if (typeof tmp.features !== 'undefined' && typeof tmp.features[0] !== 'undefined' && typeof tmp.features[0] !==  'undefined'  && typeof tmp.features[0].geometry.coordinates[0] !== 'undefined' ) {
                    result.push(tmp.features[0].geometry.coordinates[0]);
                  } else {
                    //result.push(tmp.features.geometry.coordinates);
                  }
                });
                console.log(result);
                console.log(typeof(result.slice(-1)));
                let tmp = JSON.stringify(result.slice(-1));
                const last1 = tmp.split(",")[0].replaceAll('[', '');
                const last2 = tmp.split(",")[1].replaceAll(']', '');
                console.log("test " + last1 + " "+ last2);
                setMarkers1(last1);
                setMarkers2(last2);
                setMarkers(result.slice(-1));
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
                console.dir('marker :' + JSON.stringify(marker.geometry.coordinates));
                setselectedMarker(marker.geometry.coordinates);
                setIsModalOpenUpdate(true);
              });
            });
          });
          setMarkersLoaded(true);
          return markers;
        }
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
                    <Modal title="Ajout du marqueur" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Voulez vous ajouter un marqueur à l'emplacement : </p>
                    <p>Addresse : </p>
                    <SearchBar childState={parentState} updateParentState={updateParentState} />
                    <p></p>
                    <Button  key="submit" type="primary" onClick={handleOk}>
                      Submit
                    </Button>
                  </Modal>
                  <Modal title="Modification du marqueur" open={isModalOpenUpdate} onOk={handleOkUpdate} onCancel={handleCancelUpdate}>
                    <p>Addresse : </p>
                    <SearchBar childState={parentState} updateParentState={updateParentState} />
                    <p></p>
                    <Button  key="submit" type="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                    </Modal>
        </Layout>
    );
}