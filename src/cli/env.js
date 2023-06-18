const parseEnv = () => {
    const result = []
    const keys = Object.keys(process.env).filter(key => key.startsWith('RSS_'))
    keys.forEach(key => {
        result.push(`${key}=${process.env[key]}`)
    })
    console.log(result.join('; '))
}

parseEnv()