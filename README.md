# FİLİSTİN GERİ DÖNÜŞ DERNEĞİ — Kurumsal İnternet Sitesi

İstanbul merkezli bir sivil toplum kuruluşu olan **FİLİSTİN GERİ DÖNÜŞ DERNEĞİ** için
geliştirilen kurumsal tanıtım sitesi. Mültecilerin, dezavantajlı grupların ve toplumsal
hayata katılımda güçlük yaşayan bireylerin yanında olan derneğin çalışma alanlarını,
kurumsal yapısını ve iletişim kanallarını tanıtır.

> 🌐 Dil: **Yalnızca Türkçe** &nbsp;•&nbsp; 🎨 Tema: **Yalnızca Açık (Light Mode)** &nbsp;•&nbsp; 🔒 Arama motoru arşivi: **Kapalı (noindex)**

---

## 📑 İçindekiler

1. [Teknoloji Yığını](#-teknoloji-yığını)
2. [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
3. [Proje Yapısı](#-proje-yapısı)
4. [Sayfalar ve Rotalar](#-sayfalar-ve-rotalar)
5. [Öne Çıkan Özellikler](#-öne-çıkan-özellikler)
6. [SEO ve Arşivleme Engeli](#-seo-ve-arşivleme-engeli)
7. [İçerik Yönetimi](#-içerik-yönetimi)
8. [Erişilebilirlik ve Performans](#-erişilebilirlik-ve-performans)
9. [Geliştirme Sürecinde Çözülen Sorunlar](#-geliştirme-sürecinde-çözülen-sorunlar-troubleshooting)
10. [Notlar ve Sonraki Adımlar](#-notlar-ve-sonraki-adımlar)

---

## 🧰 Teknoloji Yığını

| Katman | Teknoloji | Sürüm |
| --- | --- | --- |
| Kütüphane | [React](https://react.dev) | 19.x |
| Derleyici / Sunucu | [Vite](https://vite.dev) | 7.x |
| Yönlendirme | [React Router DOM](https://reactrouter.com) | 7.x |
| Stil | Saf CSS (CSS Değişkenleri / Custom Properties) | — |
| Tipografi | [Google Fonts](https://fonts.google.com) — **Poppins** (başlıklar) + **Inter** (metin) | — |
| Dil | JavaScript (ESM) + JSX | — |

Ek çalışma zamanı bağımlılığı kullanılmamıştır. Animasyonlar, akordeon ve giriş efektleri
tarayıcının yerel API'leri (`IntersectionObserver`, CSS geçişleri) ile yazılmıştır; bu sayede
paket boyutu küçük ve yükleme hızı yüksektir.

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- **Node.js** 18 veya üzeri (geliştirme sırasında Node 24 kullanılmıştır)
- **npm** 9 veya üzeri

### Adımlar

```bash
# 1) Bağımlılıkları yükleyin
npm install

# 2) Geliştirme sunucusunu başlatın (http://localhost:5173)
npm run dev

# 3) Üretim için derleyin (çıktı: dist/)
npm run build

# 4) Üretim derlemesini yerelde önizleyin
npm run preview
```

---

## 🗂 Proje Yapısı

```
FİLİSTİN GERİ DÖNÜŞ/
├── index.html                # Kök HTML — noindex meta + Google Fonts + favicon
├── vite.config.js            # Vite yapılandırması (kod bölme / manualChunks)
├── package.json
├── public/
│   ├── favicon.svg           # Dernek logosu (kırmızı amblem)
│   └── robots.txt            # Tüm botlar için "Disallow: /"
└── src/
    ├── main.jsx              # Uygulama girişi + BrowserRouter
    ├── App.jsx               # Rota tanımları + global düzen (Navbar/Footer)
    ├── index.css             # Tasarım sistemi + tüm bileşen stilleri
    ├── data/
    │   └── content.js        # TÜM Türkçe içerik (tek kaynak)
    ├── hooks/
    │   └── usePageMeta.js     # Sayfa başlığı + noindex meta yönetimi
    ├── components/
    │   ├── Navbar.jsx         # Sabit üst menü + mobil menü
    │   ├── Footer.jsx         # Sabit alt bilgi
    │   ├── ScrollToTop.jsx    # Rota değişiminde sayfayı başa alır
    │   ├── Reveal.jsx         # Görünürlükte yumuşak giriş animasyonu
    │   ├── Icon.jsx           # Çizgi tabanlı SVG ikon seti (tek kaynak)
    │   └── ui.jsx             # Ortak parçalar (SectionHead, CheckList, CtaBand…)
    └── pages/
        ├── Home.jsx           # Ana Sayfa
        ├── About.jsx          # Hakkımızda
        ├── WorkAreas.jsx      # Çalışma Alanlarımız
        ├── Contact.jsx        # İletişim (form + SSS)
        ├── Governance.jsx     # Yönetişim ve Şeffaflık
        ├── Privacy.jsx        # Gizlilik Politikası
        └── NotFound.jsx       # 404
```

---

## 🧭 Sayfalar ve Rotalar

| Sayfa | Rota | İçerik |
| --- | --- | --- |
| Ana Sayfa | `/` | Hero, Derneğimiz Hakkında, Çalışma Alanlarımız, Nasıl Çalışıyoruz, Kurumsal İş Birliği, İletişim çağrısı |
| Hakkımızda | `/hakkimizda` | Biz Kimiz, Misyon, Vizyon, Yaklaşım, Değerler, Yasal Statü |
| Çalışma Alanlarımız | `/calisma-alanlarimiz` | 4 çalışma alanı, Kurumsal İş Birliği, Faaliyet geliştirme süreci |
| İletişim | `/iletisim` | İletişim bilgileri, iletişim formu, Sıkça Sorulan Sorular |
| Yönetişim ve Şeffaflık | `/yonetisim-ve-seffaflik` | Yasal statü, kurumsal yapı, hesap verebilirlik, şeffaflık |
| Gizlilik Politikası | `/gizlilik-politikasi` | KVKK kapsamında 14 bölümlük politika metni |
| 404 | `*` | Bulunamayan sayfalar için yönlendirme |

**Ana Sayfa** yalnızca dokümanda "Ana Sayfa" başlığı altında yer alan bölümleri (Hero →
Footer arası) içerir. Diğer her bölüm kendi bağımsız rotasında ayrı bir sayfa olarak
kurgulanmıştır. **Navbar** ve **Footer** istisnasız tüm sayfalarda sabittir.

---

## ✨ Öne Çıkan Özellikler

- 🧱 **Bileşen tabanlı mimari** — tekrar kullanılabilir UI parçaları (`ui.jsx`)
- 📱 **Tam duyarlı / Mobile-First** — 980px, 720px ve 480px kırılma noktaları; masaüstü ve mobil tasarım tek bir sistemde birleşik
- 🍔 **Mobil menü** — hamburger aç/kapa, gövde kaydırma kilidi, rota değişiminde otomatik kapanma
- 🎬 **Giriş animasyonları** — `IntersectionObserver` ile bölümler görünür oldukça yumuşak açılır (`prefers-reduced-motion` desteğiyle)
- ❓ **SSS akordeonu** — erişilebilir (`aria-expanded`) aç/kapa davranışı
- ✉️ **İletişim formu** — alan doğrulaması, KVKK onay kutusu ve gönderim geri bildirimi
- 🎨 **Logo tabanlı kimlik** — kırmızı (`#CB2B1E`) marka rengi ve amblem, tüm arayüze yansıtılmıştır
- 🧩 **Profesyonel SVG ikon seti** — emoji yerine, tek bir `Icon` bileşeninde toplanan çizgi tabanlı, tutarlı kurumsal ikonlar (tonlu ikon kutuları içinde)
- ⬆️ **Otomatik başa dönüş** — her rota geçişinde sayfa en üste kaydırılır
- ♿ **"İçeriğe geç" bağlantısı** — klavye kullanıcıları için skip-link

---

## 🔒 SEO ve Arşivleme Engeli

Site **hiçbir arama motorunda arşivlenmeyecek** biçimde yapılandırılmıştır:

1. **`index.html`** içinde global meta etiketleri:
   ```html
   <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
   <meta name="googlebot" content="noindex, nofollow" />
   <meta name="bingbot" content="noindex, nofollow" />
   ```
2. **`public/robots.txt`** tüm botlara kapalıdır:
   ```
   User-agent: *
   Disallow: /
   ```
3. **`usePageMeta`** hook'u — Tek Sayfa Uygulaması (SPA) rota değişiminde tam sayfa yenilemesi
   olmadığından, her sayfa geçişinde `robots` meta etiketi yeniden doğrulanır. Böylece hiçbir
   rota, arşivleme engeli olmadan görüntülenemez.

---

## 📝 İçerik Yönetimi

Sitedeki tüm metinler tek bir dosyada toplanmıştır: **`src/data/content.js`**.

- İçerik, teslim edilen `fgd.org.tr.docx` dosyasına **birebir sadık** kalınarak aktarılmıştır.
- Metin güncellemek için bileşenlere dokunmadan yalnızca bu dosyayı düzenlemek yeterlidir.
- Kurumsal bilgiler (adres, e-posta, kütük numarası vb.) `org` nesnesinde merkezî olarak tutulur.

---

## ♿ Erişilebilirlik ve Performans

- **Anlamsal HTML** — `header`, `main`, `footer`, `nav`, `section`, `article` kullanımı
- **ARIA** — menü ve akordeon durumları `aria-expanded` / `aria-controls` ile bildirilir
- **Klavye desteği** — görünür odak halkaları (`:focus-visible`) ve skip-link
- **Kod bölme** — `react`, `react-dom`, `react-router-dom` ayrı bir `vendor` parçasına ayrılır
- **Hafif çıktı** — üretim CSS'i ~4 kB (gzip), toplam JS ~87 kB (gzip)
- **Font optimizasyonu** — `preconnect` ve `display=swap` ile hızlı metin gösterimi

---

## 🛠 Geliştirme Sürecinde Çözülen Sorunlar (Troubleshooting)

Aşağıdaki konular geliştirme ve kalite kontrol (QA) aşamasında tespit edilip giderilmiştir:

| # | Sorun / Risk | Çözüm |
| --- | --- | --- |
| 1 | **İçerik dışı ekleme riski** — Çalışma Alanlarımız sayfasının sonuna, dokümanda bulunmayan bir "iletişim çağrısı" bandı eklenmişti. | Doküman dışı bölüm kaldırıldı; sayfa, kaynak metindeki sıraya (Hero → 4 alan → Kurumsal İş Birliği → Süreç) birebir uygun hâle getirildi. |
| 2 | **Eksik buton** — Yönetişim sayfasındaki "Doğrulama Talepleri" bölümü dokümanda "Buton: Bize Ulaşın" ile bitiyordu. | Bölüm sonuna ilgili "Bize Ulaşın" butonu eklendi. |
| 3 | **SPA'da noindex kaybı** — React Router ile rota değişiminde `index.html` yeniden yüklenmediğinden meta etiketlerinin geçerliliği belirsizdi. | `usePageMeta` hook'u her rota geçişinde `robots` meta etiketini yeniden doğrulayacak biçimde yazıldı. |
| 4 | **Rota değişiminde kaydırma konumu** — Yeni sayfaya geçildiğinde tarayıcı eski kaydırma konumunu koruyabiliyordu. | `ScrollToTop` bileşeni eklendi; her `pathname` değişiminde sayfa en üste alınır. |
| 5 | **Mobil menü açıkken arka plan kayması** — Menü açıkken sayfa gövdesi kayabiliyordu. | Menü açıkken `body { overflow: hidden }` uygulanıp kapanışta geri alınacak biçimde `useEffect` ile yönetildi. |
| 6 | **Türkçe karakter tutarlılığı** — İ/ı, Ş, Ç, Ğ, Ö, Ü karakterlerinin doğru görüntülenmesi. | `<html lang="tr">`, UTF-8 kodlaması ve Türkçe glifleri kapsayan Google Fonts (Inter + Poppins) ile doğrulandı. |
| 7 | **Duyarlı ızgara taşması** — 4'lü kart ızgarasının küçük ekranlarda sıkışması. | Izgara, kırılma noktalarında sırasıyla 4 → 2 → 1 sütuna indirgendi; tüm görünümler tarayıcıda test edildi. |
| 8 | **Doğrudan rota erişimi** — `/iletisim` gibi alt rotaların doğrudan URL ile açılması. | Vite geliştirme sunucusunun SPA geri dönüş (history fallback) davranışı doğrulandı; tüm rotalar doğrudan açılabiliyor. |
| 9 | **Header öğeleri sıkışık** — Masaüstünde menü bağlantıları ve "Bize Ulaşın" butonu birbirine çok yakındı; buton alt satıra taşabiliyordu. | `.nav__menu` masaüstünde `display:flex` yapıldı; bağlantı ve buton aralıkları (`gap`) artırıldı, `white-space: nowrap` ile öğeler tek satırda ferah biçimde hizalandı. |
| 10 | **Emoji ağırlıklı görünüm** — İkonlar emoji ile veriliyordu; kurumsal bir sivil toplum kuruluşu için yeterince profesyonel durmuyordu. | Tüm emojiler kaldırılıp tek bir `Icon` bileşeninde toplanan, çizgi tabanlı ve tutarlı bir SVG ikon setiyle (tonlu ikon kutuları içinde) değiştirildi. |
| 11 | **Giriş animasyonunda güvenli varsayılan** — `IntersectionObserver` desteklenmezse veya öğe ilk yüklemede zaten görünürse içeriğin gizli kalma riski. | `Reveal` bileşeni; IO desteklenmiyorsa veya öğe mount anında görünür alandaysa içeriği doğrudan gösterecek biçimde güçlendirildi. |

> ✅ Kalite kontrol: Tüm rotalar, navigasyon ve footer bağlantıları, form, SSS akordeonu ve
> duyarlı düzen tarayıcıda tek tek test edilmiş; konsolda hata bulunmadığı doğrulanmıştır.

---

## 🧩 Notlar ve Sonraki Adımlar

- **İletişim formu** şu an istemci tarafında çalışır ve bir sunucu uç noktasına bağlı değildir.
  E-posta altyapısı belirlendiğinde `src/pages/Contact.jsx` içindeki `handleSubmit`
  fonksiyonu ilgili servise (ör. e-posta API'si) bağlanmalıdır.
- **Yayına alma:** Site statik olarak derlenir (`npm run build` → `dist/`). SPA yönlendirmesinin
  çalışması için sunucu, bilinmeyen yolları `index.html`'e yönlendirecek şekilde
  yapılandırılmalıdır (örn. Nginx `try_files`, Netlify/Vercel yeniden yazma kuralları).
- **Gizlilik Politikası** metni, dokümanda belirtildiği üzere; barındırma, e-posta altyapısı,
  analiz araçları ve çerez ayarları kesinleştikten sonra hukuki açıdan yeniden gözden geçirilmelidir.

---

© 2026 FİLİSTİN GERİ DÖNÜŞ DERNEĞİ. Tüm hakları saklıdır.
