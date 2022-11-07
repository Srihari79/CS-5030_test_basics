const request = require("supertest");

const app = require("./index");

describe("todo api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/todolist")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
});
   test("add todo /",(done)=>{
    request(app).post("/todoadd")
            .expect('Content-Type', /json/)
            .expect(200)
            // .expect(res.body.todo.length).toEqual(3)
            .end((err, res)=>{
                if(err) return done(err);
                
                return done();
            })
});
});
