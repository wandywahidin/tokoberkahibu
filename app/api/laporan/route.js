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
    return NextResponse.json(laporan)
}