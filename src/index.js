module.exports = function check(str, bracketsConfig) {
  let checker = [];

  checker = bracketsConfig.map((item) => {
    return item.reduce((sum, e) => {
      if (/\d/.test(e)) {
        return sum + e;
      } else {
        return sum + '\\' + e;
      }
    }, '')
  }).join('|');

  let checkerApp = new RegExp(checker, 'g');
  console.log(checkerApp)
  while (checkerApp.test(str)) {
    str = str.replace(checkerApp, '')
  }

  if (str.length === 0) {
    return true
  } else {
    return false
  };
}
