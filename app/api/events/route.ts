import db from '../../_lib/db'
import { NextRequest, NextResponse } from 'next/server';


export const POST = async (request: NextRequest) => {
  console.log(request);
  const { id, name, email, birth, social } = await request.json();
  const user =  await db.user.create({
    data: {
      name,
      email,
      birth,
      social,
      event:{
        connect:{
          id: Number(id)
        }
      }
    },
  });

   return NextResponse.json(
    {
      success: true,
      message: 'Note Created Successfully!',
      data: user,
    },
    { status: 201 }
  );
}

