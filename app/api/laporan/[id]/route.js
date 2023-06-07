import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const PATCH = async (request, {params}) => {
    const body = await request.json()
    const laporan = await prisma.laporan.update({
        where:{
            id:Number(params.id)
        }, 
        data : {
            tanggal : body.tanggal,
            pemasukan : body.pemasukan,
            pengeluaran : body.pengeluaran,
            margin : body.margin,
            keuntungan : body.keuntungan
        }
    })
    return NextResponse.json(laporan, {status:203})
}
export const DELETE = async (request, {params}) => {
    const laporan = await prisma.laporan.delete({
        where:{
            id:Number(params.id)
        }
    })
    return NextResponse.json(laporan, {status:200})
}