const wikiTags = document.querySelectorAll('wiki');

wikiTags.forEach(wikiTag => {
    wikiTag.addEventListener('click', () => {
        const searchText = wikiTag.textContent.trim();
        const formattedText = searchText.replace(/\s+/g, '_');
        window.location.href = `https://en.wikipedia.org/wiki/${formattedText}`;
    });
});