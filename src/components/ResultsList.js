import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import ResultsDetail from "../components/ResultsDetail"
import { withNavigation } from "react-navigation"

const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null
    }
    return <View styles={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            data={results}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )

            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5

    },
    container: {
        marginBottom: 5
    }
})


export default ResultsList