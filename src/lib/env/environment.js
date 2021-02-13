//
/**
 *	environment.js: @org.slashlib/jsbatchrun/env
 *
 *  @module jsbatchrun/env/environment
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  env.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  CLASS_ENVIRONMENT:      "Environment"
};

class Environment {
  constructor( values ) {
    if (( values !== null ) && ( values !== undefined )) {
          const environment = this;
          Object.keys( values ).forEach(( key ) => {
            Object.defineProperty( environment, key, {
              value:    values[ key ],
              writable: false, enumerable: true, configurable: false });
          });
    }
  }
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.CLASS_ENVIRONMENT, {
  value:    Environment,
  writable: false, enumerable: true, configurable: false });
