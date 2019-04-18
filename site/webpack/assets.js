export default function(context, pubPath) {
  return [
    { from: `${context}/assets/**`, to: `` },
    { from: `${context}/main.css`, to: `main.css` }
  ];
}
