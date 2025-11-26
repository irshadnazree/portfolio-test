PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS test;
CREATE TABLE test (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  title TEXT,
  description TEXT,
  published INTEGER NOT NULL DEFAULT 0 CHECK (published IN (0,1)),
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_test_created_at ON test (created_at DESC);
