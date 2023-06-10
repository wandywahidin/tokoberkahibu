-- CreateTable
CREATE TABLE "Bulan" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Bulan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laporan" (
    "id" SERIAL NOT NULL,
    "tanggal" TEXT NOT NULL,
    "pemasukan" INTEGER NOT NULL,
    "pengeluaran" INTEGER NOT NULL,
    "margin" INTEGER NOT NULL,
    "keuntungan" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bulanId" INTEGER NOT NULL,

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_bulanId_fkey" FOREIGN KEY ("bulanId") REFERENCES "Bulan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
