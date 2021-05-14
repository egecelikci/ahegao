const data = require('./data.json');

const html = `<!--!
  heya inspector,
  source code:
https://github.com/egecelikci/ahegao
-->
<html>
  <head>
    <title>Ahegao</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <link href="modesta.css" type="text/css" rel="stylesheet">

    <meta name="theme-color" content="#65cafe">
    <meta content="ahegao.png" property="og:image"/>
    <meta content="Ahegao" property="og:title"/>

    <meta content="Start your day with a lovely ahegao ~" property="og:description"/>
    <meta content="Start your day with a lovely ahegao ~" name="description"/>
  </head>
  <body class="github-font-standard">
    <section class="fullscreen">
      <div class="background" style="background-image: url('/random');"></div>
      <div class="center-object">
        <section class="me">
          <img draggable="false" src="ahegao.png" class="image" width="211.67" height="99">
          <span class="undertitle">Start your day with a lovely ahegao ~<br><i>Images in API: <b>${data.length}</b></i></span>
        </section>
        <div class="buttons">
          <a href="random" class="btn animation white black-text" target="_blank">Random</a>
          <a href="api" class="btn animation white black-text" target="_blank">API</a>
          <a href="https://github.com/egecelikci/ahegao" class="btn animation white black-text" target="_blank">GitHub</a>
        </div>
      </div>
    </section>
  </body>
</html>`

console.log(html);
