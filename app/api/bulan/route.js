import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const POST = async (request) => {
    const body = await request.json()
    const bulan = await prisma.bulan.create({
        data : {
            month : body.month,
            year : body.year
        }
    })
    return NextResponse.json(bulan, {status:201})
}

export const GET = async () => {
    const res = await prisma.bulan.findMany({
        select : {
            id : true,
            month : true,
            year : true,
        }
    })
    return NextResponse.json(res, {status:200})
}