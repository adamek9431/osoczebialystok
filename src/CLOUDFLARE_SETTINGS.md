# ⚙️ Optymalne ustawienia Cloudflare dla Twojej strony

## 🚀 Build Settings (Cloudflare Pages)

```
Framework preset: None (lub Vite jeśli używasz)
Build command: npm run build (lub komenda z Figma Make)
Build output directory: dist (lub build - sprawdź w dokumentacji)
Root directory: / (zostaw puste)
Node version: 18 lub 20 (najnowszy LTS)
```

---

## 🔒 SSL/TLS

### Encryption mode:
✅ **Full (strict)** - najbezpieczniejsza opcja

### Always Use HTTPS:
✅ **ON** - wymusza HTTPS

### Automatic HTTPS Rewrites:
✅ **ON** - automatycznie przepisuje HTTP na HTTPS

### Minimum TLS Version:
✅ **TLS 1.2** (lub TLS 1.3 jeśli wspierane przez wszystkich użytkowników)

### TLS 1.3:
✅ **ON** - szybsze połączenia

### HSTS (po przetestowaniu strony):
⚠️ **Włącz po 2-3 dniach testów**
- Max Age: 6 miesięcy (15768000 sekund)
- Include subdomains: ON
- Preload: OFF (na początku)

---

## ⚡ Speed → Optimization

### Auto Minify:
✅ **JavaScript: ON**
✅ **CSS: ON**
✅ **HTML: ON**

### Brotli:
✅ **ON** - lepsza kompresja niż Gzip

### Early Hints:
✅ **ON** - szybsze ładowanie

### HTTP/2:
✅ **ON** (domyślnie włączone)

### HTTP/3 (QUIC):
✅ **ON** - najnowszy protokół, najszybszy

### Rocket Loader:
⚠️ **OFF** - może powodować problemy z React/Motion
(Włącz tylko jeśli wiesz co robisz)

---

## 🌍 Caching

### Caching Level:
✅ **Standard** - wystarczające dla większości

### Browser Cache TTL:
✅ **Respect Existing Headers** - używamy własnych headers z `_headers`

### Always Online:
✅ **ON** - pokazuje cached wersję gdy serwer nie działa

### Development Mode:
- Włącz podczas testów (wyłącza cache na 3h)
- Pamiętaj wyłączyć po testach!

---

## 🛡️ Security

### Security Level:
✅ **Medium** - balans między bezpieczeństwem a dostępnością

### Challenge Passage:
✅ **30 Minutes** - wystarczające

### Browser Integrity Check:
✅ **ON** - blokuje złośliwe przeglądarki

### Privacy Pass Support:
✅ **ON**

### Bot Fight Mode (darmowe):
⚠️ **OFF na start** - może blokować prawdziwych użytkowników
(Włącz jeśli zauważysz spam/ataki)

---

## 🌐 Network

### HTTP/2:
✅ **ON**

### HTTP/3 (QUIC):
✅ **ON**

### 0-RTT Connection Resumption:
✅ **ON** - szybsze ponowne połączenia

### IPv6 Compatibility:
✅ **ON** - wsparcie dla IPv6

### WebSockets:
✅ **ON** - jeśli używasz (prawdopodobnie nie)

### Pseudo IPv4:
✅ **Add header** lub **Overwrite headers**

---

## 📊 Analytics & Logs (opcjonalnie)

### Web Analytics:
✅ **ON** - darmowe analytics od Cloudflare
- Szanuje prywatność
- Nie wymaga cookies
- Lekkie i szybkie

---

## 🔥 Firewall (WAF)

### Managed Rules:
- Cloudflare Managed Ruleset: **ON**
- Cloudflare OWASP Core Ruleset: **ON**

### Custom Rules (opcjonalnie):
Możesz stworzyć rule dla geo-blocking (np. blokuj spam z określonych krajów)

**Przykładowa reguła - zezwalaj tylko na Polskę + główne kraje:**
```
(ip.geoip.country ne "PL" and ip.geoip.country ne "US" and ip.geoip.country ne "GB" and ip.geoip.country ne "DE") 
→ Challenge (Managed Challenge)
```
⚠️ Używaj ostrożnie - może zablokować prawdziwych użytkowników!

---

## 📧 Email Routing (jeśli używasz Cloudflare Email)

Jeśli masz domenę w Cloudflare, możesz:
1. Włączyć Email Routing
2. Przekierować `kontakt@twoja-domena.pl` → `july.pmu@gmail.com`
3. Darmowe i proste!

---

## 🎨 Custom Error Pages (opcjonalnie)

Możesz stworzyć własne strony błędów:
- 404 - Nie znaleziono strony
- 500 - Błąd serwera
- 1xxx - Błędy Cloudflare

**Krok:**
1. Przejdź do **Custom Pages**
2. Upload HTML dla każdego typu błędu
3. Styluj zgodnie z designem strony (złoty, czarny, kremowy)

---

## 📱 Mobile Performance

### Image Optimization (Cloudflare Images - płatne):
Jeśli chcesz automatyczną optymalizację obrazów:
- Auto WebP/AVIF conversion
- Lazy loading
- Responsive images

**Alternatywa (darmowa):**
- Użyj Cloudflare Polish (Auto Lossy lub Lossless)
- Włącz w: **Speed** → **Optimization** → **Polish**

### Mirage (płatne):
- Automatyczna optymalizacja obrazów dla mobile
- Lazy loading
- Progresywne ładowanie

---

## 🔍 SEO-friendly Settings

### Crawler Hints:
✅ **ON** - pomaga crawlerom Google

### Zadbaj o:
- [ ] Canonical URLs (masz w kodzie ✅)
- [ ] XML Sitemap (masz ✅)
- [ ] robots.txt (masz ✅)
- [ ] Structured Data (masz ✅)

---

## 🎯 Recommended Plan

### Dla Twojej strony:
✅ **FREE plan** - całkowicie wystarczający!

### Co dostajesz za darmo:
- Unlimited requests
- DDoS protection
- Global CDN
- SSL certificate
- 100GB/miesiąc transferu na Cloudflare Pages
- Web Analytics
- Automatic HTTPS

### Kiedy upgrade do Pro ($20/miesiąc)?
- Ruch > 100 000 wizyt/miesiąc
- Potrzebujesz Image Optimization
- Chcesz lepsze Web Application Firewall (WAF)
- Potrzebujesz priorytetowego supportu

**Dla małej/średniej praktyki kosmetologicznej → FREE plan jest idealny!** 🎉

---

## ⚠️ WAŻNE - Po deploymencie

### 1. Sprawdź czy wszystko działa:
```bash
# Test HTTPS
curl -I https://twoja-domena.pl

# Test redirects
curl -I http://twoja-domena.pl

# Test sitemap
curl https://twoja-domena.pl/sitemap.xml

# Test robots.txt
curl https://twoja-domena.pl/robots.txt
```

### 2. Wyczyść cache:
Po każdej aktualizacji:
1. Przejdź do **Caching** → **Configuration**
2. Kliknij **Purge Everything**
3. Poczekaj 30 sekund
4. Odśwież stronę

### 3. Development Mode:
- Włącz podczas development/testów
- Cache jest wyłączony na 3 godziny
- Automatycznie wyłącza się po 3h

---

## 📞 Support

### Jeśli coś nie działa:

1. **Cloudflare Community:**
   https://community.cloudflare.com/

2. **Cloudflare Docs:**
   https://developers.cloudflare.com/

3. **Status Page:**
   https://www.cloudflarestatus.com/

4. **Twitter:**
   @CloudflareHelp

---

## 🎉 Gotowe!

Twoja strona z tymi ustawieniami będzie:
- ⚡ Szybka (Global CDN + HTTP/3)
- 🔒 Bezpieczna (SSL + Security Headers + WAF)
- 📊 Monitorowana (Analytics)
- 🌍 Dostępna globalnie
- 💯 SEO-friendly

**Wszystko na FREE planie! 🚀**
