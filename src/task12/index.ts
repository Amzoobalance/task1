import * as csv from 'csvtojson'
import { createReadStream, createWriteStream } from 'fs'

const csvFilePath = './src/task12/csv/nodejs-hw1-ex2.csv'
const outputPath = './src/task12/format/nodejs-hw1-ex2.txt'

const readStream = createReadStream(csvFilePath)
const writeStream = createWriteStream(outputPath)

readStream
	.on('error', (error: Error) => console.log(error))
	.pipe(csv({ delimiter: ';', ignoreEmpty: true, headers: ['book', 'author', 'amount', 'price'] }))
	.pipe(writeStream)
