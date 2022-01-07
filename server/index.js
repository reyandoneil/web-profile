const expres = require('express')
const app = expres()
const PORT = 5000 || 5001

app.use(expres.json())

app.listen(PORT, () => console.log(`app listening in PORT:${PORT}`))