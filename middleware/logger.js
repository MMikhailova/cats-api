
import chalk from 'chalk'

const logger = (req, res, next) =>
{
    const url = chalk.green(req.url)
    const status = chalk.yellow(res.statusCode)
    const method = chalk.red(req.method);
    console.log(`${url} ---${method}--- ${status}`);
    
    next()
}
export default logger