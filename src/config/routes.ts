import  { Router } from 'express'

import { pages } from '@controllers'

export const Routes = Router ()

Routes.get( '/', pages.index )