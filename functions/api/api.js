/* eslint-disable */
const fetch = require("node-fetch");
exports.handler = async (event, context, callback) => {
  const ahegaos = JSON.parse(
    await (
      await fetch(
        "https://raw.githubusercontent.com/egecelikci/ahegao/assets/data.json"
      )
    ).text()
  );
  const randomAhegao = ahegaos[Math.floor(Math.random() * ahegaos.length)];
  const output = `https://raw.githubusercontent.com/egecelikci/ahegao/assets/images/${randomAhegao}`;

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: output }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
