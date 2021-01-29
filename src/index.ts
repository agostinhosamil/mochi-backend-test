import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { Routes } from './config/routes'

const app = express()

app.use(Routes)

app.listen(3333, () => 
	console.log('server running..!')
)
