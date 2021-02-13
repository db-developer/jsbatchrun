/**
 *	index.js: @org.slashlib/jsbatchrun/npm
 *
 *  @module jsbatchrun/npm
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  lang:                 require( "jsbatch-lang" ),
  dependency:           require( "./dependency" ),
  install:              require( "./install"    )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS =  {
  EXPORTS:              "exports",
  NPM:                  "npm"
};

/**
 *  Registry for npm commands
 *  @ignore
 */
const _REGISTRY = _m.lang.registry( _STRINGS.NPM );

// dependency
Object.defineProperty( _REGISTRY.cmd, _m.dependency.id,  {
  value:    _m.dependency.invoke,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( _REGISTRY.help, _m.dependency.id, {
  value:    _m.dependency.help,
  writable: false, enumerable: true, configurable: false });

// install
Object.defineProperty( _REGISTRY.cmd, _m.install.id,     {
  value:    _m.install.invoke,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( _REGISTRY.help, _m.install.id,    {
  value:    _m.install.help,
  writable: false, enumerable: true, configurable: false });

// Module exports:
Object.defineProperty( module, _STRINGS.EXPORTS,         {
  value:    _REGISTRY,
  writable: false, enumerable: true, configurable: false });
