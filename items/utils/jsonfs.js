import * as fs from 'fs';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export function read(filename) {
  return new Promise((fulfill, reject) => {
    readFile(filename, 'utf8').done(function(res) {
      try {
        fulfill(JSON.parse(res));
      } catch (ex) {
        reject(ex);
      }
    }, reject);
  });
}

export function write(filename, obj, opts = { spaces: 0 }) {
  const jsonStr = JSON.stringify(obj, null, opts.spaces);

  return writeFile(filename, jsonStr, 'utf8');
}
