const classRename = require('postcss-rename');
const variableRename = require('postcss-rename/variable');

module.exports = {
  plugins: [
    classRename({
      // options rename class
    }),
    variableRename({
      // options rename variable
    }),
  ],
};