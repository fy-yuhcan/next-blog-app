import { supabase } from "@/utils/supabaseClient";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request,res: Response) {
    const id = req.url.split("/api/")[1]
    const {data,error} = await supabase.from("posts").select("*").eq("id",id).single()

            if (error){
                return NextResponse.json({error: error.message})
            }
        
            if(!data){
                notFound()
            }
            return NextResponse.json(data)
}