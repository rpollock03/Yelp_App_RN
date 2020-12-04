import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"



const HomeScreen = ({ navigation }) => {

    return <View>
        <Text>THIS THE HOME SCREEN</Text>
        <Button
            title="Go to Search screen"
            onPress={() => navigation.navigate("Search")}
        />
    </View>
}

const styles = StyleSheet.create({})

export default HomeScreen