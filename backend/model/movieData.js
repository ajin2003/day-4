const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    category:String,
    movieYear:Number
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData
