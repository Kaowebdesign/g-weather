// Core
import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import { Actions } from "react-native-router-flux";
// UI
import {Container, Text, Button, Content, Icon, H1, Spinner} from 'native-base';
// Hook
import { useHomeEf } from './useHomeEf';




const Home: FC = memo(() => {

    const { weather, loading, welcome, setWelcome, handlerLoadWeather } = useHomeEf();

    return (
       <Container style={styles.container}>
           <View style={styles.content}>
               { welcome ?
                   <View style={styles.welcome}>
                       <Icon type={'MaterialCommunityIcons'} name={'weather-fog'} style={styles.base_icon}/>
                       <H1>Welcome to G Weather</H1>
                       <Text style={styles.description}>Choose some action</Text>
                       <View style={styles.buttons}>
                           <Button onPress={handlerLoadWeather} style={styles.button}>
                               <Text>Get Weather</Text>
                           </Button>
                           <Button onPress={() => Actions.about()} style={styles.button}>
                               <Text>
                                   About
                               </Text>
                           </Button>
                       </View>
                   </View>
                   :
                   <View style={styles.main_content}>
                       {
                           loading ?
                               <Spinner color={'#6F6ED4'}></Spinner>
                               :
                               weather && <View style={styles.weather_container}>
                                   <H1 style={styles.weather_caption}>{ weather.name }</H1>
                                   <View style={styles.weather_wrap}>
                                       <View style={styles.weather_data}>
                                           <Icon type={'MaterialCommunityIcons'} name={'temperature-celsius'} style={styles.weather_icon}/>
                                           <Text>{ weather.main.temp }</Text>
                                       </View>
                                       <View style={styles.weather_data}>
                                           <Icon type={'Feather'} name={'droplet'} style={styles.weather_icon}/>
                                           <Text>{ weather.main.humidity }</Text>
                                       </View>
                                       <View style={styles.weather_data}>
                                           <Icon type={'Feather'} name={'wind'} style={styles.weather_icon}/>
                                           <Text>{ weather.wind.speed }</Text>
                                       </View>
                                   </View>
                                   <Button iconLeft onPress={() => setWelcome(true)} style={styles.button}>
                                       <Icon name='arrow-back' />
                                       <Text>Back</Text>
                                   </Button>
                               </View>
                       }
                   </View>
               }
           </View>
       </Container>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    main_content: {
        flex: 1
    },
    base_icon: {
        textAlign: 'center',
        marginBottom: 5,
        color: '#6F6ED4'
    },
    description: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#4d4d4d'
    },
    welcome: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        margin: 10,
        backgroundColor: '#6F6ED4'
    },
    weather_caption: {
        textAlign: 'left',
        marginBottom: 5
    },
    weather_container: {
        margin: 10,
        justifyContent: 'flex-start'
    },
    weather_wrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    weather_data: {
        flexDirection: 'column',
        alignItems: "center"
    },
    weather_icon: {
        color: '#6F6ED4',
        marginBottom: 5
    }
});

export default Home


