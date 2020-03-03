{
  Array.from(document.querySelectorAll("pre"))
    .filter(e => e.innerHTML.match(/<.*>/) || e.innerHTML.match(/\n/))
    .forEach(e => (e.outerHTML = `<code>${e.outerHTML}</code>`));

  Array.from(document.querySelectorAll("pre.geist-overflow-scroll-y")).forEach(
    e => (e.outerHTML = `<code>${e.outerHTML}</code>`)
  );

  Array.from(document.querySelectorAll("code, .editor-wrapper"))
    .filter(e => !e.innerHTML.match(/<.*>/))
    .forEach(e => (e.outerHTML = e.outerHTML.replace(/code/g, "span")));
}
