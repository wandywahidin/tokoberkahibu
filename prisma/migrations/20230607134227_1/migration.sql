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

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);
