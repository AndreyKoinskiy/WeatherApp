import React from 'react'
import {StyleSheet,View,TextInput,Button} from 'react-native'

class  InputBar extends React.Component{

    render(){
        const cityName = this.props.data.name;
        return(
            <View style = {styles.container}>
                <TextInput
                    style={styles.input}
                    editable ={true}
                    onChangeText={(text) => this.props.onChangeTextHandler(text)}
                    value={cityName}
                />
                <Button
                    style = {styles.button}
                    onPress ={() => this.props.onPressHandler(cityName)}
                    title="Submit"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
};
export default InputBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    buuton: {
        flex: 0.2,
        height: 100,
        borderWidth: 1
    },
});