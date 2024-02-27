const bcrypt = require("bcrypt");
async function genPassword(password) {
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  console.log(password);
}
const password = "team7";
genPassword(password);
