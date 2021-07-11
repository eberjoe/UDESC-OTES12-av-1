-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" INTEGER NOT NULL,
    "startTimestamp" TEXT NOT NULL,
    "endTimestamp" TEXT,
    "location" INTEGER NOT NULL,
    "Telephone" TEXT
);
