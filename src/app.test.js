const app = require('./app');
const supertest = require('supertest');
const {describe} = require('jest-circus');
const request = supertest(app);

describe('/testNodeJS endpoint', ()=>{
    it('Should return a response', async()=>{
        const response = await request.get('/testNode');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Yes nodeJS testNode enpoint worked');
    })
})