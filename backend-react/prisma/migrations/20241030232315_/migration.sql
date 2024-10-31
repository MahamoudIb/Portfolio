/*
  Warnings:

  - Made the column `description` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "git_Link" TEXT NOT NULL,
    "contributors" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL
);
INSERT INTO "new_Project" ("contributors", "description", "git_Link", "id", "languages", "publishedAt", "title") SELECT "contributors", "description", "git_Link", "id", "languages", "publishedAt", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
