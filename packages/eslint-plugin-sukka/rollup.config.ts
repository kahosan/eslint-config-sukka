import { swc } from 'rollup-plugin-swc3';
import { dts } from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'rollup';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';

export default defineConfig([{
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs', format: 'cjs' },
    { file: 'dist/index.js', format: 'cjs' },
    { file: 'dist/index.mjs', format: 'esm' }
  ],
  plugins: [
    nodeResolve({
      exportConditions: ['import', 'require', 'default']
    }),
    commonjs({
      esmExternals: true
    }),
    alias({
      entries: [
        { find: 'lodash', replacement: 'lodash-unified' }
      ]
    }),
    json(),
    swc({
      minify: false,
      jsc: {
        minify: {
          mangle: false,
          compress: false,
          module: false
        }
      }
    })
  ],
  external: ['eslint']
}, {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.d.ts'
  },
  plugins: [
    dts()
  ]
}]);
