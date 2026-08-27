INSERT INTO products (name, model, category, price, original_price, badge, tone) VALUES
  ('스팀핏 듀얼 압력밥솥', 'LR-HP0610', '주방가전', 389000, 529000, 'BEST', 'sand'),
  ('퓨어 슬림 직수 정수기', 'LW-P100', '렌탈', 21900, 32900, 'RENTAL', 'mint'),
  ('에어 라운드 공기청정기', 'LA-21W', '생활가전', 249000, 369000, 'NEW', 'blue'),
  ('키친제로 음식물처리기', 'LF-CUBE2', '주방가전', 429000, 699000, 'HOT', 'coral')
ON CONFLICT (model) DO NOTHING;
