import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
    styles:{
        global: ()=>({
            body: {
                bgGradient: 'linear(to-l,#F9F5E0,#F4EBF0,#F4EBF0,#F0F3FE)'
            }
        })
    }
})