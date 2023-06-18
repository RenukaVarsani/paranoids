const { sq } = require("./db");
const { DataTypes } = require("sequelize");

const Image = sq.define("Image" , {
  
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }
)


const Video = sq.define("Video" , {
  
  title: DataTypes.STRING,
  text: DataTypes.STRING
}
)

const Comment = sq.define("comment" , {
  title: DataTypes.STRING,
  commentableId: DataTypes.INTEGER,
  commentableType: DataTypes.STRING
})
/**const Post = sq.define("paranoid", {
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

const Tag = sq.define("tag", {
  name: {
    type: DataTypes.STRING,
  }

});**/

sq.sync({alter:true})


module.exports = Image;
module.exports = Video;
module.exports = Comment;
//module.exports = Post;
//module.exports = Tag;