import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark, SearchControl } from "@pbe/react-yandex-maps";

const YandexMap = ({ onLocationSelect, value }) => {
  const [coords, setCoords] = useState(value || [41.2995, 69.2401]); // Default to Tashkent, Uzbekistan

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userCoords = [latitude, longitude];
          setCoords(userCoords);
          onLocationSelect(userCoords);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Use useEffect to get the user's location when the component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  const handleMapClick = (e) => {
    const newCoords = e.get("coords");
    setCoords(newCoords);
    onLocationSelect(newCoords);
  };

  const handleSearchResultSelect = (e) => {
    const results = e.get("target").getResultsArray();
    if (results.length) {
      const firstResultCoords = results[0].geometry.getCoordinates();
      setCoords(firstResultCoords);
      onLocationSelect(firstResultCoords);
    }
  };

  return (
    <YMaps>
      <Map
        state={{ center: coords, zoom: 14 }}
        width="100%"
        height="330px"
        onClick={handleMapClick}
      >
        <Placemark geometry={coords} />
      
      </Map>
    </YMaps>
  );
};

export default YandexMap;
