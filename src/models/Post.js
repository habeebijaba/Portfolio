import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    })

// const Post = mongoose.model("Post", postSchema)
// module.exports = Post
export default mongoose.models.Post || mongoose.model("Post", postSchema);