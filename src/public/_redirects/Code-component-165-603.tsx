# Redirect all non-file requests to index.html for client-side routing
/*    /index.html   200

# Redirect HTTP to HTTPS
http://osoczebialystok.pl/*  https://osoczebialystok.pl/:splat  301!
http://www.osoczebialystok.pl/*  https://osoczebialystok.pl/:splat  301!

# Redirect www to non-www
https://www.osoczebialystok.pl/*  https://osoczebialystok.pl/:splat  301!
