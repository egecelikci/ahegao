/* eslint-disable */
const fetch = require("node-fetch");
exports.handler = async (event, context, callback) => {
  const ahegaos = JSON.parse(
    await (
      await fetch(
        "https://ahegao.egecelikci.com/data.json"
      )
    ).text()
  );
  const randomAhegao = ahegaos[Math.floor(Math.random() * ahegaos.length)];
  const output = `https://files.catbox.moe/${randomAhegao}`;

  try {
    return event.queryStringParameters.redirect ? {
      statusCode: 301,
      headers: {
        Location: output,
        'Cache-Control': 'no-cache',
      },
  }:{
      statusCode: 200,
      body: JSON.stringify({ msg: output }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
