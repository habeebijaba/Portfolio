import mongoose from 'mongoose'
mongoose.set('strictQuery', false);

export const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("db connected");
        })

    } catch (error) {
        throw new Error("connection failed")
    }

}
module.exports = connection