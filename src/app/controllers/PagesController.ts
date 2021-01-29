import { Request, Response } from 'express'

export class PagesController {
	index (req: Request, res: Response): void {
		res.end('Hello, World2..!')
	}
}
