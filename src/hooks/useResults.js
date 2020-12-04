import { useEffect, useState } from "react"
import yelp from "../api/yelp"

export default () => {

    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)



    const searchApi = async searchTerm => {
        setIsLoading(true)
        try {
            const response = await yelp.get("/search", {
                params: {
                    term: searchTerm,
                    limit: "50",
                    location: "san jose"
                }
            })
            setResults(response.data.businesses)
        }
        catch (err) {
            setErrorMessage("Something went wrong")
        }
        setIsLoading(false)
    }

    useEffect(() => {
        searchApi("pasta")
    }, [])

    return [searchApi, results, errorMessage, isLoading]

}