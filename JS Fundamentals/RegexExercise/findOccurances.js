function occurances(text,word) {
    let counter = 0;
    let regex = new RegExp("\\b" + word + "\\b","gi");
    let match = text.match(regex);

   console.log(match.length)
}
occurances('The waterfall was so high, that the child couldn’t see its peak.','the');