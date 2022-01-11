import {data} from "./constant/data.js";
import News from "./Model/newsSchema.js"

const defaultData=async()=>{
    try {
        await    News.deleteManyMany({});
        await    News.insertMany(data);
     console.log("Your news is inserted in database");
    } catch (error) {
        console.log(error);
    }
}

export default defaultData;