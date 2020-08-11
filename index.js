'use strict'

const chalk = require('chalk')

function todo (args) {
  const { title } = this
  const strs = args.join(' ')
  hexo.on('exit', () => {
    const msg = `${chalk.yellow('TODO')}  ${chalk.cyan(title)} - ${strs}`
    console.log(msg)
  })
  return `TODO  ${strs}`
}

hexo.extend.tag.register('todo', todo, { ends: false })
