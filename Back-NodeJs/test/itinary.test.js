process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST itinary', () => {
    //test sucess
    it('test une requetes valide', (done) => {
        let tmp = {
            "start":
            {
                "lat": 48.9551203,
                "lng": 2.3091952
            },
            "coords": [
                {
                    "lat": 48.9960813,
                    "lng": 2.3796245
                },
                {
                    "lat": 48.91667,
                    "lng": 2.5
                },
                {
                    "lat": 48.9917676,
                    "lng": 2.2585679
                }
            ],
            "len": 3
        }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('itinary')
                res.body.itinary.should.be.a('array')
                done();
            });
    });

    //test for property type
    it('test len = 0', (done) => {
        let tmp = {
            "start":
            {
                "lat": 48.9551203,
                "lng": 2.3091952
            },
            "coords": [
                {
                    "lat": 48.9960813,
                    "lng": 2.3796245
                }
            ],
            "len": 0
        }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('test si les coordonnées de depart sont valide', (done) => {
        let tmp = {
            "start":
            {
                "lat": "48.9551203",
                "lng": 2.3091952
            },
            "coords": [
                {
                    "lat": 48.9960813,
                    "lng": 2.3796245
                }
            ],
            "len": 1
        }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('test si le len == coords.lenght', (done) => {
        let tmp = {
            "start":
            {
                "lat": 48.9551203,
                "lng": 2.3091952
            },
            "coords": [
                {
                    "lat": 48.9960813,
                    "lng": 2.3796245
                }
            ],
            "len": 0
        }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it("Si le tableau d'itineraire est valide", (done) => {
        let tmp = {
            "start":
            {
                "lat": 48.9551203,
                "lng": 2.3091952
            },
            "coords": [
                {
                    "lat": 48.9960813,
                    "lng": "test"
                }
            ],
            "len": 1
        }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    //Test for missing primary property
    it('it should give an error Invalid request on empty object req', (done) => {
        let tmp = {}
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('it should give an error Invalid request on empty string req', (done) => {
        let tmp = ""
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('it should give an error "Invalid request on array req', (done) => {
        let tmp = []
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('it should give an error Invalid request on array of anythings', (done) => {
        let tmp = [2, 3]
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('it should give an error Invalid request on string of anythings', (done) => {
        let tmp = "test"
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('just have property: coords and len,', (done) => {
        let tmp = { start: [0, 0] }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('just have property: start and len,', (done) => {
        let tmp = { coords: [0, 0] }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('just have property: start and coords', (done) => {
        let tmp = { len: [0, 0] }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });
    it('just have property: len,', (done) => {
        let tmp = {
            start: [0, 0],
            coords: [0, 0]
        }
        chai.request(server)
            .post('/itinary')
            .send(tmp)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.eql("Invalid request");
                done();
            });
    });


}); 