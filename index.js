const { json } = require("body-parser");
const express = require("express");
const Post = require("./model");
const Tag = require("./model");
const app = express();
app.use(express.json());


Tag.belongsToMany(Post, {
  through: "post_tag",
  as:"posts",
  foreignKey: "post_id"
});
Post.belongsToMany(Tag, {
  through: "post_tag",
  as:"tags",
  foreignKey: "tag_id"
});

app.get("/data", async (req, res) => {
  try {
    const tags = await Tag.findAll( {
      include: [
        {
          model:Post,
          as: "tags",
          through:{
            attributes:[],
          }
        }
      ]
    });

    res.send(tags);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(8080, () => {
    console.log("server running");
  });
