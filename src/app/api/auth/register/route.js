import User from "@/models/User"
import connection from "@/utils/db"
import bcrypt from "bcrypt"

import { NextResponse } from "next/server"

export const POST = async (request) => {
    const { name, email, password } = await request.json()
    await connection()
    const userExist = await User.findOne({ email: email })
    if (userExist) {
        return new NextResponse("User already exists", {
            status: 500
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password: hashedPassword })
    try {
        await newUser.save()
        return new NextResponse("user has been created", {
            status: 201
        })
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}