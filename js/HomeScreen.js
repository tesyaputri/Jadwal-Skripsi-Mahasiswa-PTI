import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 


//Home Screen


class HomeScreen extends React.Component {
 
  
  constructor()
    {
        super();
 
        this.state = { 
          nim: '',
          nama: '',
          jadwal: '', 
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('https://tesyaari.000webhostapp.com/api/sentData.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nim : this.state.nim,
                  nama : this.state.nama,
                  jadwal : this.state.jadwal,
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      
      <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text >Jadwal Skripsi</Text>
                </View>

                <View style={{ flex: 1, alignItems:'center', justifyContent: 'center' }}>
                 <Image
                    source={require('./assets/wisuda.jpg')}//image
                    style={{width: 150, height: 150 }}
                  />
               </View>

                <TextInput 
                  placeholder = "NIM Mahasiswa"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  
                  onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })} />

                <TextInput 
                  placeholder = "Nama Mahasiswa"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />
                <TextInput 
                  placeholder = "Jadwal Ujian Skripsi"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  
                  onChangeText = {(TextInputText) => this.setState({ jadwal: TextInputText })} />
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Masukkan</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </KeyboardAvoidingView> //penutup containerMain
     
      
    );
  }
}
export default HomeScreen;

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
      alignItems: 'center',
      height: 40,
      backgroundColor : "#EA80FC",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
 
    TextStyle:
    {
       color: '#C5CAE9',
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
      justifyContent: 'center'
    
  }, 
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 30,
        color: '#C5CAE9'
    },
});