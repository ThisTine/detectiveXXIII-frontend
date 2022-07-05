import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
    colors:{
        mainBtn:
        {50: "#DACBFF",
        100: "#DACAFF",
        200: "#CCB7FF",
        300: "#C3A9FF",
        400: "#B292FF",
        500: "#A37BFF",
        600: "#976BFF",
        700: "#8D5CFF",
        800: "#8652FF",
        900: "#773DFF"}

    },
    styles:{
        global: ()=>({
            body: {
                bgGradient: 'linear(to-br,#F9F5E0,#F0EBFE)'
            }
        })
    }
})