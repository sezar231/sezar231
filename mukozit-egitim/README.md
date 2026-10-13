# Kemoterapide Ağız Bakımı

Kemoterapi alan hastalar için Türkçe, telefona uygun, etkileşimli hasta eğitimi uygulaması. Konu: kemoterapiye bağlı oral mukozit (ağız içi dokunun iltihaplanması ve yara oluşması) ve ağız bakımı.

Afyonkarahisar Sağlık Bilimleri Üniversitesi, Sağlık Bilimleri Fakültesi, Hemşirelik Bölümü öğrenci projesidir. Üniversitenin resmî yayını değildir.

**Uygulama adresi:** https://sezar231.github.io/agiz-bakimi/

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi. Tek dosyadır, dış kaynak kullanmaz; yazı tipi ve çizimler dosyanın içindedir. |
| `sw.js` | Uygulamanın bir kez açıldıktan sonra internetsiz de açılmasını sağlar. |
| `qr-kart.html` | 85×55 mm QR kartı. Adres hazır yazılıdır; A4'e 10'lu basılır. |
| `kart-baski.pdf` | Basılmaya hazır kartlar: 1. sayfa 10 ön yüz, 2. sayfa 10 arka yüz. |
| `sunum-akisi.md` | Sınıfta 5 dakikalık canlı tanıtım için konuşma akışı. |
| `kaynak-alintilari.md` | Uygulamadaki her bilginin dayandığı kaynak alıntıları (K1-K5). |

## Bölümler

1. **Bugün ağzım nasıl?** 4 resimli soru (ağrı, kızarıklık/yara, yiyebilme, ateş). Sonuç yeşil, sarı veya kırmızı kartla gösterilir. DSÖ ölçeğinden uyarlanmıştır, tanı koymaz.
2. **Doğru diş fırçalama:** 7 animasyonlu adım ve 2 dakikalık sayaç. Gazlı bez, diş ipi ve takma diş notları da vardır.
3. **Gargara tarifi:** 5 animasyonlu adım (1 su bardağı su + 1 çay kaşığı karbonat).
4. **Bunu yiyebilir miyim?** 20 yiyecekten rastgele 12 kart. Her cevapta açıklama ve kaynak gösterilir.
5. **Günlük takip:** Sabah, öğle, akşam ve yatmadan önce için fırçalama ve gargara işaretleri, haftalık tablo. Veriler yalnızca telefonda saklanır.
6. **Öğrendiklerimi anlatayım:** Hemşire ile 5 soruluk teach-back (öğrendiğini kendi cümleleriyle anlatma) ve hastanın tek başına çözebileceği 5 soruluk doğru/yanlış testi.
7. **Acil durumlar:** Hemen başvurulacak belirtiler ve 112'yi arama butonu.

Her ekranda **Sesli dinle** vardır. Okuma sırasında ekranın altında Yavaş, Normal ve Hızlı hız seçenekleri çıkar; seçilen hız telefonda hatırlanır. Üst çubukta **A+** (yazıyı büyütme) ve **Acil** butonları bulunur.

## Tasarım

- **Yazı tipi:** Atkinson Hyperlegible Next. Braille Institute tarafından az gören okuyucular için tasarlanmıştır; benzer harfleri (I, l, 1 gibi) birbirinden kolay ayırt ettirir. Rakamlar telefonun kendi yazı tipiyle gösterilir.
- **Renkler:** Her bölümün kendi rengi vardır; ana sayfadaki kart ile bölümün başlığı aynı renktedir. Sonuç kartlarındaki yeşil, sarı ve kırmızı yalnızca ağız kontrolü sonucu için kullanılır.
- **Okunabilirlik:** Metin en az 20 piksel, butonlar en az 60 piksel yüksekliktedir. Telefonun koyu teması da desteklenir.

## Yayınlama (GitHub Pages)

Uygulama `sezar231/agiz-bakimi` deposundan yayınlanır:

1. GitHub'da `agiz-bakimi` deposunu aç.
2. **Settings → Pages** bölümüne gir.
3. "Build and deployment" altında Source: **Deploy from a branch**, Branch: **main**, klasör: **/ (root)** seç ve **Save**'e bas.
4. Birkaç dakika sonra uygulama https://sezar231.github.io/agiz-bakimi/ adresinde açılır.

İçeriği değiştirdiğinizde `sw.js` içindeki `agiz-bakimi-v2` adını bir artırın (`v3`). Böylece telefonlar yeni sürümü alır.

## Kaynaklar

- **K1** T.C. Sağlık Bakanlığı Gaziantep Şehir Hastanesi. Kemoterapi Ünitesi Hasta Bilgilendirme Rehberi (KH.RH.01, Rev. 03), 2024/2026.
- **K2** World Health Organization. WHO Handbook for Reporting Results of Cancer Treatment. WHO Offset Publication No. 48, 1979.
- **K3** Elad S ve ark. MASCC/ISOO clinical practice guidelines for the management of mucositis secondary to cancer therapy. Cancer. 2020;126(19):4423-4431.
- **K4** National Cancer Institute. Oral Complications of Cancer Therapies (PDQ®), Patient Version, 2024.
- **K5** National Cancer Institute. Mouth and Throat Problems: Cancer Treatment Side Effects, 2021.

Alıntıların tamamı `kaynak-alintilari.md` dosyasındadır.

### Kaynaklar çeliştiğinde verilen kararlar

| Konu | Seçim |
|---|---|
| Gargara tarifi | K1: 1 su bardağı su + 1 çay kaşığı karbonat; yemeklerden sonra ve yatmadan önce; şikâyet fazlaysa 2 saatte bir |
| Yara ve ağrı çokken temizlik | K1: fırça yerine parmağa sarılı steril gazlı bez |
| Diş macunu | K1 + K4: naneli olmayan, hafif tatlı macun (örneğin çocuk diş macunu) |
| Ateş sınırı | K5: 38 °C ve üzeri |
| Diş ipi | K1 + K5: trombosit yeterliyse; kanama riski varsa ekibe sorulur |
| Soğuk yiyecekler, ağızda buz tutma | Uygulamaya alınmadı. İlaca göre değişiyor (K1 okzaliplatinde soğuğu yasaklıyor). |

### Kaynakta olmayan tek ekleme

Acil durumda aranacak numara olarak 112. Uygulamada ve kartta başka bir telefon numarası veya servis adı yoktur.

## Sınırlar

- Uygulama genel bilgi verir, tanı koymaz. Gerçek hastalarla kullanmadan önce sorumlu öğretim elemanının ve servis ekibinin onayı alınmalıdır.
- "Sesli dinle", telefonda Türkçe metin okuma sesi yüklüyse çalışır. Ses yoksa uygulama bunu söyler.
- Takip kayıtları yalnızca o telefon ve o tarayıcıda durur. Tarayıcı verileri silinirse kayıtlar da silinir.
- MASCC/ISOO 2020 (K3) alıntıları kılavuzun özetinden alınmıştır. Atıf yapmadan önce tam metinle karşılaştırın.
