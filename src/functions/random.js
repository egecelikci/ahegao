/* eslint-disable */
const fetch = require("node-fetch");
exports.handler = async function (event, context) {
  const ahegaos = JSON.parse(
    await (
      await fetch(
        "https://assets.ahegao.egecelikci.com/data.json"
      )
    ).text()
  );
  const randomAhegao = ahegaos[Math.floor(Math.random() * ahegaos.length)];
  const output = `https://assets.ahegao.egecelikci.com/images/${randomAhegao}`;
  const image = await (await fetch(output)).buffer();

  try {
    return {
      statusCode: 200,
      headers: { "Content-type": "image/jpeg" },
      body: image.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
