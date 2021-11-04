// import ts, { factory } from 'typescript'

// 配列生成
console.log("test")

// 
// export function generateCode <T extends ts.Node> (
//   nodes: ts.NodeArray<T>,
//   fileName: string = 'output.ts'
// ) {
//   const resultFile = ts.createSourceFile(
//     fileName,
//     '',
//     ts.ScriptTarget.ESNext,
//     false,
//     ts.ScriptKind.TS
//   )

//   const printer = ts.createPrinter({
//     newLine: ts.NewLineKind.LineFeed
//   })

//   return printer.printList(
//     ts.ListFormat.MultiLine,
//     nodes,
//     resultFile
//   )
// }