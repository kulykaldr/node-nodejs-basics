import { createReadStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

    const readStream = createReadStream(filePath)

    readStream.pipe(process.stdout)
}

await read()