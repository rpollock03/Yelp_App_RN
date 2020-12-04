import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const ResultsDetail = ({ result }) => {

    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>

        <Text><AntDesign name="star" size={15} color="orange" />{result.rating}  <Entypo name="pencil" size={15} color="brown" />{result.review_count} reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginBottom: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold"

    }
})


export default ResultsDetail