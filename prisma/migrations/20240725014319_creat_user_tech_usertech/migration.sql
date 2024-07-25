-- CreateTable
CREATE TABLE "technologies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "studied" BOOLEAN NOT NULL,
    "deadline" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "user_Technologie" (
    "userId" TEXT NOT NULL,
    "technologieId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "technologieId"),
    CONSTRAINT "user_Technologie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_Technologie_technologieId_fkey" FOREIGN KEY ("technologieId") REFERENCES "technologies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "technologies_title_key" ON "technologies"("title");
