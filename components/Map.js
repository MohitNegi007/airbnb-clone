import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
const Map = ({ searchResults }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const styleLink = `https://api.mapbox.com/styles/v1/werote5917/cl9npp9px000814pazf0y7yt6.html?title=false&access_token=pk.eyJ1Ijoid2Vyb3RlNTkxNyIsImEiOiJjbDlucG53YTIwOWwyM25tdXVvd2ZrOXkyIn0.b05HnJ42qPRtn2fnQ0D4tQ&zoomwheel=false#11/${latitude}/${longitude}`;

  //getting latitude and logitude
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  useEffect(() => {
    const setLongiLati = () => {
      setLatitude(center.latitude);
      setLongitude(center.longitude);
    };
    setLongiLati();
  }, []);

  console.log(searchResults);

  return (
    <div>
      <iframe width="600px" height="100%" src={styleLink} title="Navigation">
        {/* {searchResults?.map((result) => (
          <div Key={result.long}>
            <Marker
              longitude={result?.long}
              latitude={result?.lat}
              ofsetLeft={-20}
              ofsetTop={-10}
            >
              <p className="cursor-pointer text-2xl animate-bounce">📌</p>
            </Marker>
          </div>
        ))}
        <Marker longitude={longitude} latitude={latitude}>
          <p className="cursor-pointer text-2xl animate-bounce">📌</p>
        </Marker> */}
      </iframe>
    </div>
  );
};

export default Map;
