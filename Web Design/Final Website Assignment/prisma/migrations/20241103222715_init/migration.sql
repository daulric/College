-- CreateTable
CREATE TABLE "Account" (
    "userid" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderid" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,
    "items" JSONB NOT NULL,
    "is_checkedout" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "Product" (
    "productid" SERIAL NOT NULL,
    "ProductName" TEXT NOT NULL,
    "Quantity" INTEGER NOT NULL,
    "Price" DECIMAL(9,2) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productid")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "receiptid" TEXT NOT NULL,
    "orderid" TEXT NOT NULL,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("receiptid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Account"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "Order"("orderid") ON DELETE RESTRICT ON UPDATE CASCADE;
