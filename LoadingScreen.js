import React, { Component } from "react";
import {
    View,
    ActivityIndicator
} from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('PantalladePanel')
            } else {
                this.props.navigation.navigate('PantalladeIniciodeSesión')
            }
        })
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
