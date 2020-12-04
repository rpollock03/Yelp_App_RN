import axios from "axios"


export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer AiSDpdTN-lyZk2bXux3gpIPkDotdi2c5CH6V0DeuIshqHv7gNAm8VYdgbHPAD3JKL1fx539SIQQl21QP5LaILALyeXIB6-fxFAeqefxDMubHNBG1Wt8bKABY6WvGX3Yx"
    }

})