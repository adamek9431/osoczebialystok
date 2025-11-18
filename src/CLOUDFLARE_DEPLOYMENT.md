# 🚀 Instrukcja wdrożenia na Cloudflare Pages

## ✅ Projekt jest gotowy do deploymentu na Cloudflare Pages!

### 📋 Co zostało zrobione:

1. ✅ **Optymalizacja SEO**
   - Meta tagi (title, description, keywords)
   - Open Graph tags
   - JSON-LD Structured Data
   - Canonical URLs
   - Sitemap.xml i robots.txt

2. ✅ **Pliki konfiguracyjne Cloudflare**
   - `_headers` - security headers i cache control
   - `_redirects` - SPA routing i HTTPS redirect

3. ✅ **Semantyczne znaczniki HTML**
   - Schema.org microdata
   - ARIA labels
   - Proper heading hierarchy

---

## 🔧 Konfiguracja w Cloudflare Pages

### Krok 1: Połącz repozytorium GitHub

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Przejdź do **Pages** → **Create a project**
3. Wybierz **Connect to Git**
4. Autoryzuj Cloudflare do dostępu do GitHub
5. Wybierz swoje repozytorium

### Krok 2: Ustawienia Build

W sekcji **Build settings** ustaw:

```
Framework preset: None (lub wybierz Vite jeśli używasz Vite)
Build command: npm run build
Build output directory: dist
Root directory: / (lub zostaw puste)
```

**WAŻNE:** Jeśli Figma Make używa swojego własnego build systemu, ustawienia mogą się różnić. Sprawdź w dokumentacji Figma Make.

### Krok 3: Environment Variables (opcjonalnie)

Jeśli masz jakieś zmienne środowiskowe, dodaj je w sekcji **Environment variables**.

### Krok 4: Deploy

1. Kliknij **Save and Deploy**
2. Cloudflare automatycznie zbuduje i wdroży Twoją aplikację
3. Po zakończeniu otrzymasz URL: `https://twoj-projekt.pages.dev`

---

## 🌐 Konfiguracja Custom Domain

### Po deploymencie:

1. Przejdź do **Pages** → Twój projekt → **Custom domains**
2. Kliknij **Set up a custom domain**
3. Wpisz swoją domenę (np. `juliawieckowska.pl`)
4. Cloudflare automatycznie skonfiguruje DNS

### Aktualizacja sitemap.xml i robots.txt:

Po ustawieniu domeny, zaktualizuj:

**`/public/sitemap.xml`** - zamień `TWOJA-DOMENA.pl` na właściwą domenę
**`/public/robots.txt`** - zamień `TWOJA-DOMENA.pl` na właściwą domenę

---

## 🔍 Weryfikacja SEO po deploymencie

### 1. Google Search Console

1. Przejdź do [Google Search Console](https://search.google.com/search-console)
2. Dodaj swoją domenę
3. Zweryfikuj własność (przez DNS lub plik HTML)
4. Prześlij sitemap: `https://twoja-domena.pl/sitemap.xml`

### 2. Google Analytics (opcjonalnie)

Dodaj kod śledzenia Google Analytics do komponentu App.tsx w `useEffect`.

### 3. Sprawdź SEO:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [SEO Site Checkup](https://seositecheckup.com/)
- [Structured Data Testing Tool](https://validator.schema.org/)

---

## 🎯 Frazy kluczowe do monitorowania

Twoja strona jest zoptymalizowana pod te frazy:
- osocze bogatopłytkowe Białystok
- ostrzykiwanie osoczem Białystok
- PRP Białystok zabieg
- wampirzy lifting Białystok
- fibryna bogatopłytkowa Białystok
- fibryna pod oczy Białystok
- zabiegi anti-aging Białystok
- odmładzanie osoczem Białystok
- regeneracja skóry PRP Białystok
- medycyna estetyczna osocze Białystok
- Full Face zabieg
- mezoterapia skóry głowy

---

## ⚡ Optymalizacja Performance

### Cloudflare automatycznie zapewnia:
- ✅ Global CDN
- ✅ HTTP/3 i QUIC
- ✅ Brotli compression
- ✅ Automatic HTTPS
- ✅ DDoS protection

### Dodatkowe ustawienia (opcjonalnie):

W **Speed** → **Optimization**:
- ✅ Auto Minify (HTML, CSS, JS)
- ✅ Brotli
- ✅ Early Hints

---

## 🐛 Rozwiązywanie problemów

### Problem: Obrazy nie ładują się

**Rozwiązanie:** Sprawdź czy obrazy z `figma:asset/...` są poprawnie zbudowane. Figma Make powinien automatycznie konwertować te ścieżki podczas buildu.

### Problem: Style CSS nie działają

**Rozwiązanie:** 
1. Sprawdź czy `styles/globals.css` jest zaimportowany w głównym pliku
2. Sprawdź build output directory
3. Sprawdź czy Tailwind jest poprawnie skonfigurowany

### Problem: Routing nie działa (404)

**Rozwiązanie:** Plik `_redirects` powinien rozwiązać ten problem. Upewnij się, że znajduje się w katalogu `public/` i jest kopiowany do `dist/` podczas buildu.

### Problem: Fonts nie ładują się

**Rozwiązanie:** Fonty są ładowane z Google Fonts w `globals.css` - sprawdź połączenie i CORS headers.

---

## 📊 Monitoring i Analytics

### Cloudflare Web Analytics (darmowe):

1. Przejdź do **Analytics** w dashboardzie Cloudflare
2. Włącz **Web Analytics**
3. Dodaj kod JavaScript do swojej strony (opcjonalne, Cloudflare może to zrobić automatycznie)

### Rekomendowane narzędzia:
- Google Analytics 4
- Google Search Console
- Hotjar (heat maps)
- Microsoft Clarity (session recordings)

---

## 🔒 Bezpieczeństwo

### Obecne security headers w `_headers`:
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin

### Dodatkowe opcje (w Cloudflare Dashboard):
- SSL/TLS: Full (strict)
- Always Use HTTPS: ON
- Automatic HTTPS Rewrites: ON
- HSTS: ON (po przetestowaniu strony)

---

## 📱 Testowanie

### Przed uruchomieniem produkcji:

1. **Mobile responsiveness:**
   - Test na różnych urządzeniach mobilnych
   - Chrome DevTools → Device Mode

2. **Cross-browser testing:**
   - Chrome, Firefox, Safari, Edge
   - [BrowserStack](https://www.browserstack.com/) (opcjonalnie)

3. **Performance:**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

4. **SEO:**
   - Google Search Console
   - Structured Data Testing Tool
   - Mobile-Friendly Test

---

## 🎉 Gotowe!

Twoja strona jest w pełni zoptymalizowana i gotowa do wdrożenia na Cloudflare Pages!

### Pytania? Problemy?

Sprawdź:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Figma Make Documentation](https://help.figma.com/)
- Logi buildu w Cloudflare Dashboard

---

**Powodzenia! 🚀**
