
function Cloze (text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = function () {
    var partial = [];
    var words = text.split(' ');

    for (var i = 2; i < words.length; i++) {
      partial.push(words[i]);
      var partialText = '... ' + partial.join(' ');
      var partialCloze = words[0] + ' ' + words[1];
    }

    if (this.cloze !== partialCloze) {
      console.log('Error - Bad Cloze Format');
    } else {
      return partialText;
    }
  };
}

module.exports = Cloze;
