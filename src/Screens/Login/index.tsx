import {View, Text, Button, StyleSheet, Image } from "react-native"
import logo from "../../../assets/logo.png"
import { styles } from "./styles"

function Login({navigation}){
    return (
        <View style={styles.container}>
            <Image source={logo}  resizeMethod="scale"></Image>
        </View>
    )
}


export default Login;