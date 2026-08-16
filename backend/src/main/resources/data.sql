INSERT INTO fortunes (slug, title, subtitle, price, icon) VALUES
  ('nature', '타고난 결', '내 안의 기질과 가능성', 1200, '✦'),
  ('love', '마음의 인연', '사랑이 머무는 방식', 1200, '♡'),
  ('work', '일의 나침반', '재능이 향하는 자리', 1200, '⌁'),
  ('together', '우리의 온도', '두 사람의 조화', 1200, '☾'),
  ('season', '올해의 계절', '한 해의 리듬과 전환', 1200, '❋'),
  ('question', '한 가지 질문', '마음속 고민을 또렷하게', 500, '?')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO stories (slug, title, subtitle, price, icon, display_order, active) VALUES
  ('nature', '타고난 결', '내 안의 기질과 가능성', 1200, '✦', 1, TRUE),
  ('love', '마음의 인연', '사랑이 머무는 방식', 1200, '♡', 2, TRUE),
  ('work', '일의 나침반', '재능이 향하는 자리', 1200, '⌁', 3, TRUE),
  ('together', '우리의 온도', '두 사람의 조화', 1200, '☾', 4, TRUE),
  ('season', '올해의 계절', '한 해의 리듬과 전환', 1200, '❋', 5, TRUE),
  ('question', '한 가지 질문', '마음속 고민을 또렷하게', 500, '?', 6, TRUE)
ON CONFLICT (slug) DO NOTHING;
