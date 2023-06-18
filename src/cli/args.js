const parseArgs = () => {
    const result = []
    const args = process.argv.slice(2)
    args.forEach((el, i) => {
        if (el.startsWith('--')) {
            result.push(`${el.replace('--', '')} is ${args[i + 1]}`)
        }
    })
    console.log(result.join(', '))
}


parseArgs()