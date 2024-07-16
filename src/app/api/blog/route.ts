import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request,res: Response) {
    const {data,error} = await supabase.from("posts").select("*")

    if (error){
        return NextResponse.json({error: error.message})
    }

    return NextResponse.json(data)
}
export async function POST(req: Request,res: Response) {
    const {id,title,content} =await req.json()
    const {data,error} = await supabase.from("posts").insert([{
        id,title,content,createdAt: new Date().toISOString()
    }])

    if (error){
        return NextResponse.json({error: error.message})
    }

    return NextResponse.json(data,{status: 201})
}