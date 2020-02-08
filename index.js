class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1)
  }

  static sanitize(sentence) {
    const bad = /[#@!$*^({]/g
    return sentence.replace(bad, '')
  }

  static titleize(sentence) {
    const nope = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titled = []
    let tokens = sentence.split(" ")
    for (let i = 0; i < tokens.length; i++) {
      if (i == 0) {
        titled.push(this.capitalize(tokens[i]))
      } else {
        if (nope.includes(tokens[i])) {
          titled.push(tokens[i])
        } else {
          titled.push(this.capitalize(tokens[i]))
        }
      }
    }
    return titled.join(' ')
  }
}