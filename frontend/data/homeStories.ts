export type HomeStory = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  icon: string;
};

export const homeStories: HomeStory[] = [
  { id: 1, slug: "nature", title: "타고난 결", subtitle: "내 안의 기질과 가능성", price: 1200, icon: "✦" },
  { id: 2, slug: "love", title: "마음의 인연", subtitle: "사랑이 머무는 방식", price: 1200, icon: "♡" },
  { id: 3, slug: "work", title: "일의 나침반", subtitle: "재능이 향하는 자리", price: 1200, icon: "⌁" },
  { id: 4, slug: "together", title: "우리의 온도", subtitle: "두 사람의 조화", price: 1200, icon: "☾" },
  { id: 5, slug: "season", title: "올해의 계절", subtitle: "한 해의 리듬과 전환", price: 1200, icon: "❋" },
  { id: 6, slug: "question", title: "한 가지 질문", subtitle: "마음속 고민을 또렷하게", price: 500, icon: "?" }
];
