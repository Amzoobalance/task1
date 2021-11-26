import { createInterface } from 'readline'

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
})

rl.on('line', function (line) {
	let reverseLine: string = line.split('').reverse().join('')
	console.log(reverseLine)
})
