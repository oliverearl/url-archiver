# URL Archiver

I view a lot of webpages, journals, tutorials, etc. everyday on a massive variety of different topics, and I often find myself scurrying through my browser's history to later find something I read and either forgot to bookmark, or wanted to later revisit. This is a stop-gap solution to that - by producing a comma-separated-values (CSV) file that I can easily search, of all the webpages that I view in a day. The idea came about from a suggestion by someone online.

The PHP script sits in a directory that is parked by [Laravel Valet](https://laravel.com/docs/6.x/valet) as it is a part of my everyday workflow and is a convenient means to host and work with Laravel (and vanilla PHP) software - but you could just use PHP's built-in server to do this too. It takes the request URI passed to it by a script and appends it to a date-derived .CSV file.

The JavaScript file is a [TamperMonkey](https://www.tampermonkey.net/) userscript that runs on all URLs (top-level, not frames) that I visit and posts them to the URL specified - which is the URL I use in Valet. This could also be something akin to *localhost:8080* or whatever you're using. I use both [Firefox](https://www.firefox.com) and [Chrome](https://www.google.com/chrome) routinely, so it should work with basically any browser that uses their engines.

It's nothing fancy at all, but it's just a tool in my kit that I find useful, and maybe you might too.

## License

MIT
