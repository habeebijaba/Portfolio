import { NextResponse } from "next/server"
import connection from "@/utils/db"
import Post from "@/models/Post"

//FETCH DATA

export const GET = async (Request, { params }) => {
    const { id } = params
    try {
        await connection()
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), { status: 200 })

    } catch (error) {
        return new NextResponse("Database error", { status: 500 })

    }
}

export const DELETE = async (Request, { params }) => {
    console.log("calles ");
    const { id } = params
    console.log(id,"yhis is id");

    try {
        await connection()
        await Post.findByIdAndDelete(id)
        return new NextResponse("Post has been deleted", { status: 200 })

    } catch (error) {
        return new NextResponse("Database error", { status: 500 })

    }
}