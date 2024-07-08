const request = require('supertest')
const app = require('../../loaders/index')

describe('Articles test',()=>{
  test('Should get all articles',async()=>{
    const response = await request(app.express).get('/api/v1/articles')
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual([{"__v": 0, "_id":"667b68eec9a4785e717a428c", "author": "amy", "comments": ["sleepy"], "content": "ragdoll cat", "likedBy": [], "status": "DRAFT", "title": "dun"}, {"__v": 0, "_id": "667b6959cc530684ce5bb5a3", "author": "amy", "comments": ["sleepy"], "content": "ragdoll cat", "likedBy": [], "status": "DRAFT", "title": "dun"}, {"__v": 0, "_id": "667b6989c0607077b4a5e107", "author": "amy", "comments": ["sleepy"],"content": "ragdoll cat", "likedBy": [], "status": "DRAFT", "title": "dun"}, {"__v": 0, "_id": "667b6a2262ec1452be355888", "author": "amy", "comments": ["sleepy"], "content": "ragdoll cat", "likedBy": [], "status": "DRAFT", "title": "dun"}, {"__v": 0, "_id":"667b6af31642e114118d2387", "author": "amy", "comments": ["sleepy"], "content": "ragdoll cat", "likedBy": [], "status": "DRAFT", "title": "dun"}])
  })
})