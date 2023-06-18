const { sq } = require("./db");
const { DataTypes } = require("sequelize");
const Post = sq.define("post", {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  }
});

const Tag = sq.define("tag", {
  name: {
    type: DataTypes.STRING,
  }

});

sq.sync({alter:true})

module.exports = Post;
module.exports = Tag;