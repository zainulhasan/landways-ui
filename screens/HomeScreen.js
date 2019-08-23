import React, { Component } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import styled from 'styled-components/native'



export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (

            <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>
                <KeyboardAvoidingView style={{}} behavior="position" enabled>
                    <Title>LANDWAYS</Title>
                    <SubTitle>FIND YOUR POINT OF INTEREST</SubTitle>
                    <DetectedLocationText>We've detected your current location as</DetectedLocationText>
                    <DetectedLocation>Rawalpindi, Pakistan</DetectedLocation>
                    <TextButton>ACCEPT</TextButton>
                    <OrText>OR</OrText>

                    <LocationInput placeholder="Type in your location" />

                    <DoneTextButton>Done</DoneTextButton>
                    <ChangeLocationText>You can also change your location from filters.</ChangeLocationText>
                </KeyboardAvoidingView >
            </View >


        );
    }
}

const ChangeLocationText = styled.Text`
    font-size:15px;
    text-align:center;
    margin-top:10px;
`

const LocationInput = styled.TextInput`
    border:1px solid rgba(0,0,0,0.2);
    font-size:15px;
    height:45px;
    padding:0 10px;
    border-radius:5px;
`

const OrText = styled.Text`
    margin:25px 0px;
    font-size:15px;
    color:#000000;
    opacity:0.5;
    text-align:center;
`

const DoneTextButton = styled.Text`
    background-color:#6BD13D;
    text-transform:uppercase;
    color:#ffffff;
    font-size:15px;
    width:100%;
    border-radius:5px;
    text-align: center;
    line-height:45px;
    margin-top:10px;
`

const TextButton = styled.Text`
    background-color:#6BD13D;
    text-transform:uppercase;
    color:#ffffff;
    font-size:15px;
    width:100%;
    border-radius:5px;
    text-align: center;
    line-height:45px;
    margin-top:25px;
`

const DetectedLocation = styled.Text`
    font-size:18px;
    color:#6BD13D;
`

const DetectedLocationText = styled.Text`
    margin-top:80px;
    font-size:15px;
    color:#000000;
    font-weight:normal
`

const Title = styled.Text`
 font-size:47px;
 font-weight:600;
 text-align:center;
 color:#6BD13D;
 margin-top:30%
`

const SubTitle = styled.Text`
    font-size:14px;
    text-align:center;
    color:#000000;
    letter-spacing:2px;
`

