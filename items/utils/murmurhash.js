import murmurHash3 from 'murmurhash3js-revisited';

export default function murmurhash3(str) {
  return murmurHash3.x64.hash128(Buffer.from(str));
}
