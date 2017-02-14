var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

describe('Shopping List', function() {
    // it('should list items on GET', function(done) {
    // chai.request(app)
    //     .get('/items')
    //     .end(function(err, res) {
    //         should.equal(err, null);
    //         res.should.have.status(200);
    //         res.should.be.json;
    //         res.body.should.be.a('array');
    //         res.body.should.have.length(3);
    //         res.body[0].should.be.a('object');
    //         res.body[0].should.have.property('id');
    //         res.body[0].should.have.property('name');
    //         res.body[0].id.should.be.a('number');
    //         res.body[0].name.should.be.a('string');
    //         res.body[0].name.should.equal('Broad beans');
    //         res.body[1].name.should.equal('Tomatoes');
    //         res.body[2].name.should.equal('Peppers');
    //         done();
    //     });
    // });
    // it('should add an item on POST', function(done) {
    // chai.request(app)
    //     .post('/items')
    //     .send({'name': 'Kale'})
    //     .end(function(err, res) {
    //         should.equal(err, null);
    //         res.should.have.status(201);
    //         res.should.be.json;
    //         res.body.should.be.a('object');
    //         res.body.should.have.property('name');
    //         res.body.should.have.property('id');
    //         res.body.name.should.be.a('string');
    //         res.body.id.should.be.a('number');
    //         res.body.name.should.equal('Kale');
    //         done();
    //     });
    // });
    // it('should edit an item on put given an id', function(done) {
    // chai.request(app)
    //     .put('/items/0')
    //     .send({'name': 'White Beans'})
    //     .end(function(err, res) {
    //         res.should.have.status(201);
    //         res.should.be.json;
    //         res.body[0].id.should.be.a('number');
    //         res.body[0].name.should.be.a('string');
    //         res.body[0].name.should.equal('White Beans');
    //         done();
    //     })
    // });
    // it('should delete an item on delete');
    // it('should not add an already existing item on post');
    // it('should not post without body data on post');
    // it('should not edit item without id in endpoint on put');
    // it('should not edit an item without body data on put');
    // it('should delete an item that does not exist on delete');
    // it('should not delete an item without id in endpoint on delete');
    // it('should only post with valid json on post');
});