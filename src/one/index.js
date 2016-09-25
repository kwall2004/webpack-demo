module.exports = {
  path: 'one',

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./One'));
    });
  },

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./oneA')
      ]);
    });
  }
};
