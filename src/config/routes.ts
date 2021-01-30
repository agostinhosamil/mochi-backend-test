import { Router } from 'express'

import { pages, users } from '@controllers'

export const Routes = Router ()

Routes.get( '/', pages.index )

Routes.post( '/users', users.create )
Routes.get( '/users', users.index )