import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const InformationWeather = (props) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>City: {props.text}</Text>
            <Text style = {styles.text}>Temp: {(props.data.main.temp - 273.15).toFixed()} °C </Text>
            <Text style = {styles.text}>Humidity: {props.data.main.humidity} % </Text>
        </View>
    )
};
export default InformationWeather

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:100,
    },
    text:{
        fontSize:24,
        fontWeight: 'bold',
    }

});