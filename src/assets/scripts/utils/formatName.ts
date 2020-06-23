export default function formatName(name: string) {
  var palavras = name.toLowerCase().match(/\b\w+\b/g),
    preps = ['de', 'da', 'do', 'das', 'dos'];

  if (palavras) {
    return palavras
      .map(function (e: string, i: number) {
        return preps.indexOf(e) === -1 || i === 0
          ? e[0].toUpperCase() + e.slice(1)
          : e;
      })
      .join(' ');
  }
}
