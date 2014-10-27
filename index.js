/**
 * Module Dependencies
 */

var views = require('co-views');

/**
 * Export `jade`
 */

module.exports = jade;

/**
 * Jade template rendering
 *
 * @param {String} root
 * @param {String} path
 * @return {Function}
 * @api public
 */

function jade(root, path) {
  if (1 == arguments.length) path = root, root = require('pkg-root');
  var render = views(path, { default: 'jade' });
  return function(view, locals) {
    locals = locals || {};
    locals.basedir = root;
    return render(view, locals);
  }
}
