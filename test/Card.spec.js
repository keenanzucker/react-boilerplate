'use strict';

import mongoose from 'mongoose';
import { expect } from 'chai';
import Card from '../models/Card';
import _ from 'underscore';

function clearDB(cb) {
    for (var i in mongoose.connection.collections)
        mongoose.connection.collections[i].remove(function() {});
    cb();
}

describe('Card: models', () => {
    let DUT;

    before(done => {
        let cb = (err) => {
            if (err) throw err;
            done();
        };
        if (mongoose.connection.readyState === 0) {
            mongoose.connect('mongodb://localhost/test', cb);
        }
    });

    after(done => {
        clearDB(done);
        mongoose.disconnect();
    });

    beforeEach(done => {
        Card.makeCard(c => {
            DUT = c;
            done();
        });
    });

    afterEach(done => {
        Card.remove({_id: DUT._id}, done);
    });

    it('#makeCard', (done) => {
        expect(DUT.map).to.have.lengthOf(8);
        expect(DUT.habitat).to.equal(-1);
        expect(DUT.superDefender).to.be.null;
        expect(DUT.author).to.be.empty;
        done();
    });

    it('#setsHabitat', (done) => {
        expect(DUT.habitat).to.equal(-1);
        Card.setHabitat(DUT._id, 0, (updated) => {
            expect(updated.habitat).to.equal(0);
            done();
        });
    })
});