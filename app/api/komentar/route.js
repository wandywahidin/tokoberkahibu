import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const POST = async (request) => {
    const body = await request.json()
    const komentar = await prisma.komentar.create({
        data : {
            nama : body.nama,
            pesan : body.pesan,
            bulanId : body.bulanId
        }
    })
    return NextResponse.json(komentar, {status:201})
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