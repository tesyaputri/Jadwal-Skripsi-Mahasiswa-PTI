import React, { Component } from 'react';
import { RefreshControl, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, FlatList, List, ListItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

//Data Screen

export default class DataScreen extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'https://tesyaari.000webhostapp.com/api/getData.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.nim;

  render() {
    return (
<View style={ styles.MainContainer }>
      <View style={ styles.Header }>
        <Text style={ styles.TextHeader }> Data Jadwal Ujian Skripsi Mahasiswa </Text>
      </View>
         {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null        
          }
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <View style={styles.BoxClass}>
              <Text>NIM : {item.nim}</Text>
              <Text>Nama : {item.nama}</Text>
              <Text>Jadwal Ujian : {item.jadwal}</Text>
            </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.componentDidMount.bind(this)}
          />
        }
        /> 
        

   </View>   
      
    );
  }
}
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      backgroundColor : '#BBDEFB'

    },
 
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "white",
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'flex-start',
      height: 150,
      backgroundColor : "white",
      marginBottom: 10,
      width: 270,
      paddingTop: 5,
      paddingBottom: 5
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#BBDEFB',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
 
    TextStyle:
    {
       color: '#BBDEFB',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : 'white'
    
  },
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#BBDEFB'
        
    },
    TextHeader: {
        fontSize: 20,
        color: 'black',
        backgroundColor : '#BBDEFB'

    },
});