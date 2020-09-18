#api node
Versão configurada para não utilizar banco.
Para utilizar versão com banco, alterar arquivo app.js, linha 7:
<pre>var indexRouter = require('./routes/index');</pre>
para
<pre>var indexRouter = require('./routes/indexBD');</pre>