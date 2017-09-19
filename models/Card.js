'use strict';

var mongoose = require('mongoose');
var _ = require('underscore');

mongoose.Promise = global.Promise;
var cardSchema = mongoose.Schema({
    habitat: Number,
    lifespan: Number,
    size: {
        feet: Number,
        inches: Number
    },
    domain: Number,
    trophicLevel: Number,
    superDefender: Boolean,
    nocturnal: Boolean,
    name: String,
    title: String,
    description: String,
    map: [Boolean],
    image: String,
    author: String
});

cardSchema.statics.makeCard = function(cb) {
    var newCard = {
        habitat: -1,
        lifespan: -1,
        size: {
            feet: -1,
            inches: -1
        },
        domain: -1,
        trophicLevel: -1,
        superDefender: null,
        nocturnal: null,
        name: '',
        title: '',
        description: '',
        map: [false, false, false, false, false, false, false, false],
        image: '',
        author: ''
    };

    this.create(newCard, (err, card) => {
        if (err) return console.error(err);
        cb(card);
    });
};

cardSchema.statics.setHabitat = function(id, habitat, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {habitat: habitat}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update habitat on card', id, habitat, err);
            cb(card);
        }
    );
};

module.exports = mongoose.model('Card', cardSchema);
