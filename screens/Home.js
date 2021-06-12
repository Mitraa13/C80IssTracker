import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, StatusBar, Platform, Image, TouchableOpacity } from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView />
                    <ImageBackground 
                    source={require('../assets/bg.png')}
                    style={styles.bgimg}
                    >
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>ISS TRACKER APP</Text>
                        </View>


                        <TouchableOpacity 
                            style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('Iss Location')
                            }}>
                            <Text style={styles.routeText}>ISS Location</Text>
                            <Text style={styles.knowMoreText}>{"Know more -->"}</Text>
                            <Text style={styles.backGroundDigit}>{"1"}</Text>
                            <Image
                                source={require('../assets/iss_icon.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('Meteors')
                            }}>
                            <Text style={styles.routeText}>Meteors</Text>
                            <Text style={styles.knowMoreText}>{"Know more -->"}</Text>
                            <Text style={styles.backGroundDigit}>{"2"}</Text>
                            <Image
                                source={require('../assets/meteor_icon.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity 
                            style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('Updates')
                            }}>
                            <Text style={styles.routeText}>Updates</Text>
                            <Text style={styles.knowMoreText}>{"Know more -->"}</Text>
                            <Text style={styles.backGroundDigit}>{"3"}</Text>
                            <Image
                                source={require('../assets/rocket_icon.png')}
                                style={styles.iconImage}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bgimg:{
        flex:1,
        resizeMode:'cover',
    },
    androidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        marginTop:20,
    },
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center",
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"balck",
        marginTop:75,
        paddingLeft:30,
        paddingBottom:30,
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
    },
    knowMoreText:{
        paddingLeft:30,
        color:"red",
        fontSize:20,
    },
    backGroundDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80,
    }
})

