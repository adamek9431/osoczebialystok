/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/styles/*
  Cache-Control: public, max-age=31536000, immutable
  
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable
  
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
  
/*.jpeg
  Cache-Control: public, max-age=31536000, immutable
  
/*.webp
  Cache-Control: public, max-age=31536000, immutable
  
/*.svg
  Cache-Control: public, max-age=31536000, immutable

/sitemap.xml
  Cache-Control: public, max-age=86400
  Content-Type: application/xml

/robots.txt
  Cache-Control: public, max-age=86400
  Content-Type: text/plain
