// const assert = require('assert');
//
// const expect = require('chai').expect
import {agent as request} from "supertest";
import {expect} from 'chai'
// const request = require('supertest');
// const app = require('../dist/main')
import server from '../../main'


describe('Unit testing the /getBitcoinInfo route', () => {

    it('should return 404 status', async () => {
        request(server)
            .get('/getBitcoinInfo')
            .set('Content-Type', 'multipart/form-data')
            // .type('form')
            .field("currency", 'eee').then(result => {

            expect(result.statusCode).to.equal(404)
            expect(result.body.message).to.equals("Sorry, your requested currency EEE is not supported or is invalid")
        }).catch(e => {
            throw e
        })
    })


    it('should return OK status', async () => {
        request(server)
            .get('/getBitcoinInfo')
            .set('Content-Type', 'multipart/form-data')
            // .type('form')
            .field("currency", 'usd').then(result => {
            expect(result.statusCode).to.equal(200)
        }).catch(e => {
            throw e
        })
    })
})


