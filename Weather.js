import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // for using icons like a fontawesome.
import { PropTypes } from "prop-types";


/*
export default class Weather extends Component{
    render(){
        return(
            <LinearGradient
                colors={["#00C6FB", "#005BEA"]} 
                style={styles.container} 
            > 
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name="ios-rainy"/>
                <Text style={styles.temp}> 35℃ </Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}> Heavy Raining</Text>
                <Text style={styles.subtitle}>for more info look outside </Text>
            </View>
            </LinearGradient>
        );    
    }
} */

const weatherCases = {
    Rain:{
        colors:["#00C6FB", "#005BEA"],
        title: "Raining☔️",
        subtitle: "bring your umbrella",
        icon:"weather-rainy"
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title: "Sunny☀️",
        subtitle: "Go get your ass burnt",
        icon:"weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm⚡️",
        subtitle: "Boooom!! be careful",
        icon:"weather-lightning"
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: "Clouds☁️",
        subtitle: "gloomy days..",
        icon:"weather-cloudy"
    },
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow☃️",
        subtitle: "do you wanna build a snow man :-)",
        icon:"weather-snowy"
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle💦 ",
        subtitle: "light rainy you know",
        icon:"weather-hail"
    },
    Haze:{
        colors:["#D7D2CC", "#304352"],
        title: "Haze 🌫 ",
        subtitle: "Watch out!",
        icon:"weather-fog"
    },
    Mist:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist💧",
        subtitle: "soft rainy",
        icon:"weather-hail"
    }

}

function Weather({wName, temp}){
    console.log(wName) ;
    return(
        <LinearGradient
        colors={weatherCases[wName].colors}
        style={styles.container} 
        > 
        <View style={styles.upper}>
            <MaterialCommunityIcons 
            color="white" size={144} 
            name={weatherCases[wName].icon}/>
            <Text style={styles.temp}> {temp}℃ </Text>
        </View>

        <View style={styles.lower}>
            <Text style={styles.title}> {weatherCases[wName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[wName].subtitle} </Text>
        </View>
        </LinearGradient>
    );
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    wName: PropTypes.string.isRequired
}

export default Weather; 

const styles = StyleSheet.create({

    container: {
        flex:1 // 아이템 center로. 
    },
    upper:{
        flex:1,
        alignItems : "center",
        justifyContent:"center"

    },
    temp:{
        fontSize:44,
        backgroundColor:  "transparent", // 투명. 
        color: "white",
        marginTop:10

    },
    lower:{
        flex:1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{ 
        fontSize:30,
        backgroundColor:  "transparent",
        color: "white",
        marginBottom : 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize:24,
        backgroundColor:  "transparent",
        color: "white",
        marginBottom : 60
    }


});

