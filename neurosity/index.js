const { Neurosity } = require("@neurosity/sdk");
require("dotenv").config();

const deviceId = process.env.NEUROSITY_DEVICE_ID || ""
const email = process.env.NEUROSITY_EMAIL || "";
const password = process.env.NEUROSITY_PASSWORD || "";

const neurosity = new Neurosity({
    deviceId
  });

const main = async () => {
await neurosity
    .login({
    email,
    password
    })
    .catch((error) => {
    console.log(error);
    throw new Error(error);
    });
console.log("Logged in");

neurosity.focus().subscribe((focus) => {
    if (focus.probability > 0.3) {
      console.log("Hello World! ", focus.probability);
    }
  });

};

main();