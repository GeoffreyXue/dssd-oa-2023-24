import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "http://localhost:5500"
}))

app.get("/", (req, res) => {
    res.sendFile('GeoDS4Bolivia.geojson', { root: '.'})
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server listening on port ${port} 🚀`))