import db from '../../_lib/db'
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('id');
  const users = await db.event.findUnique({ where: { id: Number(id) }, include: { users: true } });
  return NextResponse.json({
    success: true,
    message: 'Returned Users!',
    data: users,
  },
    { status: 200 }
  );
}
