"use client";

import { useState } from "react";
import { homeStories } from "../data/homeStories";

export default function HomeExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <main className="shell">
      <div className="paper" aria-hidden="true" />
      <section className="mobile-canvas">
        <header className="topbar">
          <a className="brand" href="#top"><span className="brand-mark">☼</span> 별빛재</a>
          <button className="menu-button" aria-label="메뉴 열기" onClick={() => setMenuOpen(true)}>☰</button>
        </header>

        <div id="top" className="hero">
          <div>
            <p className="eyebrow">오늘의 마음 날씨</p>
            <h1>당신의 오늘에<br /><em>작은 별빛</em>을<br />비춰드릴게요</h1>
            <p className="hero-copy">생일과 마음 한 조각이면 충분해요.<br />계절의 언어로 천천히 읽어드려요.</p>
          </div>
          <div className="bird-figure" role="img" aria-label="하늘로 날아오르는 푸른 새 수채화">
            <span className="bird-glow" aria-hidden="true" />
          </div>
        </div>

        <button className="signature-card" onClick={() => notify("별자리 여정이 곧 시작돼요") }>
          <span className="signature-label">SIGNATURE · 마음 별자리</span>
          <strong>나만의 별자리 지도</strong>
          <span>기질, 관계, 앞으로의 흐름을<br />한 장의 이야기로 만나보세요.</span>
          <span className="gold-button">지도 펼치기 · 1,200원 <b>→</b></span>
          <span className="constellation" aria-hidden="true">⌁ · ✦<br />· 〰</span>
        </button>

        <div className="section-title"><span>가볍게 먼저 · 무료</span></div>
        <div className="free-grid">
          <button className="free-card warm" onClick={() => notify("마음 유형을 준비하고 있어요") }>
            <span className="pill">요즘 인기</span><b>나는 어떤 계절일까?</b><small>3개의 질문으로 찾는 마음 유형</small><i>❋</i>
          </button>
          <button className="free-card" onClick={() => notify("인연 카드를 섞는 중이에요") }>
            <span className="pill pale">친구와 함께</span><b>우리 사이의 색은?</b><small>둘이 만드는 관계 팔레트</small><i>◒</i>
          </button>
        </div>

        <button className="daily" onClick={() => notify("오늘은 서두르지 않아도 좋은 날이에요") }>
          <span><small>오늘의 한 문장 · 무료</small><b>마음이 향하는 쪽으로 한 걸음</b></span><i>→</i>
        </button>

        <div className="section-title"><span>별빛재의 이야기</span></div>
        <div className="fortune-grid">
          {homeStories.map((item) => (
            <button key={item.id} className="fortune-card" onClick={() => notify(`${item.title} 이야기를 준비할게요`) }>
              <i>{item.icon}</i><span><b>{item.title}</b><small>{item.subtitle}</small></span><em>{item.price.toLocaleString()}원</em>
            </button>
          ))}
        </div>

        <aside className="promise">
          <span>☕</span><p><b>읽고 난 뒤에도 곁에 있을게요.</b><br />어려운 표현은 쉬운 말로 다시 설명해드려요.</p>
        </aside>

        <section className="story">
          <p className="eyebrow">별빛재가 지키는 것</p>
          <h2>크게 말하기보다<br />찬찬히 바라봅니다</h2>
          <div className="values">
            <p><span>01</span><b>근거 있는 해석</b><small>막연한 위로보다 맥락과 흐름을 함께 전합니다.</small></p>
            <p><span>02</span><b>당신의 선택을 존중</b><small>정답을 단정하지 않고 가능한 길을 보여드립니다.</small></p>
            <p><span>03</span><b>조용히 지키는 기록</b><small>소중한 이야기는 필요한 만큼만 안전하게 다룹니다.</small></p>
          </div>
        </section>

        <footer><b>별빛재</b><p>별과 계절의 언어로 만나는 나의 오늘</p><small>독립 제작된 UX 프로토타입 · © 2026 Byeolbitjae</small></footer>
      </section>

      <nav className="bottom-nav" aria-label="주요 메뉴">
        {[['home','⌂','홈'],['map','✦','별자리'],['daily','☼','오늘'],['saved','▣','보관함']].map(([id,icon,label]) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => { setActive(id); if (id !== 'home') notify(`${label} 화면은 프로토타입 준비 중이에요`); }}><i>{icon}</i><span>{label}</span></button>
        ))}
      </nav>

      <div className={`backdrop ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)} />
      <aside className={`drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button className="close" onClick={() => setMenuOpen(false)}>×</button>
        <p className="eyebrow">MY BYEOLBIT</p><h2>오늘도 반가워요</h2>
        <button className="login" onClick={() => notify("체험 로그인은 준비 중이에요")}>로그인하고 기록 이어보기</button>
        {['내 별자리 보관함','최근 본 이야기','알림 설정','서비스 안내','문의하기'].map((label, index) => <button className="drawer-link" key={label} onClick={() => notify(`${label} 메뉴를 선택했어요`)}><span>{['✦','◷','♢','○','?'][index]}</span>{label}<b>›</b></button>)}
      </aside>
      {toast && <div className="toast" role="status">{toast}</div>}
    </main>
  );
}
