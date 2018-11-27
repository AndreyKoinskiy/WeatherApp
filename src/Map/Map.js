import React from 'react'
import MapView from 'react-native-maps';

const Map = (props) => {
    let id = 0;
    return(
        <MapView style={props.style.map}
                 initialRegion={{
                     latitude: 48.99568000,
                     longitude: 21.24220000,
                     latitudeDelta: 3.001,
                     longitudeDelta: 3.01
                 }}
                 onLongPress = {(e) => props.onMapPress(e)}

        >
            {
                props.markers.map(marker => {
                    return(
                        <MapView.Marker
                            key={marker.key}
                            coordinate={marker.coordinate}
                            pinColor={marker.color}
                            onLoad={() => forceUpdate()}
                            onPress = {(e) => props.onMarkerPress(e)}
                        />
                    )
                })
            }
        </MapView>
    )
};
export default Map