import React, { useState } from "react"
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native"

import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"

import useResults from "../hooks/useResults"

const SearchScreen = ({ navigation }) => {
    //state
    const [term, setTerm] = useState("")

    //getting code from our custom hook
    const [searchApi, results, errorMessage, isLoading] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return <View style={{ flex: 1 }}>
        <SearchBar
            term={term}
            onTermChange={setTerm} //instead of ()=>setTerm(newTerm)
            onTermSubmit={() => searchApi(term)} //as above
        />
        {errorMessage ? <Text>{errorMessage}</Text>
            : null
        }
        {isLoading ? <ActivityIndicator size="large" color="#0000ff" />
            : null}

        <ScrollView>
            <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} navigation={navigation} />
            <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} navigation={navigation} />
            <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} navigation={navigation} />
        </ScrollView>

    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen