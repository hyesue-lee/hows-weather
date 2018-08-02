import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "60efb76a7ea9c347667508cd1a173700";

export default class App extends Component {
    state = {
      isLoaded: false, // 위치정보 -> 날씨정보 -> is loaded=true. 
      error:null,
      temp : null,
      name   : null
    };
    componentDidMount(){
      //날시정보 get . 엑스포에서 제공하는 기능 사용.. 네비게이터 겟 로케이션. (기기에서 접근승인여부 물어봄.)
      navigator.geolocation.getCurrentPosition(
        position => { // 위치정보 겟하면 
          /* this.setState({
            isLoaded: true }); */ //스테이트의 로드값 트루로 변경. (임시만들어놓은 날씨화면뜨는것.)
            //상태를 트루로 바꾸던것 대신에 날시겟 기능으로 바꾸자. (임시화면에서 진짜날씨정보로 변경! )
            this._getWeather(position.coords.latitude , position.coords.longitude) //위도 latitude get / 경도 longitude get 
          },
        //위치정보 겟 에러발생시 해당에러를 콘솔로그 하도록 작성 
        error => { // 에러 발생시
          this.setState({
            error : error 
          });
        }
      );
      }

   // API로부터 날씨정보 받아오는 기능.
   _getWeather = (lat, lon) => {
     //* fetch-then : 리액트 js수업 수강하기 
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json); //콘솔로그로 받아온 정보 찍음 
      this.setState({
        temp: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true 
      });
    });};
    


  render() {
    const{isLoaded ,error, temp , name } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
       {isLoaded ? (<Weather wName={name} 
                              temp={Math.ceil(temp - 273.15)}/>) : (<View style={styles.loading}>
                          <Text style={styles.loadingText}>Getting How's the weather ... </Text>
                          {error ? <Text style={styles.errorText}>{error}</Text> : null }
       </View>) }
      </View>
    );
  }
}

// 실제로 나타날 스타일들.. like css but different! 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',

  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft:25
  },
  loadingText:{
    fontSize: 25,
    marginBottom : 150,
  },
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom : 40 
  }

});
