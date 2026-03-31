# Serve static files directly (must be BEFORE catch-all)
/robots.txt    /robots.txt    200
/sitemap.xml   /sitemap.xml   200

# Redirect HTTP to HTTPS
http://osoczebialystok.pl/*  https://osoczebialystok.pl/:splat  301!
http://www.osoczebialystok.pl/*  https://osoczebialystok.pl/:splat  301!

# Redirect www to non-www
https://www.osoczebialystok.pl/*  https://osoczebialystok.pl/:splat  301!

# Redirect all non-file requests to index.html for client-side routing
/*    /index.html   200