import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const GET = async (request, {params}) => {
    const res = await prisma.komentar.findMany({where : {
        bulanId : Number(params.id)
    }}, {
        select : {
            id : true,
            nama : true,
            pesan : true,            
        }
    })  
    return NextResponse.json(res, {status:200})
}