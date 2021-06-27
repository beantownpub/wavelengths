import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 42.34178174671476, lng: -71.12195627326504 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 42.34178174671476, lng: -71.12195627326504 }} label={"Wavelengths Salon"} />}
    </GoogleMap>
))

export const NashuaMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 42.708670, lng: -71.454740 }}
    >
    {props.isMarkerShown && <Marker position={{ lat: 42.708670, lng: -71.454740 }} />}
    </GoogleMap>
))
