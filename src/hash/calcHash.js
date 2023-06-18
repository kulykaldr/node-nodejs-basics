import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const text = fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8')
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
    const hashArray = Array.from(new Uint8Array(hash))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    console.log(hashHex)
}

await calculateHash()