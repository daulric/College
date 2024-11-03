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
    "orderid" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "items" JSONB NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Account"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
