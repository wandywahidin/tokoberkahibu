import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const POST = async (request) => {
    const body = await request.json()
    const laporan = await prisma.laporan.create({
        data : {
            tanggal : body.tanggal,
            pemasukan : body.pemasukan,
            pengeluaran : body.pengeluaran,
            margin : body.margin,
            keuntungan : body.keuntungan
        }
    })
    return NextResponse.json(laporan, {status:201})
}

export const GET = async () => {
    const res = await prisma.laporan.findMany({
        select : {
            id : true,
            tanggal : true,
            pemasukan : true,
            pengeluaran : true,
            margin : true,
            keuntungan : true
        }
    })
    const total = await prisma.laporan.aggregate({
        _sum : {
            keuntungan : true
        }
    })
    return NextResponse.json({res, total}, {status:200})
}