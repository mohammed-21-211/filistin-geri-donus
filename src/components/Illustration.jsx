// =============================================================
// Marka temalı, tamamen vektörel (SVG) illüstrasyonlar.
// Dış görsel dosyasına ihtiyaç duymadan siteyi anlatan sahneler.
//   - "community"  : Bir arada duran, farklı bireyler (dayanışma / kapsayıcılık)
//   - "solidarity" : Kalbi saran eller (destek / insan onuru)
// =============================================================

export function CommunityScene({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 380"
      role="img"
      aria-label="Bir arada duran, farklı bireylerden oluşan bir topluluk"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arka plan güneşi / umut halkası */}
      <circle cx="240" cy="150" r="112" fill="#fdeceb" />
      <circle cx="240" cy="150" r="112" fill="none" stroke="#f9dcd9" strokeWidth="2" />
      <circle cx="240" cy="150" r="150" fill="none" stroke="#f9dcd9" strokeWidth="2" strokeDasharray="3 9" opacity="0.7" />

      {/* Zemin çizgisi */}
      <line x1="70" y1="300" x2="410" y2="300" stroke="#ddd4d0" strokeWidth="2.5" strokeLinecap="round" />

      {/* --- Bireyler (farklı boy ve renklerde) --- */}
      {/* Kişi 1 */}
      <g>
        <rect x="112" y="228" width="52" height="74" rx="24" fill="#a81f14" />
        <circle cx="138" cy="206" r="20" fill="#1c2530" />
      </g>
      {/* Kişi 2 (en uzun) */}
      <g>
        <rect x="176" y="196" width="56" height="106" rx="26" fill="#cb2b1e" />
        <circle cx="204" cy="172" r="22" fill="#445064" />
      </g>
      {/* Kişi 3 */}
      <g>
        <rect x="244" y="212" width="56" height="90" rx="26" fill="#1c2530" />
        <circle cx="272" cy="188" r="21" fill="#cb2b1e" />
      </g>
      {/* Kişi 4 */}
      <g>
        <rect x="312" y="234" width="50" height="68" rx="23" fill="#8a1810" />
        <circle cx="337" cy="212" r="19" fill="#445064" />
      </g>

      {/* Bağ / birliktelik kavisi */}
      <path
        d="M132 240 Q240 150 342 246"
        fill="none"
        stroke="#cb2b1e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 12"
        opacity="0.55"
      />
    </svg>
  )
}

export function SolidarityScene({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 380"
      role="img"
      aria-label="Bir kalbi koruyan iki el — destek ve insan onuru"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Yumuşak arka plan */}
      <circle cx="240" cy="180" r="120" fill="#fdeceb" />
      <circle cx="240" cy="180" r="158" fill="none" stroke="#f9dcd9" strokeWidth="2" strokeDasharray="3 9" opacity="0.7" />

      {/* Kalp */}
      <path
        d="M240 138
           C224 108 178 110 172 148
           C167 182 210 214 240 236
           C270 214 313 182 308 148
           C302 110 256 108 240 138 Z"
        fill="#cb2b1e"
      />
      <path
        d="M240 152 C230 134 206 136 202 156"
        fill="none"
        stroke="#fff"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Saran eller (basitleştirilmiş) */}
      <path
        d="M150 250
           q-8 -60 34 -84
           q10 -6 18 4
           q6 8 -2 16
           q-26 20 -20 64 Z"
        fill="#1c2530"
      />
      <path
        d="M330 250
           q8 -60 -34 -84
           q-10 -6 -18 4
           q-6 8 2 16
           q26 20 20 64 Z"
        fill="#445064"
      />

      {/* Yükselen ışınlar */}
      <g stroke="#cb2b1e" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <line x1="240" y1="70" x2="240" y2="52" />
        <line x1="196" y1="80" x2="188" y2="64" />
        <line x1="284" y1="80" x2="292" y2="64" />
      </g>
    </svg>
  )
}
