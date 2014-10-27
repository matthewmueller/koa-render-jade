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
 * @return {Function}
 * @api public
 */

function jade(root) {
  return function(path) {
    var render = views(path, { default: 'jade' });
    return function(view, locals) {
      locals = locals || {};
      locals.basedir = root;
      return render(view, locals);
    }
  }
}

