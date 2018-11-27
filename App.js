/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, TouchableOpacity,Alert} from 'react-native';
import MapView from 'react-native-maps';
import Map from './src/Map/Map'
import Container from './src/Container/Container'
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



let id = 0;
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
type Props = {};
class App extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            dataWeather:{},
            markers: [],
            text:null
        };
    }

    onMarkerPress(e) {
        let dataWeather = {};
        const api = 'https://api.openweathermap.org/data/2.5/weather?lat='+e.nativeEvent.coordinate.latitude+'&lon='+e.nativeEvent.coordinate.longitude+'&appid=baaa096ac2033759cbc15a80413d27e9'
        fetch(api)
            .then( response => response.json())
            .then( data => {
                dataWeather = data;
                this.setState({dataWeather});

            }).then(data => this.props.navigation.push('Details', {
                                data: this.state.dataWeather,
                            })
        ).catch((error) => {
            console.error(error);
        });
    }


    onMapPress(e) {
        this.setState({
            information:null,
            couter: 0,
            text:"Доавлено",
            markers: [
                {
                    coordinate: e.nativeEvent.coordinate,
                    key: id++,
                    color: randomColor(),
                },
            ],
        });
    }

  render() {
    return (
      <View style={styles.container}>
          <Map {...this.state} onMapPress={(e) =>this.onMapPress(e)} onMarkerPress={(e)=>this.onMarkerPress(e)}   style = {styles}/>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
    {
        Home: App,
        Details: Container
    },
    {
        initialRouteName: "Home"
    }
);
export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
  container: {
        ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map:{
        ...StyleSheet.absoluteFillObject,
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('weather', () => Map);