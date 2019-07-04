import * as express from 'express'
import * as cors from 'cors'
import * as mongoose from 'mongoose'

class App {
	public express: express.Application

	public constructor () {
		this.express = express()
	}

	private middlewares (): void {
		this.express.use(express.json())
		this.express.use(cors())
	}

	private database (): void {
		mongoose.connect('mongodb://localhost:27017/tsnode', {
			useNewUrlParser: true
		})
	}

	private routes (): void {
		this.express.get('/', (req, res) => {
			return res.send('Hello World')
		})
	}
}
