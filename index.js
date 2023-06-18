const { json } = require("body-parser");
const express = require("express");
const Post = require("./model");
//const Tag = require("./model");
const app = express();
app.use(express.json());


/**Tag.belongsToMany(Post, {
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
});**/

app.post("/create", async (req, res) => {
  try {
    const {  title,content} = req.body;
    const post = await Post.create({
      title,content
    });
    res.send(post);
  } catch (error) {
    res.send(error.message);
  }
});


app.get("/data", async (req, res) => {
  try {
    const post = await Post.findAll({
      paranoid:false
    });
    console.log(post);
    res.send(post);
  } catch (error) {
    console.log(error.message);
  }
});


app.get("/restore", async(req,res)=>{
  try {
    let post = await Post.restore({where:{id:1}})
console.log(post);
res.status(200).send(post)
  } catch (error) {
    console.log(error.message);
  }
})

app.delete("/remove", async (req, res) => {
  try {
    Post.destroy({ where: { id: 1 } });
    res.send("deleted");
  } catch (error) {
    console.log(error.message);
  }
});




app.listen(8080, () => {
    console.log("server running");
  });
