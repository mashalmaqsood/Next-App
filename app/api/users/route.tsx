import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
export function GET(){
    return NextResponse.json([
        {id : 1, name : "mashal"},
        {id : 2, name : "sania"}
    ])
}

export async function POST(request : NextRequest){
    const body = await request.json();
    console.log("body",body)
    // if(!body.name) 
    //     return NextResponse.json({error : "Name is required"},{status: 400});

    const validation = schema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors,{status: 400}
    )
    return NextResponse.json({id : 1, name : body.name},{status: 201});

}