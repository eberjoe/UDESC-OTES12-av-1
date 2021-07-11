/*
  Warnings:

  - You are about to drop the column `Telephone` on the `Ticket` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER NOT NULL,
    "startTimestamp" TEXT NOT NULL,
    "endTimestamp" TEXT,
    "location" INTEGER NOT NULL,
    "telephone" TEXT
);
INSERT INTO "new_Ticket" ("endTimestamp", "id", "location", "startTimestamp", "type") SELECT "endTimestamp", "id", "location", "startTimestamp", "type" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
