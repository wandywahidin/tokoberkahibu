import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const DELETE = async (request, {params}) => {
    const laporan = await prisma.laporan.delete({
        where:{
            id:Number(params.id)
        }
    })
    return NextResponse.json(laporan, {status:200})
}