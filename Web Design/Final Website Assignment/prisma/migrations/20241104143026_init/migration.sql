/*
  Warnings:

  - The `items` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "items",
ADD COLUMN     "items" JSONB[];
