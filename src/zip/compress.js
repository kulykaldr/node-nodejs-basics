import { createReadStream, createWriteStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createGzip } from 'zlib'

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
        .pipe(createGzip())
        .pipe(createWriteStream(path.join(__dirname, 'files', 'archive.gz')))
        .on('finish', () => {
            console.log('finish')
        })
}

await compress()