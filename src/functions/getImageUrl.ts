import { Buffer } from "buffer";

const getImageUrl = (imageData? : number[])=>{
    return "data:image/jpg;base64,"+Buffer.from(imageData || []).toString("base64")
}

export default getImageUrl