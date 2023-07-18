import { NextResponse } from "next/server"
import connection from "@/utils/db"
import Post from "@/models/Post"

//FETCH DATA

export const GET = async (request) => {
    const url = new URL(request.url)
    const username = url.searchParams.get("username")
    console.log(username, "this is username");
    try {
        await connection()
        const posts = await Post.find(username && { username })
        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (error) {
        return new NextResponse("Database error", { status: 500 })

    }
}