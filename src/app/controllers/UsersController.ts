import { Request, Response } from 'express'

export class UsersController {
	index (req: Request, res: Response): void {
		res.json ([
			{'name': 'Sam'},
			{'name': 'Lopes'},
			{'name': 'Agostinho'}
		])
	}


	async create () {}
}
