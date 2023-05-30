import {View, Text, Button } from "react-native"

function SignUp({navigation}){
    return (
        <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
            <Text>Login</Text>
            <Button
                title="SignUp"
                onPress={() => navigation.navigate("SignUp")}
            ></Button>
        </View>
    )
}

export default SignUp;