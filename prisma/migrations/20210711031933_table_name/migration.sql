/*
  Warnings:

  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ticket";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER NOT NULL,
    "startTimestamp" TEXT NOT NULL,
    "endTimestamp" TEXT,
    "location" INTEGER NOT NULL,
    "telephone" TEXT
);
