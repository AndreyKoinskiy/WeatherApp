import React from 'react'
import {View,Text,Alert} from 'react-native'
import InformationWeather from '../Container/InformationWeather/InformationWeather'
import InputBar from '../Container/InputBar/InputBar'

export default class Container extends React.Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;
        const data = navigation.getParam('data', '');
        this.state = {
            data:data,
            text:data.name
        };
    }
    onPressHandler(cityName){
        const api = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=baaa096ac2033759cbc15a80413d27e9';
        fetch(api)
            .then( response => response.json())
            .then( data => {
                this.setState({
                    data,
                    text:data.name
                })
            }).catch((error) => {
            console.error(error);
        });
    }
    onChangeTextHandler(text){
        const data = {...this.state.data};
        data.name = text;
        this.setState({data});
    }

    render(){
        return(
            <View>
                <InputBar
                            text ={this.state.text}
                          onChangeTextHandler = {(text)=> this.onChangeTextHandler(text) }
                          onPressHandler = {(cityName)=>this.onPressHandler(cityName)}
                            data={this.state.data}
                />
                <InformationWeather
                    data={this.state.data} text = {this.state.text}
                />
            </View>
        )
    }
}