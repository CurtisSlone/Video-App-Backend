import mongoose from 'mongoose'
const shortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    like: String,
    shares: String,
    messages: String
})

export default mongoose.model('shortVideos', shortVideoSchema)