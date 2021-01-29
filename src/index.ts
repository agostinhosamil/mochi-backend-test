import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { Routes } from './config/routes'

const app: express.Application = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(Routes)

app.listen(process.env.PORT || 3333, () => 
	console.log('server running..!')
)
