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
            keuntungan : body.keuntungan,
            piutang : body.piutang
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

export const GET = async (request, {params}) => {
    const res = await prisma.laporan.findMany({where : {
        bulanId : Number(params.id)
    }}, {
        select : {
            id : true,
            tanggal : true,
            pemasukan : true,
            pengeluaran : true,
            margin : true,
            keuntungan : true,
            bulan : true,
            piutang : true
            
        }
    })
    const total = await prisma.laporan.aggregate({
        where: {
          bulanId: Number(params.id)
        },
        select: {
          _sum: {
            select: {
              keuntungan: true, // Aggregating the sum of the "keuntungan" field
              pemasukan : true,
              pengeluaran : true,
              piutang : true,
              margin : true
            }
          }
        }
      });
      
      return NextResponse.json({res, total}, {status:200})
      
}