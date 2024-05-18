import db from '../../_lib/db'
import { NextRequest, NextResponse } from 'next/server';


export const GET = async (request: NextRequest) => {
  const order_by: string | any = request.nextUrl.searchParams.get('order_by');
  const events = await db.event.findMany({
    orderBy: {
      [order_by]: 'asc'
    }
  })

  return NextResponse.json(
    {
      success: true,
      message: 'Returned Events!',
      data: events,
    },
    { status: 201 }
  );

}

export const POST = async (request: NextRequest) => {
  const { id, name, email, birth, social } = await request.json();
  const user = await db.user.create({
    data: {
      name,
      email,
      birth,
      social,
      event: {
        connect: {
          id: Number(id)
        }
      }
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: 'User Created Successfully!',
      data: user,
    },
    { status: 201 }
  );
}

