const { sq } = require("./db");
const { DataTypes } = require("sequelize");
const Post = sq.define("paranoid", {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
    
},
{
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deletedAt',
  paranoid: true,
  timestamps: true,
},
);

/**const Tag = sq.define("tag", {
  name: {
    type: DataTypes.STRING,
  }

});**/

sq.sync({alter:true})

module.exports = Post;
//module.exports = Tag;