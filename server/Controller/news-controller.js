import News from '../Model/newsSchema.js'
const getNews=async(request,response)=>{
try {
    const size=Number(request.query.size);
    const skip=Number(request.query.skip);
 const data= await News.find({}).limit(size).skip(size*skip) //

 response.status(200).json(data)

} catch (error) {
    response.status(500).json(error)
}

}
export default getNews;