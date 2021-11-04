import ts, { factory } from 'typescript'

// ソースコードから AST に変換
// AST からソースコードに変換
export function generateCode <T extends ts.Node> (
  nodes: ts.NodeArray<T>,
  fileName: string = 'output.ts'
) {
  const resultFile = ts.createSourceFile(
    fileName,
    '',
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  )

  // AST をソースコードに復元
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed // 改行コード
  })

  // 定数 printer のルールで、リストを出力
  return printer.printList(
    ts.ListFormat.MultiLine,
    nodes,
    resultFile
  )
}

export function typeReferencer () {
  const arr = []
  
}

// AST から AST に変換（ここで、コンパクト化のロジックを書く）
  // 配列作成
    // 第一キーに __typename があれば、 作った配列に入れる（このとき、AST を触っている）
      // if(SourceFile.statements.TypeAliasDeclaration.type.members.name.escapedText == "__typename")
  // 