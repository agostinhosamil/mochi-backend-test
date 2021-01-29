import path from 'path'
import fs from 'fs'

const currentDirectoryFileList = fs.readdirSync(__dirname)

function upperCaseFirstChar (str): string {
	return str.charAt(0).toLowerCase() + (
		str.substring(1, str.length)
	)
}

function stripControllerNameExtension (str): string {
	return upperCaseFirstChar (
		str.replace (/(\.(j|t)s)$/i, '')
	)
}

for (let i = 0; i < currentDirectoryFileList.length; i++) {
	let controllerPropName = currentDirectoryFileList[ i ].replace (
		/(\.(j|t)s)$/i, ''
	)
	let controllerName = currentDirectoryFileList[ i ].replace (
		/((Controller)?\.(j|t)s)$/i, ''
	)
	let controllerCore = require (
		path.resolve( __dirname, currentDirectoryFileList[ i ] )
	)

	if ('index' !== controllerName) {
		try {

			exports[ stripControllerNameExtension( controllerName ) ] = (
				new controllerCore[ controllerPropName ]
			)
		} catch (err) {
			// ...
			console.log (err)
		}
	}
}
