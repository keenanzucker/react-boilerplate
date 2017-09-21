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

cardSchema.statics.setLifespan = function(id, lifespan, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {lifespan: lifespan}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update lifespan on card', id, lifespan, err);
            cb(card);
        }
    );
};

cardSchema.statics.setDomain = function(id, domain, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {domain: domain}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update domain on card', id, domain, err);
            cb(card);
        }
    );
};

cardSchema.statics.setTrophicLevel = function(id, trophicLevel, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {trophicLevel: trophicLevel}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update trophicLevel on card', id, trophicLevel, err);
            cb(card);
        }
    );
};

cardSchema.statics.setName = function(id, name, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {name: name}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update name on card', id, name, err);
            cb(card);
        }
    );
};

cardSchema.statics.setTitle = function(id, title, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {title: title}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update title on card', id, title, err);
            cb(card);
        }
    );
};

cardSchema.statics.setDescription = function(id, description, cb) {
    this.findByIdAndUpdate(
        id,
        {$set: {description: description}},
        {$safe: true, upsert: false, new: true},
        (err, card) => {
            if (err) return console.error('Could not update description on card', id, description, err);
            cb(card);
        }
    );
};

module.exports = mongoose.model('Card', cardSchema);
