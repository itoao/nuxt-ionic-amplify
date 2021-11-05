import ts, { factory } from 'typescript'
import * as fs from 'fs'

import config from '../transformer.config'

transform()

export function transform() {
  const files = config.entry
  const program = ts.createProgram(files, {})

  if (files.length === 0) { return false }

  files.forEach(file => {

    const source = program.getSourceFile(file)
    if (source) {
      const result = ts.transform(source, [transformer])

      const printer = ts.createPrinter()

      const printFile = ts.createSourceFile('test.ts', '', ts.ScriptTarget.Latest)
      const code = printer.printNode(ts.EmitHint.Unspecified, result.transformed[0], printFile)
      fs.writeFile(__dirname + '/dist.ts', code, err => { throw err })
    }
  })
}
export function transformer<T extends ts.Node>(context: ts.TransformationContext) {
  return (rootNode: T) => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isUnionTypeNode(node!)) {
        return createTypeReferenceUnionNode(node)
      }
      if (ts.isTypeLiteralNode(node)) {
        return createTypeReferenceNode(node)
      }
        // if (ts.isTypeAliasDeclaration(node)) {
        //   if (ts.isTypeLiteralNode(node.type)) {
        //     ts.forEachChild(node.type, node_child => {
        //       if (ts.isPropertySignature(node_child)) {
        //         if (ts.isUnionTypeNode(node_child.type!)) {
        //           return createTypeReferenceUnionNode(node_child.type)
        //         }
        //         if (ts.isTypeLiteralNode(node_child.type!)) {
        //           return createTypeReferenceNode(node_child.type)
        //         }
        //       }
        //     })
        //   }
        // }

      return ts.visitEachChild(node, visit, context);
    }
    return ts.visitNode(rootNode, visit);
  }
};


/**
 * TypeLiteralNodeをTypeReferenceNodeに変換する関数
 * できなかった場合は既存のTypeLiteralNodeを返却する
 */
export function createTypeReferenceNode(typeNode: ts.TypeLiteralNode): ts.TypeReferenceNode | ts.TypeLiteralNode {
  typeNode.members.forEach(member => {
    if (ts.isPropertySignature(member)) {
      if (ts.isIdentifier(member.name)) {
        if (member.name.escapedText === "___typename") {
          if (ts.isLiteralTypeNode(member.type!)) {
            if (ts.isStringLiteral(member.type.literal)) {
              return factory.createTypeReferenceNode(member.type.literal.text)
            }
          }
        }
      }
    }
  })
  return typeNode
}

export function createTypeReferenceUnionNode(typeNode: ts.UnionTypeNode) {
  let typeNodes: ts.TypeNode[] = []
  typeNode.types.forEach(type => {
    if (ts.isTypeLiteralNode(type)) {
      const typeReferenceNode = createTypeReferenceNode(type)
      typeNodes.push(typeReferenceNode)
    } else {
      typeNodes.push(type)
    }
  })

  return factory.createUnionTypeNode(typeNodes)
}
