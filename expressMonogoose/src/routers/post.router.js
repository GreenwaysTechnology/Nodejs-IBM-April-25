const express = require('express')
const postService = require('../services/post.service')
const postRouter = express.Router()


postRouter.post('/', async (req, res) => {
    const post = req.body
    try {
        const savedPost = await postService.save(post)
        res.status(201).json(savedPost)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

postRouter.get('/', async (req, res) => {
    try {
        const posts = await postService.findAll()
        res.json(posts)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

postRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const post = await postService.findById(id)
        if (post) {
            res.json(post)
        } else {
            res.json({ message: 'No Post Available' })
        }
    }
    catch (err) {
        res.status(400).json({ err })

    }
})

postRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const postInput = req.body
    try {
        const post = await postService.update(id, postInput)
        res.json(post)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})
postRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await postService.remove(id)
        res.status(204).send()
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

module.exports = postRouter

