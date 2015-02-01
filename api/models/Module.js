/**
* Module.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true
    },

    services: {
      type: 'array',
      required: true,
      enum: [
        'alert',
        'automation',
        'geolocation',
        'mail',
        'multimedia',
        'news',
        'update',
        'weather'
      ]
    },

    protocol: {
      type: 'string',
      required: true,
      enum: [
        'rest',
        'zwave'
      ]
    } 

    active: {
      type: 'boolean',
      defaultsTo: true
    }

  }
};

