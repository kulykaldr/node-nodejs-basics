import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const dirPath = path.join(__dirname, 'files')
    const newDirPath = path.join(__dirname, 'files_copy')

    if (fs.existsSync(newDirPath)) {
        throw new Error('FS operation failed')
    }

    await fs.promises.mkdir(newDirPath, { recursive: true })
    const dir = await fs.promises.opendir(dirPath)

    for await (const file of dir) {
        await fs.promises.copyFile(path.join(dirPath, file.name), path.join(newDirPath, file.name))
    }
}

await copy()
