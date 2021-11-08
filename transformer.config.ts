export interface configType {
  entry: string[],
  output: {
    dirName: string,
    fileName: string
  }
}

const config: configType = {
  entry: [
    './types/API.ts'
  ],
  output: {
    dirName: 'output',
    fileName: 'transformed.ts'
  }
}
export default config
