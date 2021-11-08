import ts, { factory } from 'typescript'
import * as fs from 'fs'

import config from '../transformer.config'

transform()

export function transform() {
  const files = config.entry
  const program = ts.createProgram(files, {})

  // 読み込みファイルが0だったら終了
  if (files.length === 0) { return false }

  // まず出力ファイルを作成
  const outputPath = config.output.dirName + '/' + config.output.fileName

  // 出力ディレクトリが存在しなかったらディレクトリを作る
  if(!fs.existsSync(config.output.dirName)){
    fs.mkdirSync(config.output.dirName)
  }

  // 出力ファイルを初期化
  fs.writeFileSync(outputPath, '')

  // 読み込みファイル全てで処理を行う
  files.forEach(file => {
    // 読み込んだファイルからASTを作成
    const source = program.getSourceFile(file)

    // ASTが存在したら
    if (source) {
      // ASTをtransformer関数で変換
      const result = ts.transform(source, [transformer])

      // プリンタを作成
      const printer = ts.createPrinter()

      // コードを出力し、ts.SourceFileとして出力
      const printFile = ts.createSourceFile('', '', ts.ScriptTarget.Latest)

      // 上記のts.SourceFile
      const code: string = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], printFile)
      fs.appendFileSync(outputPath, code)
    }
  })
}


export function transformer<T extends ts.Node>(context: ts.TransformationContext) {
  return (rootNode: T) => {
    function visit(node: ts.Node): ts.Node | null {

      // ここに処理内容を書いていく

      return ts.visitEachChild(node, visit, context);
    }
    return ts.visitNode(rootNode, visit);
  }
};
