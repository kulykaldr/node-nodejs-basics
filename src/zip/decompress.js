import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createGunzip } from 'zlib'

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    createReadStream(path.join(__dirname, 'files', 'archive.gz'))
        .pipe(createGunzip())
        .pipe(createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt')))
        .on('finish', () => {
            console.log('finish')
        })
}

await decompress()