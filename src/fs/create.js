import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const create = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const filePath = path.join(__dirname, 'files', 'fresh.txt')

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed')
    }
    await fs.promises.writeFile(filePath, 'I am fresh and young')
}

await create()