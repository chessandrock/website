<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Chess & Rock" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <title>Chess &amp; Rock</title>
    @viteReactRefresh
    @vite('resources/js/app.js')
</head>

<body>
    <div id="root"></div>
</body>

</html>
