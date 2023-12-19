let mail = "gosia@gmail.com";

console.log(mail.includes("@"));

console.log(mail.indexOf("@"));

function hasSign(str, sign) {
  for (let i = 0; i < mail.length; i++) {
    if (str[i] == sign) {
      return true;
    }
  }
  return false;
}

console.log(hasSign(mail, "@"));
