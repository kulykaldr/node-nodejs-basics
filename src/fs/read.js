import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed')
    }

    const content = await fs.promises.readFile(filePath)
    console.log(content.toString())
}

await read()