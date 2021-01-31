// Core
import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import { Actions } from "react-native-router-flux";
// UI
import {Text, Button, H1} from 'native-base';

const Welcome: FC = memo(() => {

    return (
       <View>
           <H1>Welcome to G Weather</H1>
            <Text>Please choose some action</Text>
            <Button>Get Weather</Button>
            <Button onPress={() => Actions.about()}>
                <Text>
                    About
                </Text>
            </Button>
        </View>
    );
});

const styles = StyleSheet.create({

});

export default Welcome


