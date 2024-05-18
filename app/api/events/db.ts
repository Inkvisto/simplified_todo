import db from '../../_lib/db'

export const getEvents = async () => await db.event.findMany();

export const getUsers = async (id: number) => await db.event.findUnique({where: {id}, include: {users: true}});
