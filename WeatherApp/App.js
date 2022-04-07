import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import TopNav from './components/topNav'
import BotNav from './components/botNav'
import UserLog from './components/userLogin'
import WeatherLines from './components/weatherData';
import WeatherLinesFromApi from './components/weatherFromApi';
import WeatherComplain from './components/weatherComplaints'
import {data} from './components/userLogin'

export default function App() {
  const [isLoginOpen, openLogin] = useState(false);
  const [isWDataOpen, openWData] = useState(false)
  const [isWFromApiOpen, openWFromApi] = useState(false)
  const [isCompOpen, openComplaints] = useState(false)
  const [userEmail, setUEmail] = useState(' ');

  const closeLogIn = () =>{
    openLogin(false)
  }
  const closeWeatherData = () =>{
    openWData(false)
  }
  const closeWeatherFromApi = () =>{
    openWFromApi(false)
  }
  const closeWeatherComplaints = () =>{
    openComplaints(false)
  }
  return (
    <View style={styles.container}>
      <TopNav user={userEmail} clearE={setUEmail}></TopNav>
      <UserLog logInVis={isLoginOpen} closeLogIn={closeLogIn} setE={setUEmail}></UserLog>
      <Button title="login" onPress={()=>openLogin(true)}></Button>
      <Button title="weather data" onPress={()=>openWData(true)}></Button>
      <Button title="weather api" onPress={()=>openWFromApi(true)}></Button>
      <Button title="weather complaints" onPress={()=>openComplaints(true)}></Button>
      <WeatherLines wDataVis={isWDataOpen} closeWData={closeWeatherData}></WeatherLines>
      <WeatherLinesFromApi wApiVis={isWFromApiOpen} closeWApi={closeWeatherFromApi}></WeatherLinesFromApi>
      <WeatherComplain wCompVis={isCompOpen} closeComp={closeWeatherComplaints}></WeatherComplain>
      </View>
  );}
      



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2d2ba',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
