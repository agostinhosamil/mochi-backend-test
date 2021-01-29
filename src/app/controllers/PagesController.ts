import { Request, Response } from 'express'

export class PagesController {
	index (req: Request, res: Response): Response {
		return res.end('Hello, World2..!')
	}
}
