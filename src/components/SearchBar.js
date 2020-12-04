import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            placeholder="search"
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize="none"
            autoCorrect={false}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }


})

export default SearchBar