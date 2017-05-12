# Cinnode

This allows Cinnamon extensions (xlets) to run in a pseudo NodeJS environment with ES2015 support via [babel-standalone](https://github.com/babel/babel-standalone). This is currently for testing.

## Integrating with xlets

- Copy this project into your xlet's directory.
- Rename ```applet.js``` (or its corresponding xlet name) to an alternative name such as ```__applet.js```.
- In this project's ```applet.js``` file, find the declaration of the ENTRY_FILE constant, and change it your xlet's renamed entry file.
- Uncomment the first import line of ```applet.js```.
- In your entry file, replace the ```main``` function with an exported function, so it looks like this:

```js
let [metadata, orientation, panel_height, instance_id] =  global['applet_uuid@author'];

module.exports = (function main(metadata, orientation, panel_height, instance_id) {
  return new MyApplet(metadata, orientation, panel_height, instance_id);
})(metadata, orientation, panel_height, instance_id)
```
We are passing the initial parameters of ```main``` to our Babel transpiled instance via the global context.

## Todo

- Add tests for all Node API polyfills.