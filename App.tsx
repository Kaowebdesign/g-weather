// Core
import React from 'react';
import { StyleSheet } from 'react-native';
import {Router, Scene, Stack} from "react-native-router-flux";
// UI
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// Pages
import { Home, About } from './src/pages';

export default function App() {
  return (
    <Router>
        <Stack key={'root'}>
            <Scene key={'home'} component={Home} title={'Home'} />
            <Scene key={'about'} component={About} title={'About'} />
        </Stack>
    </Router>
  );
}
