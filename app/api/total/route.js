import {NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const GET = async () => {
    const res = await prisma.laporan.aggregate({
        _sum : {
            keuntungan : true
        }
    })
    return NextResponse.json(res._sum, {status:200})
}