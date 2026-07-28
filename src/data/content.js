// =============================================================
// FİLİSTİN GERİ DÖNÜŞ DERNEĞİ - Tüm site içeriği (Türkçe)
// İçerik kaynağı: fgd.org.tr.docx dosyasına birebir sadık kalınmıştır.
// =============================================================

// --- Genel / Kurumsal bilgiler ---
export const org = {
  name: 'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ',
  shortName: 'FGD',
  email: 'info@fgd.org.tr',
  address:
    'İkitelli OSB Mahallesi 6. Cadde, Beyaz Tower Dış Kapı No: 1, İç Kapı No: 86 Başakşehir, İstanbul, Türkiye',
  registryNumber: '34-274-095',
  foundationDate: '4 Nisan 2022',
  legalIntro: 'İstanbul merkezli bir sivil toplum kuruluşudur.',
  copyright: '© 2026 FİLİSTİN GERİ DÖNÜŞ DERNEĞİ. Tüm hakları saklıdır.',
}

// --- Navigasyon (Header) ---
export const navLinks = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Çalışma Alanlarımız', to: '/calisma-alanlarimiz' },
  { label: 'İletişim', to: '/iletisim' },
]

// --- Footer ---
export const footer = {
  exploreTitle: 'Keşfedin',
  exploreLinks: [
    { label: 'Ana Sayfa', to: '/' },
    { label: 'Hakkımızda', to: '/hakkimizda' },
    { label: 'Çalışma Alanlarımız', to: '/calisma-alanlarimiz' },
    { label: 'İletişim', to: '/iletisim' },
  ],
  corporateTitle: 'Kurumsal',
  corporateLinks: [
    { label: 'Yönetişim ve Şeffaflık', to: '/yonetisim-ve-seffaflik' },
    { label: 'Gizlilik Politikası', to: '/gizlilik-politikasi' },
  ],
  legalTitle: 'Yasal Bilgiler',
}

// =============================================================
// ANA SAYFA
// =============================================================
export const home = {
  hero: {
    eyebrow: 'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ',
    title: 'Daha Güçlü Toplumlar için Mültecilerin Yanındayız',
    paragraphs: [
      'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ, mültecilerin, dezavantajlı grupların ve toplumsal hayata katılımda güçlük yaşayan bireylerin karşılaştığı sosyal ve ekonomik sorunlara odaklanan İstanbul merkezli bir sivil toplum kuruluşudur.',
      'Topluma dayalı çalışmalar, farkındalık projeleri, eğitim programları ve kurumsal iş birlikleri aracılığıyla bireylerin bilgiye, fırsatlara ve sosyal yaşama eşit ve güçlü biçimde erişmesini destekliyoruz.',
    ],
  },
  about: {
    eyebrow: 'Derneğimiz Hakkında',
    title: 'İhtiyaçları Dinleyen, Hayata Dokunan Bir Yaklaşım',
    paragraphs: [
      'Çalışmalarımızı, bireylerin yaşamın içinden doğan ihtiyaçlarını gözeterek şekillendiriyoruz.',
      'Sosyal katılım, bilgiye erişim, kişisel gelişim ve toplumsal uyum alanlarında faaliyet yürütüyor; benzer amaçlarla çalışan sivil toplum kuruluşları, eğitim kurumları ve kamu kuruluşlarıyla iş birliğine önem veriyoruz.',
    ],
  },
  workAreas: {
    eyebrow: 'Çalışma Alanlarımız',
    title: 'Hangi Alanlarda Çalışıyoruz?',
    items: [
      {
        icon: 'support',
        title: 'Mültecilere Yönelik Destek ve Sosyal Uyum',
        text: 'Mültecilerin günlük yaşamda karşılaştıkları zorlukları azaltmayı, mevcut imkânlara erişimlerini kolaylaştırmayı ve yaşadıkları topluma aktif katılımlarını güçlendirmeyi amaçlayan çalışmalar yürütüyoruz.',
      },
      {
        icon: 'education',
        title: 'Eğitim ve Gelişim',
        text: 'Bireylerin bilgi, beceri ve kişisel yetkinliklerini geliştirmeye yönelik eğitimler, atölyeler ve uygulamalı çalışmalar düzenliyoruz.',
      },
      {
        icon: 'community',
        title: 'Toplumsal Katılım',
        text: 'Farklı geçmişlerden gelen bireyler arasında iletişimi güçlendiren, gönüllülüğü teşvik eden ve yerel katılımı artıran faaliyetler geliştiriyoruz.',
      },
      {
        icon: 'rights',
        title: 'Farkındalık ve Hak Temelli Çalışmalar',
        text: 'Mültecilerin ve dezavantajlı grupların karşılaştığı sosyal, hukuki ve günlük sorunların daha iyi anlaşılmasına katkı sağlayan içerikler ve farkındalık çalışmaları hazırlıyoruz.',
      },
    ],
  },
  approach: {
    eyebrow: 'Nasıl Çalışıyoruz?',
    title: 'Sorumlu ve Gerçekçi Bir Çalışma Anlayışı',
    intro:
      'Her çalışmaya önce ihtiyaçları anlamaya çalışarak başlıyoruz. Faaliyetlerimizi ilgili kişi ve kurumlarla birlikte planlıyor, uygulanabilir çözümler geliştirmeye odaklanıyor ve elde edilen sonuçları düzenli olarak değerlendiriyoruz.',
    items: [
      {
        icon: 'target',
        title: 'İhtiyaca Dayalı',
        text: 'Çalışmalarımızı varsayımlar üzerinden değil, sahadaki gerçek ihtiyaçları dikkate alarak şekillendiriyoruz.',
      },
      {
        icon: 'collaboration',
        title: 'İş Birliğine Açık',
        text: 'Bilgi, deneyim ve uzmanlık paylaşımının daha etkili sonuçlar doğurduğuna inanıyoruz.',
      },
      {
        icon: 'transparency',
        title: 'Şeffaf ve Sorumlu',
        text: 'Faaliyetlerimizi açık bir iletişim anlayışıyla yürütüyor, kurumsal sorumluluk ve hesap verebilirlik ilkelerine önem veriyoruz.',
      },
    ],
  },
  collaboration: {
    eyebrow: 'Kurumsal İş Birliği',
    title: 'Ortak Çalışmalara Açığız',
    intro:
      'Benzer alanlarda faaliyet gösteren sivil toplum kuruluşları, eğitim kurumları, kamu kuruluşları ve mesleki ağlarla iş birliği geliştirmeye önem veriyoruz.',
    listTitle: 'Ortak çalışmalarımız şu alanları kapsayabilir:',
    list: [
      'Eğitim ve kapasite geliştirme',
      'Farkındalık çalışmaları',
      'Araştırma ve içerik üretimi',
      'Toplumsal katılım faaliyetleri',
      'Kurumsal bilgi ve deneyim paylaşımı',
    ],
  },
  cta: {
    eyebrow: 'Bizimle İletişime Geçin',
    title: 'Çalışmalarımız Hakkında Daha Fazla Bilgi Alın',
    text: 'Derneğimiz, çalışma alanlarımız veya kurumsal iş birliği imkânları hakkında bilgi almak için bizimle iletişime geçebilirsiniz.',
  },
}

// =============================================================
// HAKKIMIZDA
// =============================================================
export const about = {
  hero: {
    eyebrow: 'Hakkımızda',
    title: 'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ Hakkında',
    paragraphs: [
      'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ, mülteciler, dezavantajlı gruplar ve toplumsal hayata katılımda güçlük yaşayan bireylerle çalışan İstanbul merkezli bir sivil toplum kuruluşudur.',
      'Çalışmalarımız; sosyal uyum, farkındalık, kişisel gelişim ve bireyler, topluluklar ile kurumlar arasındaki etkileşimin güçlendirilmesine odaklanmaktadır.',
    ],
  },
  whoWeAre: {
    eyebrow: 'Biz Kimiz?',
    title: 'Toplumu Odağına Alan Bir Sivil Toplum Kuruluşu',
    paragraphs: [
      'Derneğimiz, toplumsal ihtiyaçlara uygulanabilir, sorumlu ve toplum temelli çalışmalarla yanıt vermek amacıyla kurulmuştur.',
      'Tek tip bir yaklaşım benimsemek yerine, faaliyetlerimizi birlikte çalıştığımız kişi ve toplulukların ihtiyaçlarına göre şekillendiriyoruz. Bu sayede değişen koşullara uyum sağlayan, gerçekçi ve sahayla bağlantılı çalışmalar geliştirebiliyoruz.',
      'Aynı zamanda benzer alanlarda faaliyet gösteren sivil toplum kuruluşları, eğitim kurumları, kamu kuruluşları ve mesleki ağlarla iş birliğine önem veriyoruz.',
    ],
  },
  missionVision: [
    {
      icon: 'target',
      eyebrow: 'Misyonumuz',
      title: 'Katılım ve Fırsatlara Erişimi Güçlendirmek',
      paragraphs: [
        'Misyonumuz; mültecilerin ve dezavantajlı grupların bilgiye erişimini kolaylaştırmak, pratik becerilerini geliştirmelerine katkı sunmak, toplumsal hayata daha aktif katılmalarını desteklemek ve yaşadıkları çevreyle daha güçlü bağlar kurmalarına yardımcı olmaktır.',
        'Bu doğrultuda farkındalık çalışmaları, eğitim programları, kapasite geliştirme faaliyetleri, toplumsal katılım çalışmaları ve kurumsal iş birlikleri yürütüyoruz.',
      ],
    },
    {
      icon: 'vision',
      eyebrow: 'Vizyonumuz',
      title: 'Daha Kapsayıcı ve Birbirine Bağlı Toplumlar',
      paragraphs: [
        'Farklı geçmişlerden gelen bireylerin fırsatlara eşit biçimde erişebildiği, topluma katkı sunabildiği ve toplumsal yaşama aktif olarak katılabildiği daha kapsayıcı bir toplum hedefliyoruz.',
        'Uzun vadede katılım, ortak sorumluluk ve karşılıklı anlayış kültürünün güçlenmesine katkı sunmayı amaçlıyoruz.',
      ],
    },
  ],
  methodology: {
    eyebrow: 'Yaklaşımımız',
    title: 'Uygulanabilir, Sorumlu ve Gerçek İhtiyaçlara Dayalı',
    intro:
      'Çalışmalarımızı, ele aldığımız sorunları ve ilgili toplumsal bağlamı doğru anlamaya dayalı bir yaklaşımla yürütüyoruz.',
    items: [
      {
        step: '01',
        title: 'Önce Dinliyoruz',
        text: 'Çalışmaya başlamadan önce gerçek ihtiyaçları belirliyor ve doğrudan etkilenen kişilerin deneyimlerini anlamaya odaklanıyoruz.',
      },
      {
        step: '02',
        title: 'Birlikte Çalışıyoruz',
        text: 'Çalışmanın niteliğini artıracağı durumlarda ilgili kurumları, uzmanları ve topluluk üyelerini sürece dahil ediyoruz.',
      },
      {
        step: '03',
        title: 'Uygulanabilir Çözümler Geliştiriyoruz',
        text: 'Sorumlu biçimde hayata geçirilebilecek, gerçekçi ve bulunduğu koşullara uyarlanabilir faaliyetlere odaklanıyoruz.',
      },
      {
        step: '04',
        title: 'Çalışmalarımızı Değerlendiriyoruz',
        text: 'Yürüttüğümüz faaliyetleri gözden geçiriyor, elde ettiğimiz deneyimleri gelecek çalışmalarımızın planlanmasında kullanıyoruz.',
      },
    ],
  },
  values: {
    eyebrow: 'Değerlerimiz',
    title: 'Çalışmalarımıza Yön Veren İlkeler',
    items: [
      {
        icon: 'dignity',
        title: 'İnsan Onuru',
        text: 'Her bireye saygıyla yaklaşır, toplum içinde onurlu ve eşit biçimde yer alma hakkını gözetiriz.',
      },
      {
        icon: 'inclusion',
        title: 'Kapsayıcılık',
        text: 'Fırsatların farklı geçmiş ve koşullara sahip bireyler için erişilebilir olması gerektiğine inanırız.',
      },
      {
        icon: 'responsibility',
        title: 'Sorumluluk',
        text: 'Faaliyetlerimizi özenle planlar, kalite, ihtiyaçlara uygunluk ve hesap verebilirlik ilkelerini gözetiriz.',
      },
      {
        icon: 'transparency',
        title: 'Şeffaflık',
        text: 'Amacımız, faaliyetlerimiz ve kurumsal sorumluluklarımız hakkında açık ve anlaşılır bir iletişim yürütürüz.',
      },
      {
        icon: 'collaboration',
        title: 'İş Birliği',
        text: 'Kalıcı ve anlamlı gelişimin bilgi paylaşımı, kurumsal iş birliği ve toplumsal katılımla mümkün olduğuna inanırız.',
      },
    ],
  },
  legalStatus: {
    eyebrow: 'Yasal Statümüz',
    title: 'Türkiye’de Kayıtlı Bir Dernek',
    intro:
      'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ, merkezi İstanbul’da bulunan ve Türkiye’de resmi olarak kayıtlı bir dernektir.',
    facts: [
      { label: 'Yasal Unvan', value: 'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ' },
      { label: 'Kütük Numarası', value: '34-274-095' },
      { label: 'Kuruluş Tarihi', value: '4 Nisan 2022' },
      { label: 'Merkez', value: 'İstanbul, Türkiye' },
      { label: 'Kayıtlı Faaliyet Alanı', value: 'İnsani Yardım Dernekleri' },
      { label: 'Alt Faaliyet Türü', value: 'İhtiyaç Sahiplerine Yardım' },
    ],
    footnote:
      'Dernek, Türkiye’de sivil toplum kuruluşlarına ilişkin yürürlükteki mevzuat ve düzenlemelere uygun olarak faaliyet göstermektedir.',
  },
}

// =============================================================
// ÇALIŞMA ALANLARIMIZ
// =============================================================
export const workAreas = {
  hero: {
    eyebrow: 'Çalışma Alanlarımız',
    title: 'Çalışma Alanlarımız',
    paragraphs: [
      'Mültecilerin, dezavantajlı grupların ve toplumsal hayata katılımda güçlük yaşayan bireylerin günlük yaşamda karşılaştığı sorunlara yönelik, uygulanabilir ve toplum temelli çalışmalar geliştiriyoruz.',
      'Faaliyetlerimiz; bilgiye erişim, sosyal uyum, öğrenme imkânları ve bireyler, topluluklar ile kurumlar arasındaki etkileşimin güçlendirilmesi üzerine odaklanır.',
    ],
  },
  sections: [
    {
      icon: 'support',
      eyebrow: 'Mültecilere Yönelik Destek ve Sosyal Uyum',
      title: 'Günlük Hayata Katılımı Güçlendirmek',
      paragraphs: [
        'Mültecilerin kendilerine sunulan hizmetleri, imkânları ve başvuru yollarını daha iyi tanımalarına katkı sağlayan çalışmalar yürütüyoruz.',
        'Faaliyetlerimiz, güvenilir bilgiye erişimi kolaylaştırmayı, sosyal katılımı desteklemeyi ve bireylerin yaşadıkları çevreyle daha güçlü bağlar kurmasına yardımcı olmayı amaçlar.',
      ],
      listTitle: 'Bu kapsamda şu çalışmalar yürütülebilir:',
      list: [
        'Bilgilendirme ve farkındalık faaliyetleri',
        'Toplumsal uyum oturumları',
        'Yerel katılımı destekleyen çalışmalar',
        'İlgili kurum ve hizmetlere yönlendirme',
        'Günlük yaşama uyumu kolaylaştıran içerik ve etkinlikler',
      ],
    },
    {
      icon: 'education',
      eyebrow: 'Eğitim ve Kapasite Geliştirme',
      title: 'Bilgi ve Uygulama Becerilerini Geliştirmek',
      paragraphs: [
        'Bireylerin bilgi birikimini, özgüvenini ve günlük yaşamda ihtiyaç duyduğu becerileri güçlendirmeye yönelik eğitimler, atölyeler ve öğrenme faaliyetleri düzenliyoruz.',
      ],
      listTitle: 'Çalışmalarımız şu başlıkları kapsayabilir:',
      list: [
        'Kişisel ve mesleki gelişim',
        'Dijital ve iletişim becerileri',
        'Haklar ve sorumluluklar',
        'Toplumsal liderlik',
        'Kurumsal Gelişim',
      ],
      footnote:
        'Her faaliyet, katılımcıların ihtiyaçları ve çalışmanın yürütüldüğü bağlam dikkate alınarak planlanır.',
    },
    {
      icon: 'community',
      eyebrow: 'Toplumsal Katılım',
      title: 'Katılım ve Diyalog İçin Alan Açmak',
      paragraphs: [
        'İnsanları bir araya getiren, iletişimi güçlendiren ve toplumsal hayata katılımı teşvik eden çalışmalar yürütüyoruz.',
      ],
      listTitle: 'Bu alandaki faaliyetler şunları kapsayabilir:',
      list: [
        'Topluluk buluşmaları ve istişare oturumları',
        'Gönüllülük faaliyetleri',
        'Kültürel ve sosyal etkinlikler',
        'Yerel katılım çalışmaları',
        'Farklı gruplar arasındaki iletişimi güçlendiren faaliyetler',
      ],
      footnote:
        'Amacımız, bireylerin yalnızca katılımcı değil, aynı zamanda sürece katkı sunan aktif paydaşlar olmasını desteklemektir.',
    },
    {
      icon: 'rights',
      eyebrow: 'Farkındalık ve Hak Temelli Çalışmalar',
      title: 'Bilgiyi Açık ve Erişilebilir Hale Getirmek',
      paragraphs: [
        'Mültecileri ve dezavantajlı grupları etkileyen sosyal, hukuki ve günlük yaşamla ilgili konular hakkında farkındalık çalışmaları ve bilgilendirici içerikler hazırlıyoruz.',
      ],
      listTitle: 'Bu kapsamda şu çalışmalar yürütülebilir:',
      list: [
        'Farkındalık kampanyaları',
        'Kamuya açık bilgilendirme materyalleri',
        'Eğitici içerikler',
        'Seminerler ve tartışma oturumları',
        'Araştırma ve bilgi paylaşımı faaliyetleri',
      ],
      footnote:
        'Bilgiyi anlaşılır, sorumlu ve erişilebilir bir dille sunmaya önem veriyoruz.',
    },
  ],
  collaboration: {
    eyebrow: 'Kurumsal İş Birliği',
    title: 'İlgili Kurumlarla Birlikte Çalışmak',
    intro:
      'Benzer alanlarda çalışan sivil toplum kuruluşları, eğitim kurumları, kamu kuruluşları, mesleki ağlar ve diğer ilgili yapılarla iş birliği geliştiriyoruz.',
    listTitle: 'İş birlikleri şu alanları kapsayabilir:',
    list: [
      'Ortak faaliyetler ve programlar',
      'Eğitim ve kapasite geliştirme',
      'Araştırma ve içerik geliştirme',
      'Toplumsal katılım çalışmaları',
      'Bilgi ve deneyim paylaşımı',
    ],
  },
  process: {
    eyebrow: 'Faaliyetlerimizi Nasıl Geliştiriyoruz?',
    title: 'İhtiyaçtan Uygulamaya',
    intro:
      'Faaliyetlerimizi açık, gerçekçi ve sorumlu bir süreç üzerinden geliştiriyoruz.',
    items: [
      {
        step: '01',
        title: 'İhtiyacı Anlıyoruz',
        text: 'Öncelikle ilgili kişileri, karşılaşılan sorunları ve yerel koşulları anlamaya odaklanıyoruz.',
      },
      {
        step: '02',
        title: 'Çalışmayı Planlıyoruz',
        text: 'Her faaliyet için açık hedefler, uygun yöntemler ve ulaşılabilir sonuçlar belirliyoruz.',
      },
      {
        step: '03',
        title: 'Doğru Paydaşlarla Çalışıyoruz',
        text: 'Gerekli olduğunda ilgili uzmanları, kurumları ve topluluk üyelerini sürece dahil ediyoruz.',
      },
      {
        step: '04',
        title: 'Sonuçları Değerlendiriyoruz',
        text: 'Faaliyetleri gözden geçiriyor ve edindiğimiz deneyimleri gelecek çalışmaların geliştirilmesinde kullanıyoruz.',
      },
    ],
  },
}

// =============================================================
// İLETİŞİM
// =============================================================
export const contact = {
  hero: {
    eyebrow: 'İletişim',
    title: 'Bize Ulaşın',
    paragraphs: [
      'Derneğimiz, çalışma alanlarımız veya kurumsal bilgilerimiz hakkında bize ulaşmak için aşağıdaki iletişim formunu ya da e-posta adresimizi kullanabilirsiniz.',
      'Mesajınızı inceleyerek mümkün olan en kısa sürede yanıtlamaya çalışıyoruz.',
    ],
  },
  info: {
    eyebrow: 'İletişim Bilgileri',
    title: 'İletişime Geçin',
  },
  form: {
    eyebrow: 'İletişim Formu',
    title: 'Bize Mesaj Gönderin',
    intro:
      'Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Paylaştığınız bilgiler yalnızca mesajınızı değerlendirmek ve size yanıt vermek amacıyla kullanılacaktır.',
    fields: {
      name: 'Ad Soyad',
      email: 'E-posta Adresi',
      organization: 'Kurum Adı',
      subject: 'Konu',
      message: 'Mesaj',
    },
    consent:
      'Gizlilik Politikası’nı okudum ve kişisel verilerimin talebime yanıt verilmesi amacıyla işlenmesini kabul ediyorum.',
    submit: 'Mesaj Gönder',
  },
  faq: {
    eyebrow: 'Sıkça Sorulan Sorular',
    title: 'Merak Edilenler',
    items: [
      {
        q: 'Dernek hangi alanlarda çalışıyor?',
        a: 'Çalışmalarımız; mülteciler, dezavantajlı gruplar, sosyal uyum, farkındalık, kapasite geliştirme ve toplumsal katılım alanlarına odaklanmaktadır.',
      },
      {
        q: 'Dernek doğrudan maddi destek sağlıyor mu?',
        a: 'Hayır. Derneğimiz doğrudan maddi destek sağlamamakta ve internet sitesi üzerinden bağış toplamamaktadır.',
      },
      {
        q: 'Kurumlar iş birliği için sizinle iletişime geçebilir mi?',
        a: 'Evet. Sivil toplum kuruluşları, eğitim kurumları, kamu kuruluşları ve ilgili diğer kurumlar olası iş birliği alanları hakkında bizimle iletişime geçebilir.',
      },
      {
        q: 'Bireyler faaliyetlerinize katılabilir mi?',
        a: 'Katılım koşulları, her faaliyetin içeriğine, amacına ve hedef kitlesine göre değişir. Gerekli bilgiler faaliyet duyurularında paylaşılır.',
      },
      {
        q: 'Dernek nerede bulunuyor?',
        a: 'Derneğimiz İstanbul’da kayıtlıdır ve faaliyetlerini İstanbul merkezli olarak yürütmektedir.',
      },
      {
        q: 'Resmî kurumsal bilgi veya belge nasıl talep edilebilir?',
        a: 'Talebinizi iletişim formu veya e-posta yoluyla iletebilirsiniz. Mesajınızda kurum adınızı ve ihtiyaç duyduğunuz bilgiyi açıkça belirtmeniz yeterlidir.',
      },
    ],
  },
}

// =============================================================
// YÖNETİŞİM VE ŞEFFAFLIK
// =============================================================
export const governance = {
  hero: {
    eyebrow: 'Yönetişim ve Şeffaflık',
    title: 'Yönetişim ve Şeffaflık',
    paragraphs: [
      'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ, faaliyetlerini sorumlu yönetim, açık kurumsal süreçler ve Türkiye’de dernekler için geçerli yasal yükümlülükler doğrultusunda yürütür.',
      'Bu sayfada derneğin yasal statüsü, kurumsal yapısı ve hesap verebilirlik yaklaşımı hakkında genel bilgiler yer almaktadır.',
    ],
  },
  legalStatus: {
    eyebrow: 'Yasal Statü',
    title: 'Türkiye’de Kayıtlı Bir Dernek',
    intro:
      'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ, merkezi İstanbul’da bulunan ve Türkiye’de resmi olarak kayıtlı bir dernektir.',
    facts: [
      { label: 'Yasal Unvan', value: 'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ' },
      { label: 'Kütük Numarası', value: '34-274-095' },
      { label: 'Kuruluş Tarihi', value: '4 Nisan 2022' },
      { label: 'Merkez', value: 'İstanbul, Türkiye' },
      { label: 'Kayıtlı Faaliyet Alanı', value: 'İnsani Yardım Dernekleri' },
      { label: 'Alt Faaliyet Türü', value: 'İhtiyaç Sahiplerine Yardım' },
    ],
    footnote:
      'Dernek, faaliyetlerini tüzüğü ve Türkiye’de dernekler için geçerli mevzuat çerçevesinde yürütür.',
  },
  blocks: [
    {
      icon: 'institution',
      eyebrow: 'Kurumsal Yapı',
      title: 'Açık Görev ve Sorumluluklar',
      intro:
        'Dernek, tüzüğünde ve yürürlükteki mevzuatta tanımlanan yetkili organlar aracılığıyla yönetilir.',
      listTitle: 'Kurumsal yapı şu organlardan oluşur:',
      list: [
        'Genel Kurul',
        'Yönetim Kurulu',
        'Denetim Kurulu',
        'İhtiyaç halinde oluşturulan komisyonlar veya çalışma grupları',
      ],
      footnote:
        'Her organ, görev ve sorumluluklarını dernek tüzüğü ve ilgili mevzuat kapsamında yerine getirir.',
    },
    {
      icon: 'decision',
      eyebrow: 'Karar Alma Süreci',
      title: 'Sorumlu Kurumsal Yönetim',
      intro: 'Kurumsal kararlar, derneğin yetkili organları tarafından alınır.',
      paragraphs: [
        'Faaliyetler; derneğin amacı, mevcut kapasitesi, yasal sorumlulukları ve çalışma alanlarında tespit edilen ihtiyaçlar doğrultusunda planlanır ve değerlendirilir.',
        'Gerekli görüldüğünde planlama sürecinde ilgili uzmanların, kurumların ve topluluk temsilcilerinin görüşlerine başvurulabilir.',
      ],
    },
    {
      icon: 'accountability',
      eyebrow: 'Hesap Verebilirlik',
      title: 'Sorumlu Yönetim ve Kayıt Düzeni',
      intro:
        'Dernek, Türkiye’de yürürlükte olan mevzuat kapsamında gerekli idari ve mali kayıtları düzenli olarak tutar.',
      listTitle: 'Hesap verebilirlik yaklaşımımız şunları kapsar:',
      list: [
        'Kurumsal kayıtların doğru ve düzenli tutulması',
        'Resmî kararların kayıt altına alınması',
        'Faaliyetlerin yetkili süreçler üzerinden yürütülmesi',
        'Yasal bildirim ve raporlama yükümlülüklerinin yerine getirilmesi',
        'Faaliyetlerin ve kurumsal süreçlerin gözden geçirilmesi',
      ],
      footnote:
        'Yasal olarak uygun olduğu durumlarda, resmî bilgiler yetkili kurumlarla veya uygun kuruluşlarla paylaşılabilir.',
    },
    {
      icon: 'transparency',
      eyebrow: 'Şeffaflık',
      title: 'Açık ve Doğru Bilgilendirme',
      paragraphs: [
        'Derneğin amacı, faaliyetleri ve çalışma alanları hakkında doğru ve güncel bilgi sunmaya önem veriyoruz.',
        'Doğrulanmamış verilere, abartılı ifadelere veya faaliyetlerin kapsamı ve sonuçları hakkında yanıltıcı bir izlenim oluşturabilecek bilgilere yer vermiyoruz.',
        'İnternet sitesinde yayımlanan içerikler ihtiyaç halinde gözden geçirilir ve güncellenir.',
      ],
    },
    {
      icon: 'policy',
      eyebrow: 'Politikalar ve Uyum',
      title: 'Açık Bir Kurumsal Çerçeve',
      intro:
        'Dernek faaliyetleri; tüzük, yetkili organların kararları ve yürürlükteki yasal düzenlemeler doğrultusunda yürütülür.',
      listTitle: 'İlgili politika ve süreçler şu konuları kapsayabilir:',
      list: [
        'Kişisel verilerin korunması',
        'Kayıt ve belge yönetimi',
        'Çıkar çatışmalarının önlenmesi',
        'Kurumsal iletişim',
        'Faaliyetlerin planlanması ve onaylanması',
        'Yasal ve idari yükümlülüklere uyum',
      ],
    },
    {
      icon: 'verify',
      eyebrow: 'Doğrulama Talepleri',
      title: 'Resmî Kurumsal Bilgiler',
      intro:
        'Derneğin yasal statüsü veya kurumsal bilgileri hakkında doğrulama talep eden kurumlar bizimle e-posta yoluyla iletişime geçebilir.',
      listTitle: 'Taleplerde şu bilgilerin yer alması gerekir:',
      list: [
        'Talepte bulunan kurumun adı',
        'Talebin amacı',
        'İstenen bilgi veya belgenin açık tanımı',
      ],
    },
  ],
}

// =============================================================
// GİZLİLİK POLİTİKASI
// =============================================================
export const privacy = {
  eyebrow: 'Gizlilik Politikası',
  title: 'Gizlilik Politikası',
  lastUpdated: 'Son Güncelleme: 01/01/2026',
  intro: [
    'Bu Gizlilik Politikası, FİLİSTİN GERİ DÖNÜŞ DERNEĞİ tarafından fgd.org.tr üzerinden elde edilen kişisel verilerin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.',
    'Dernek, kişisel verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve yürürlükteki diğer ilgili mevzuat çerçevesinde işler.',
  ],
  sections: [
    {
      title: '1. Veri Sorumlusu',
      paragraphs: [
        'Bu internet sitesi üzerinden işlenen kişisel veriler bakımından veri sorumlusu:',
        'FİLİSTİN GERİ DÖNÜŞ DERNEĞİ Kütük Numarası: 34-274-095 Başakşehir, İstanbul, Türkiye E-posta: info@fgd.org.tr',
      ],
    },
    {
      title: '2. İşlenen Kişisel Veriler',
      paragraphs: [
        'İnternet sitesini kullanmanız veya bizimle iletişime geçmeniz halinde aşağıdaki kişisel veriler işlenebilir:',
      ],
      list: [
        'Ad ve soyad',
        'E-posta adresi',
        'Paylaşılması halinde kurum adı',
        'Mesaj konusu ve içeriği',
        'Yazışmalar sırasında tarafınızca iletilen diğer bilgiler',
        'IP adresi, tarayıcı türü, cihaz bilgileri ve internet sitesi kullanım verileri',
        'Kullanılması halinde çerez tercihleri',
      ],
      footnote:
        'İletişim formu üzerinden, talebiniz açısından zorunlu olmadıkça özel nitelikli kişisel verilerinizi paylaşmamanızı rica ederiz.',
    },
    {
      title: '3. Kişisel Verilerin Toplanma Yöntemleri',
      paragraphs: ['Kişisel verileriniz aşağıdaki kanallar aracılığıyla toplanabilir:'],
      list: [
        'İnternet sitesindeki iletişim formu',
        'E-posta yazışmaları',
        'Çerezler ve benzeri teknolojiler',
        'İnternet sitesine erişim sırasında oluşan teknik kayıtlar',
        'Dernekle doğrudan kurulan iletişim',
      ],
    },
    {
      title: '4. Kişisel Verilerin İşlenme Amaçları',
      paragraphs: ['Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:'],
      list: [
        'İletilen soru ve taleplerin değerlendirilmesi',
        'Mesajlara yanıt verilmesi',
        'Talep edilen kurumsal bilgilerin sağlanması',
        'Kurumsal iletişim süreçlerinin yürütülmesi',
        'Olası iş birliği taleplerinin değerlendirilmesi',
        'İnternet sitesinin güvenliğinin ve işleyişinin sağlanması',
        'Yasal, idari ve kayıt tutmaya ilişkin yükümlülüklerin yerine getirilmesi',
        'Derneğin hukuki hak ve menfaatlerinin korunması',
      ],
      footnote:
        'İnternet sitesi üzerinden paylaşılan kişisel veriler, bağış toplama veya bağış iletişimi amacıyla kullanılmaz.',
    },
    {
      title: '5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri',
      paragraphs: [
        'Kişisel verileriniz, durumun niteliğine göre aşağıdaki hukuki sebeplere dayanılarak işlenebilir:',
      ],
      list: [
        'Tarafınızca iletilen bir talebin değerlendirilmesi veya yanıtlanması için veri işlemenin gerekli olması',
        'Derneğin hukuki yükümlülüklerini yerine getirebilmesi',
        'Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması',
        'Temel hak ve özgürlüklerinize zarar vermemek kaydıyla derneğin meşru menfaatleri için veri işlemenin gerekli olması',
        'Mevzuatın açık rıza gerektirdiği durumlarda açık rızanızın bulunması',
      ],
      footnote:
        'Kişisel verilerin işlenmesine ilişkin bilgilendirme, işlemenin açık rızaya veya başka bir hukuki sebebe dayanmasına bakılmaksızın yapılır.',
    },
    {
      title: '6. Kişisel Verilerin Aktarılması',
      paragraphs: [
        'Kişisel verileriniz, gerekli olması ve mevzuatın izin vermesi halinde aşağıdaki taraflarla paylaşılabilir:',
      ],
      list: [
        'İnternet sitesi barındırma ve teknik hizmet sağlayıcıları',
        'E-posta ve iletişim altyapısı sağlayıcıları',
        'Hukuki veya teknik danışmanlar',
        'Yetkili kamu kurum ve kuruluşları',
        'Adli ve idari makamlar',
        'İnternet sitesinin güvenliğini ve işleyişini destekleyen hizmet sağlayıcılar',
      ],
      footnote:
        'Kişisel veriler yalnızca ilgili amaç için gerekli olduğu ölçüde ve uygun idari ve teknik tedbirler alınarak aktarılır.',
    },
    {
      title: '7. Yurt Dışına Veri Aktarımı',
      paragraphs: [
        'İnternet sitesinin çalışması için kullanılan bazı teknoloji hizmetleri, kişisel verilerin Türkiye dışında bulunan sistemlerde işlenmesine veya saklanmasına neden olabilir.',
        'Yurt dışına veri aktarımının söz konusu olduğu durumlarda, yürürlükteki kişisel verilerin korunması mevzuatında öngörülen şartlar ve güvenceler uygulanır.',
        'Bu bölüm; internet sitesinin barındırma hizmeti, e-posta altyapısı, iletişim formu, analiz araçları ve çerez ayarları kesinleştirildikten sonra güncellenmelidir.',
      ],
    },
    {
      title: '8. Kişisel Verilerin Saklanma Süresi',
      paragraphs: [
        'Kişisel veriler, toplandıkları amaç için gerekli olan süre boyunca veya mevzuatta öngörülen yasal saklama süreleri çerçevesinde muhafaza edilir.',
        'İşleme amacı veya yasal saklama süresi sona erdiğinde kişisel veriler, ilgili mevzuat ve derneğin uygulamaları doğrultusunda silinir, yok edilir veya anonim hale getirilir.',
      ],
    },
    {
      title: '9. Veri Güvenliği',
      paragraphs: [
        'Kişisel verilerin korunması amacıyla makul idari ve teknik tedbirler alınır.',
        'Bu tedbirler kişisel verilerin:',
      ],
      list: [
        'Yetkisiz erişime uğramasını',
        'Hukuka aykırı olarak işlenmesini',
        'Kaybolmasını',
        'Değiştirilmesini',
        'Yetkisiz şekilde açıklanmasını',
        'Zarar görmesini veya yok edilmesini',
      ],
      footnote:
        'önlemeye yöneliktir. Bununla birlikte hiçbir çevrim içi sistemin mutlak güvenlik sağlayamayacağı unutulmamalıdır. Bu nedenle internet sitesi üzerinden gerekli olmayan veya yüksek derecede hassas bilgilerin paylaşılmaması tavsiye edilir.',
    },
    {
      title: '10. Çerezler',
      paragraphs: [
        'İnternet sitesi, güvenli ve doğru şekilde çalışabilmesi için zorunlu çerezler kullanabilir.',
        'Analiz veya performans çerezleri gibi zorunlu olmayan çerezler, gerekli bilgilendirme ve izin mekanizmaları sağlandıktan sonra kullanılabilir.',
        'Zorunlu olmayan çerezlerin kullanılması halinde, ayrıca bir Çerez Politikası veya çerez bilgilendirme metni yayımlanabilir.',
      ],
    },
    {
      title: '11. Kişisel Verilerinize İlişkin Haklarınız',
      paragraphs: [
        'KVKK’nın 11. maddesi kapsamında aşağıdaki haklara sahip olabilirsiniz:',
      ],
      list: [
        'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
        'Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme',
        'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
        'Kişisel verilerin aktarıldığı üçüncü kişileri öğrenme',
        'Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme',
        'Yasal şartların oluşması halinde kişisel verilerin silinmesini veya yok edilmesini isteme',
        'Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme',
        'İşlenen verilerin yalnızca otomatik sistemler aracılığıyla analiz edilmesi sonucunda aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
        'Kişisel verilerin hukuka aykırı işlenmesi nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme',
      ],
    },
    {
      title: '12. Başvuru Yöntemi',
      paragraphs: [
        'Kişisel verilerinizle ilgili taleplerinizi aşağıdaki e-posta adresine iletebilirsiniz:',
        'E-posta: info@fgd.org.tr',
        'Başvurunuzda aşağıdaki bilgilere yer vermeniz gerekir:',
      ],
      list: [
        'Kullanmak istediğiniz hak',
        'Talebinizin ilgili olduğu kişisel veriler',
        'Kayıtlarınıza ulaşmamızı kolaylaştıracak açıklayıcı bilgiler',
      ],
      footnote:
        'Kimliğinizin doğrulanması ve kişisel verilerin yetkisiz kişilere açıklanmasının önlenmesi amacıyla ek bilgi talep edilebilir.',
    },
    {
      title: '13. Üçüncü Taraf Bağlantıları',
      paragraphs: [
        'İnternet sitesinde üçüncü taraflara ait internet sitelerine yönlendiren bağlantılar bulunabilir.',
        'Dernek, üçüncü taraflar tarafından işletilen internet sitelerinin içeriklerinden, güvenlik uygulamalarından veya gizlilik politikalarından sorumlu değildir. Kişisel bilgi paylaşmadan önce ilgili internet sitesinin gizlilik politikasını incelemeniz önerilir.',
      ],
    },
    {
      title: '14. Gizlilik Politikasında Yapılabilecek Değişiklikler',
      paragraphs: [
        'Bu Gizlilik Politikası; internet sitesinin işleyişinde, kullanılan hizmetlerde veya yürürlükteki mevzuatta değişiklik olması halinde güncellenebilir.',
        'Güncel metin ve son güncelleme tarihi bu sayfa üzerinden yayımlanır.',
        'Bu metnin son hali; internet sitesinin barındırma hizmeti, iletişim formu, e-posta altyapısı, analiz araçları ve çerez ayarları kesinleştirildikten sonra hukuki ve teknik açıdan yeniden değerlendirilmelidir.',
      ],
    },
  ],
}

export const ctaButton = 'Bize Ulaşın'
