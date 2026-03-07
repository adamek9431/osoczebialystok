# ✅ Pre-Deployment Checklist - Sprawdź przed wdrożeniem

## 🔍 Przed pushowaniem do GitHub

### 1. Pliki konfiguracyjne
- [ ] `/public/_headers` - istnieje ✅
- [ ] `/public/_redirects` - istnieje ✅
- [ ] `/public/sitemap.xml` - istnieje (zaktualizuj domenę po deploymencie!)
- [ ] `/public/robots.txt` - istnieje (zaktualizuj domenę po deploymencie!)
- [ ] `.gitignore` - istnieje ✅

### 2. Obrazy i assets
- [ ] Wszystkie obrazy mają alt text
- [ ] Obrazy są zoptymalizowane (webp/png)
- [ ] Ikony działają (lucide-react)
- [ ] Logo się wyświetla (w-16 h-16)

### 3. Linki i nawigacja
- [ ] Link do Booksy działa (Header i Hero)
- [ ] Telefon: `tel:+48723574156` działa
- [ ] Email: `mailto:july.pmu@gmail.com` działa
- [ ] Nawigacja scroll działa (#zabiegi, #korzyści, #o-mnie, #cennik, #kontakt)
- [ ] Mobile menu otwiera się i zamyka

### 4. Treści
- [ ] Wszystkie sekcje mają treść
- [ ] Brak "Lorem ipsum" lub placeholder text
- [ ] Ceny są aktualne
- [ ] Godziny otwarcia są poprawne (Pon-Pt 6:00-20:00)
- [ ] Adres jest poprawny (ul. Wyszyńskiego 2/1, lok. 301, 15-888 Białystok)

### 5. SEO
- [ ] Title jest prawidłowy (sprawdź w App.tsx)
- [ ] Meta description jest prawidłowy
- [ ] Keywords są prawidłowe
- [ ] Structured Data JSON-LD jest dodany
- [ ] Wszystkie H1, H2, H3 są semantycznie poprawne

### 6. Responsywność
- [ ] Desktop (1920px) - sprawdź wszystkie sekcje
- [ ] Laptop (1366px) - sprawdź wszystkie sekcje
- [ ] Tablet (768px) - sprawdź wszystkie sekcje
- [ ] Mobile (375px) - sprawdź wszystkie sekcje

### 7. Przeglądarki (sprawdź lokalnie)
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (jeśli masz Mac)
- [ ] Edge

### 8. Performance
Sprawdź lokalnie:
- [ ] Strona ładuje się < 3s
- [ ] Brak błędów w Console
- [ ] Brak warnin9gów o wydajności
- [ ] Animacje są płynne

### 9. Fonty
- [ ] Cinzel dla "Julia Więckowska" (logo/nazwa)
- [ ] Poppins dla body
- [ ] Playfair Display dla headings
- [ ] Wszystkie fonty się ładują

### 10. Kolory (design system)
- [ ] Złoty: #D4AF37
- [ ] Akcentowy złoty: #F4C542
- [ ] Czarny: #000000 / #1a1a1a
- [ ] Kremowy: #E8DCC4 / #F5F5DC
- [ ] Wszystko zgodne z projektem

---

## 📦 Przed deploymentem na Cloudflare

### 1. GitHub
- [ ] Repozytorium jest utworzone
- [ ] Kod jest w branch `main` (lub `master`)
- [ ] `.gitignore` działa (node_modules nie są w repo)
- [ ] README.md jest wypełniony
- [ ] Commit message są sensowne

### 2. Cloudflare Account
- [ ] Konto Cloudflare jest utworzone
- [ ] Email jest zweryfikowany
- [ ] Plan Free jest wystarczający (tak!)

### 3. Domena (jeśli masz)
- [ ] Domena jest kupiona
- [ ] Nameservers są ustawione na Cloudflare
- [ ] DNS propagacja zakończona (24h)

---

## 🚀 Podczas deploymentu

### 1. Cloudflare Pages Settings
```
Framework preset: None (lub Vite)
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18 lub 20
```

### 2. Environment Variables
⚠️ Sprawdź czy projekt wymaga env variables:
- [ ] API keys (jeśli używasz)
- [ ] Public URLs
- [ ] Feature flags

---

## ✅ Po deploymencie (dzień 1)

### Immediate checks:
- [ ] Strona jest live (https://twoj-projekt.pages.dev)
- [ ] Wszystkie sekcje się wyświetlają
- [ ] Obrazy się ładują
- [ ] Fonty są prawidłowe
- [ ] Kolory są zgodne z projektem
- [ ] Nawigacja działa
- [ ] Mobile menu działa
- [ ] CTA buttons działają (Booksy, telefon, email)

### Test URLs:
```
https://twoja-domena.pl/
https://twoja-domena.pl/sitemap.xml
https://twoja-domena.pl/robots.txt
https://twoja-domena.pl/#zabiegi
https://twoja-domena.pl/#kontakt
```

### Performance tests:
- [ ] Google PageSpeed Insights - Desktop > 90
- [ ] Google PageSpeed Insights - Mobile > 80
- [ ] GTmetrix - Grade A
- [ ] Pingdom - Load time < 3s

### SEO validation:
- [ ] Google Structured Data Testing Tool
- [ ] Meta tags są prawidłowe (sprawdź source)
- [ ] Open Graph preview (Facebook/LinkedIn)
- [ ] Twitter Card preview

### Security:
- [ ] SSL certificate działa (zamknięta kłódka)
- [ ] HTTPS redirect działa (http → https)
- [ ] Security headers: https://securityheaders.com/
- [ ] SSL Labs: https://www.ssllabs.com/ssltest/

---

## 🔧 Update po deploymencie

### 1. Zaktualizuj pliki:
```bash
# Edytuj /public/sitemap.xml
# Zamień TWOJA-DOMENA.pl na prawdziwą domenę

# Edytuj /public/robots.txt
# Zamień TWOJA-DOMENA.pl na prawdziwą domenę

git add .
git commit -m "Update sitemap and robots.txt with production domain"
git push
```

Cloudflare automatycznie przebuduje stronę!

### 2. Google Search Console:
- [ ] Dodaj property (twoja-domena.pl)
- [ ] Zweryfikuj własność
- [ ] Prześlij sitemap
- [ ] Sprawdź Mobile Usability
- [ ] Sprawdź Core Web Vitals

### 3. Google My Business:
- [ ] Utwórz/zaktualizuj profil
- [ ] Dodaj adres
- [ ] Dodaj telefon
- [ ] Dodaj website
- [ ] Dodaj zdjęcia
- [ ] Ustaw godziny

---

## 🎯 Monitoring (tydzień 1)

### Daily:
- [ ] Sprawdź czy strona działa
- [ ] Sprawdź logi w Cloudflare (errors?)
- [ ] Sprawdź analytics (ruch?)

### Weekly:
- [ ] Google Analytics - jaki ruch?
- [ ] Google Search Console - czy Google indeksuje?
- [ ] Pozycje w Google (frazy kluczowe)
- [ ] Czy są jakieś błędy?

---

## 🚨 Problemy? Debug checklist

### Strona nie ładuje się:
1. Sprawdź status Cloudflare: https://www.cloudflarestatus.com/
2. Sprawdź logi w Cloudflare Pages
3. Sprawdź build logs
4. Sprawdź czy commit został zdeployowany

### Obrazy nie działają:
1. Sprawdź ścieżki do obrazów
2. Sprawdź czy `figma:asset/...` są konwertowane podczas buildu
3. Sprawdź network tab w DevTools
4. Sprawdź CORS headers

### Fonty nie działają:
1. Sprawdź połączenie z Google Fonts
2. Sprawdź `globals.css` import
3. Sprawdź CSP headers

### Routing nie działa (404):
1. Sprawdź czy `_redirects` jest w dist/
2. Sprawdź SPA fallback w `_redirects`
3. Wyczyść cache w Cloudflare

### SEO nie działa:
1. Sprawdź czy meta tags są w `<head>`
2. Sprawdź czy robots.txt zezwala na crawling
3. Sprawdź Google Search Console (errors?)
4. Poczekaj 2-4 tygodnie (SEO wymaga czasu!)

---

## 💡 Pro Tips

### 1. Development Mode
Podczas testów włącz Development Mode w Cloudflare:
- Wyłącza cache na 3h
- Szybsze testowanie zmian
- Pamiętaj wyłączyć po testach!

### 2. Purge Cache
Po każdej większej zmianie:
```
Cloudflare Dashboard → Caching → Purge Everything
```

### 3. Preview Deployments
Cloudflare tworzy preview dla każdego commita:
```
https://abc123.twoj-projekt.pages.dev
```
Testuj tam przed mergeowaniem do main!

### 4. Environment Variables
Jeśli używasz:
- Production: `PROD_VAR=value`
- Preview: `PREVIEW_VAR=value`
Ustaw w Cloudflare Pages settings

### 5. Rollback
Jeśli coś pójdzie nie tak:
```
Cloudflare Pages → Deployments → Poprzedni deployment → Rollback
```

---

## ✅ Final Checklist

Przed ogłoszeniem strony:

- [ ] Wszystko działa na production
- [ ] Google Search Console skonfigurowany
- [ ] Google My Business skonfigurowany
- [ ] Analytics działa
- [ ] Performance > 80 (mobile), > 90 (desktop)
- [ ] Security headers OK
- [ ] SSL certificate OK
- [ ] Mobile fully functional
- [ ] All links work
- [ ] No console errors
- [ ] Sitemap submitted to Google
- [ ] Custom domain configured (jeśli masz)

---

## 🎉 Ready to launch!

**Po przejściu wszystkich checków - jesteś gotowy na produkcję! 🚀**

### Ostatni krok:
1. Ogłoś uruchomienie na social media
2. Poinformuj klientów
3. Dodaj link do bio Instagram
4. Zaktualizuj Booksy profile
5. Monitoruj przez pierwszy tydzień

**Powodzenia! 💚✨**
