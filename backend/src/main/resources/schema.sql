CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  model VARCHAR(60) NOT NULL UNIQUE,
  category VARCHAR(40) NOT NULL,
  price INTEGER NOT NULL CHECK (price >= 0),
  original_price INTEGER NOT NULL CHECK (original_price >= price),
  badge VARCHAR(20) NOT NULL,
  tone VARCHAR(20) NOT NULL
);
