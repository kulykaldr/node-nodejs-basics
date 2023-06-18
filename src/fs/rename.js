import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const filePath = path.join(__dirname, 'files', 'wrongFilename.txt')
    const newFilePath = path.join(__dirname, 'files', 'properFilename.md')

    if (!fs.existsSync(filePath) || fs.existsSync(newFilePath)) {
        throw new Error('FS operation failed')
    }

    await fs.promises.rename(filePath, newFilePath)
}

await rename()