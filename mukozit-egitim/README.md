# Kemoterapide Ağız Bakımı

Kemoterapi alan hastalar için Türkçe, telefona uygun, etkileşimli hasta eğitimi uygulaması. Konu: kemoterapiye bağlı oral mukozit (ağız içi dokunun iltihaplanması ve yara oluşması) ve ağız bakımı. Hemşirelik öğrencisi hasta eğitimi projesi.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın kendisi. Tek dosyadır, dış kaynak kullanmaz. |
| `sw.js` | İsteğe bağlı. Kendi sunucunuzda uygulamanın internetsiz açılmasını sağlar. |
| `qr-kart.html` | 85×55 mm QR kartı. Adres ve telefon yazılır, A4'e 10'lu basılır. |
| `sunum-akisi.md` | Sınıfta 5 dakikalık canlı tanıtım için konuşma akışı. |
| `kaynak-alintilari.md` | Uygulamadaki her bilginin dayandığı kaynak alıntıları (K1-K5). |

## Bölümler

1. **Bugün ağzım nasıl?** 4 resimli soru (ağrı, kızarıklık/yara, yiyebilme, ateş). Sonuç yeşil, sarı veya kırmızı kartla gösterilir. DSÖ ölçeğinden uyarlanmıştır, tanı koymaz.
2. **Doğru diş fırçalama:** 7 animasyonlu adım ve 2 dakikalık sayaç. Gazlı bez, diş ipi ve takma diş notları da vardır.
3. **Gargara tarifi:** 5 animasyonlu adım (1 su bardağı su + 1 çay kaşığı karbonat).
4. **Bunu yiyebilir miyim?** 20 yiyecekten rastgele 12 kart. Her cevapta açıklama ve kaynak gösterilir.
5. **Günlük takip:** Sabah, öğle, akşam ve yatmadan önce için fırçalama ve gargara işaretleri. Haftalık tablo. Veriler yalnızca telefonda saklanır.
6. **Öğrendiklerimi anlatayım:** Hemşire ile 5 soruluk teach-back (öğrendiğini kendi cümleleriyle anlatma) ve hastanın tek başına çözebileceği 5 soruluk doğru/yanlış testi.
7. **Acil durumlar:** "Servisi ara" ve "112" butonları ile hemen haber verilecek belirtiler.

Her ekranda **Sesli dinle** (tarayıcının Türkçe konuşma özelliği), üst çubukta **A+** (yazıyı büyütme) ve **Acil** butonu vardır.

## Servis telefonunu eklemek

`index.html` dosyasında şu satırı bulun ve numarayı yazın:

```js
var SERVIS_TELEFONU = '[SERVİS TELEFONU]';
```

Örnek: `var SERVIS_TELEFONU = '0 342 000 00 00';`

Numara eklenmeden "Servisi ara" butonu arama yapmaz, uyarı gösterir.

## Yayınlama

**Kendi sunucunuz:** `index.html` ve `sw.js` dosyalarını aynı klasöre koyun. Sunucu HTTPS olmalıdır. Hasta uygulamayı bir kez açtıktan sonra internet olmadan da açabilir. İçeriği değiştirdiğinizde `sw.js` içindeki `agiz-bakimi-v1` adını `v2` yapın, telefonlar yeni sürümü alır.

**GitHub Pages (ücretsiz):** Bu klasör ana dala (main) birleştirildikten sonra depo ayarlarında Settings → Pages → "Deploy from a branch" → `main` / `(root)` seçin. Adres şöyle olur: `https://sezar231.github.io/sezar231/mukozit-egitim/`

**QR kartı:** Kalıcı adres belli olduktan sonra `qr-kart.html` dosyasını bilgisayarda Chrome ile açın. Adresi ve telefonu yazın, Ctrl+P ile yazdırın: A4, ölçek %100, kenar boşluğu yok, arka plan grafikleri açık. Önce düz kâğıda deneme basıp QR kodu telefonla okutun.

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

Acil ekranındaki "Servise ulaşamazsanız 112'yi arayın" cümlesi ve 112 butonu.

## Sınırlar

- Uygulama genel bilgi verir, tanı koymaz. Gerçek hastalarla kullanmadan önce servis ekibinin ve sorumlu öğretim elemanının onayı alınmalıdır.
- "Sesli dinle", telefonda Türkçe metin okuma sesi yüklüyse çalışır.
- Takip kayıtları yalnızca o telefon ve o tarayıcıda durur. Adres değişirse veya tarayıcı verileri silinirse kayıtlar görünmez.
- MASCC/ISOO 2020 (K3) alıntıları kılavuzun özetinden alınmıştır. Atıf yapmadan önce tam metinle karşılaştırın.
