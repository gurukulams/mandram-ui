import { glob } from 'glob';
import path from 'node:path';

export default glob.sync('src/js/*.js').map(file => ({
  input: file,
  output: {
    file: `site/static/js/${path.basename(file, '.js')}-bundle.js`,
    format: 'esm',
    sourcemap: true
  }
}));