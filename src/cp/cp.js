import { spawn } from 'node:child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const scriptPath = path.join(__dirname, 'files', 'script.js')
    const cp = spawn('node', [scriptPath, ...args])

    cp.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
    })

    cp.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
    })

    cp.on('close', (code) => {
        console.log(`child process exited with code ${code}`)
    })

    cp.on('error', (err) => {
        console.log(`error: ${err.message}`)
    })
}

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3'])
