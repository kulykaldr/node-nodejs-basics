import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import { Worker } from 'worker_threads'

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const workerPath = path.join(__dirname, 'worker.js')
    const systemCpuCores = os.cpus()

    const results = []
    const workers = []

    const n = 10
    for (let i = 0; i < systemCpuCores.length; i++) {
        workers.push(new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: n + i
            })

            worker.on('message', (msg) => {
                console.log(msg)
                results.push({
                    status: 'resolved',
                    data: msg
                })
            })

            worker.on('error', (err) => {
                results.push({
                    status: 'error',
                    data: null
                })
                reject(err)
            })

            worker.on('exit', (code) => {
                resolve()
            })
        }))
    }

    await Promise.all(workers)

    console.log(results)
}

await performCalculations()