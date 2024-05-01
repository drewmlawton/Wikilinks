# Wikilinks

Wikilinks is a lightweight solution to automatically generate links to relevant Wikipedia articles. Simply add the following code to your html head:

<script src="wikilink.js" defer></script>
<link rel="stylesheet" type="text/css" href="wikilink.css">

And use <wiki> tags to automatically generate links to relevant Wikipedia pages.



For instance, if I have:

Notable Georgia Tech athletes include Calvin Johnson and Chris Bosh.

I can use:
Notable <wiki>Georgia Tech</wiki> athletes include <wiki>Calvin Johnson</wiki> and <wiki>Christ Bosh</wiki>.

To generate:
Notable [Georgia Tech](https://www.wikipedia.org/wiki/Georgia_Tech) athletes include [Calvin Johnson](https://www.wikipedia.org/wiki/Calvin_Johnson) and [Chris Bosh](https://www.wikipedia.org/wiki/Chris_Bosh).
