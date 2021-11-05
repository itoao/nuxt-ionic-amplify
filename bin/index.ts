import ts, { factory } from 'typescript'
import * as fs from 'fs'

import config from '../transformer.config'

transform()

export function transform() {
  const files = config.entry
  const program = ts.createProgram(files, {})
  const checker = program.getTypeChecker()

  if (files.length === 0) { return false }

  files.forEach(file => {
    const source = program.getSourceFile(file)
    if (source) {

    }
  })

}
