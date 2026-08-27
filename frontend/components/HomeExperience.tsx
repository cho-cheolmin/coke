"use client";

import { useEffect, useMemo, useState } from "react";

type Product = { id: number; name: string; model: string; category: string; price: number; originalPrice: number; badge: string; tone: string };
const fallbackProducts: Product[] = [
  { id: 1, name: "스팀핏 듀얼 압력밥솥", model: "LR-HP0610", category: "주방가전", price: 389000, originalPrice: 529000, badge: "BEST", tone: "sand" },
  { id: 2, name: "퓨어 슬림 직수 정수기", model: "LW-P100", category: "렌탈", price: 21900, originalPrice: 32900, badge: "RENTAL", tone: "mint" },
  { id: 3, name: "에어 라운드 공기청정기", model: "LA-21W", category: "생활가전", price: 249000, originalPrice: 369000, badge: "NEW", tone: "blue" },
  { id: 4, name: "키친제로 음식물처리기", model: "LF-CUBE2", category: "주방가전", price: 429000, originalPrice: 699000, badge: "HOT", tone: "coral" }
];
const categories = [["🍚", "밥솥"], ["💧", "정수기"], ["🌬", "공기청정기"], ["♨", "주방가전"], ["❄", "계절가전"], ["🛋", "생활가전"], ["🧼", "케어용품"], ["＋", "전체보기"]];

export default function HomeExperience() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const [toast, setToast] = useState("");
  useEffect(() => { fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080"}/api/products`).then(r => r.ok ? r.json() : Promise.reject()).then(setProducts).catch(() => setProducts(fallbackProducts)); }, []);
  const visible = useMemo(() => products.filter(p => (activeCategory === "전체" || p.category === activeCategory) && p.name.toLowerCase().includes(query.toLowerCase())), [products, activeCategory, query]);
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 2000); };
  const chooseCategory = (label: string) => { setActiveCategory(label === "전체보기" ? "전체" : label.includes("정수") ? "렌탈" : label.includes("밥솥") || label.includes("주방") ? "주방가전" : label.includes("공기") || label.includes("생활") ? "생활가전" : "전체"); document.querySelector("#제품")?.scrollIntoView(); };
  return <main>
    <div className="promo-bar">신규 가입 시 <b>10% 쿠폰</b> · 렌탈 첫 달 무료 <button onClick={() => notify("혜택을 확인했어요")}>혜택 보기 →</button></div>
    <header className="site-header"><div className="header-main wrap"><a className="brand" href="#top"><span>LIVING</span>ON<i>.</i></a><nav className="primary-nav" aria-label="주요 메뉴">{["제품", "렌탈", "기획전", "라이브", "고객지원"].map(item => <a key={item} href={`#${item}`}>{item}</a>)}</nav><div className="header-actions"><button aria-label="검색" onClick={() => setSearchOpen(!searchOpen)}>⌕</button><button aria-label="장바구니" onClick={() => notify(`장바구니에 ${cart}개가 담겨 있어요`)}>▢{cart > 0 && <em>{cart}</em>}</button><button aria-label="마이페이지" onClick={() => notify("로그인 기능은 준비 중이에요")}>○</button></div></div>{searchOpen && <div className="search-panel"><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="어떤 생활을 찾고 계세요?"/><button onClick={() => setSearchOpen(false)}>닫기</button></div>}</header>
    <section id="top" className="hero-section"><div className="hero-image"/><div className="hero-copy wrap"><p className="eyebrow">NEW LIVING COLLECTION</p><h1>생활의 기준을<br/>다시, 나답게.</h1><p>매일 쓰는 가전일수록 더 아름답고 편안하게.<br/>리빙온의 새로운 컬렉션을 만나보세요.</p><a className="dark-button" href="#제품">컬렉션 보기 <span>→</span></a><div className="hero-pages"><b>01</b><span/><small>03</small></div></div></section>
    <section className="quick wrap" aria-label="빠른 메뉴">{categories.map(([icon,label]) => <button key={label} onClick={() => chooseCategory(label)}><i>{icon}</i><span>{label}</span></button>)}</section>
    <section id="기획전" className="benefit-section wrap"><div className="section-heading"><div><p className="eyebrow">ONLY FOR YOU</p><h2>오늘, 놓치면 아쉬운 혜택</h2></div><a href="#제품">전체보기 →</a></div><div className="benefit-grid"><button className="benefit-card coral" onClick={() => notify("웰컴 쿠폰이 준비됐어요")}><small>WELCOME GIFT</small><strong>처음 만난 당신께<br/>10% 쿠폰 선물</strong><span>회원가입 즉시 발급 →</span><b>10<em>%</em></b></button><button className="benefit-card cream" onClick={() => notify("렌탈 혜택을 확인했어요")}><small>RENTAL BENEFIT</small><strong>부담은 가볍게<br/>케어는 오래도록</strong><span>렌탈료 첫 달 0원 →</span><div className="mini-appliance">●</div></button><button className="benefit-card charcoal" onClick={() => notify("라이브 알림을 신청했어요")}><small>LIVE PREVIEW · 20:00</small><strong>오늘 저녁,<br/>라이브 한정 특가</strong><span>알림 받기 →</span><div className="live-wave">◒</div></button></div></section>
    <section id="제품" className="products-section"><div className="wrap"><div className="section-heading product-heading"><div><p className="eyebrow">MOST LOVED</p><h2>지금 가장 사랑받는 제품</h2></div><div className="tabs">{["전체", "주방가전", "생활가전", "렌탈"].map(tab => <button className={activeCategory === tab ? "active" : ""} key={tab} onClick={() => setActiveCategory(tab)}>{tab}</button>)}</div></div><div className="product-grid">{visible.map((product,index) => { const discount = Math.round((1-product.price/product.originalPrice)*100); return <article className="product-card" key={product.id}><div className={`product-visual ${product.tone}`}><span className="rank">0{index+1}</span><span className="badge">{product.badge}</span><button aria-label="찜하기" className={liked.includes(product.id) ? "heart liked" : "heart"} onClick={() => setLiked(s => s.includes(product.id) ? s.filter(id => id !== product.id) : [...s,product.id])}>♥</button><div className="appliance"><i/><b/><em/></div></div><p className="category-label">{product.category}</p><h3>{product.name}</h3><small>{product.model}</small><div className="price"><b>{discount}%</b><strong>{product.price.toLocaleString()}원</strong><del>{product.originalPrice.toLocaleString()}원</del></div><button className="cart-button" onClick={() => {setCart(cart+1);notify(`${product.name}을 담았어요`);}}>장바구니 담기</button></article>})}</div>{visible.length === 0 && <div className="empty">찾으시는 제품이 없어요. 다른 검색어를 입력해 주세요.</div>}</div></section>
    <section id="렌탈" className="rental wrap"><div><p className="eyebrow">LIVING CARE</p><h2>사는 것보다,<br/>잘 쓰는 것이 중요하니까.</h2><p>설치부터 정기 케어까지 리빙 매니저가 함께합니다.</p><button onClick={() => notify("렌탈 상담을 시작할게요")}>나에게 맞는 렌탈 찾기 →</button></div><div className="rental-stats"><p><strong>0원</strong><span>초기 설치비</span></p><p><strong>12개월</strong><span>무상 케어</span></p><p><strong>24시간</strong><span>간편 상담</span></p></div></section>
    <footer><div className="wrap footer-grid"><div><a className="brand light" href="#top"><span>LIVING</span>ON<i>.</i></a><p>좋은 생활은 좋은 선택에서 시작됩니다.</p></div><div><b>고객센터 1588-2026</b><span>평일 09:00–18:00</span></div><div><a href="#">회사소개</a><a href="#">이용약관</a><a href="#">개인정보처리방침</a></div></div><div className="wrap copyright">© 2026 LIVINGON. Independent portfolio project.</div></footer>{toast && <div className="toast" role="status">{toast}</div>}
  </main>;
}
