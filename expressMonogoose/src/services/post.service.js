const Post = require('../models/post.model')

class PostService {

    //apis to talk to database

    async save({ title, content }) {
        const newPost = new Post({ title, content })
        //call method of mongoose
        await newPost.save()
        return newPost
    }

    async findAll() {
        const posts = await Post.find({})
        return posts
    }
    async findById(id) {
        const post = await Post.findOne({ _id: id })
        return post
    }
    //update
    async update(id, { title, content }) {
        const post = await Post.findOne({ _id: id })
        if (!post) {
            throw Error()
        }
        if (title) {
            //update title
            post.title = title
        }
        if (content) {
            post.content = content
        }
        await post.save()
        return post
    }

    async remove(id){
        const post = await Post.findOne({_id:id})
        if(post){
            await Post.deleteOne({_id:id})
        }
        else {
            throw Error()
        }
    }

}

module.exports = new PostService()