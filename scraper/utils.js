module.exports = {
  delay: interval => new Promise(resolve => setTimeout(resolve, interval)),
  tidyTitle: (text) => {
    let title = text.trim().replace(/\s+/g, ' ');
    if (/^".*"$/.test(title)) title = title.slice(1, -1).trim();
    return title;
  }
}
