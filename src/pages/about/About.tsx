// Core
import React, {FC, memo} from 'react';
import { Container, Text, H1 } from 'native-base';
import {StyleSheet} from "react-native";



const About: FC = memo(() => {

    return (
        <Container style={styles.container}>
            <H1 style={styles.caption}>Get Weather in one touch</H1>
            <Text style={styles.paragraph}>With G Weather App you can get weather in one touch.</Text>
            <Text style={styles.paragraph}>We have used api.openweathermap.org as free open api.</Text>
            <Text style={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            <Text style={styles.paragraph}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
        </Container>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    caption: {
        marginBottom: 10
    },
    paragraph: {
        marginBottom: 10
    }
});

export default About;
