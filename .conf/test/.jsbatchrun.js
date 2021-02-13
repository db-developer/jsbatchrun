/**
 *  © 2021, db-developer.
 *  Licensed under the MIT license.
 */
const path = require( "path" );

module.exports = function( register, args, log ) {
  try{ register(); } catch( error ) { log( error ); }
  const projectdirs = [
    path.join( process.cwd(), "src", "test", "template", "project-00" ),
    path.join( process.cwd(), "src", "test", "template", "project-01" ),
    path.join( process.cwd(), "src", "test", "template", "project-02" ),
    path.join( process.cwd(), "src", "test", "template", "project-03" ),
    path.join( process.cwd(), "src", "test", "template", "project-13" ),
    path.join( process.cwd(), "src", "test", "template", "project-14" ),
    path.join( process.cwd(), "src", "test", "template", "project-15" ),
    path.join( process.cwd(), "src", "test", "template", "project-16" ),
    path.join( process.cwd(), "src", "test", "template", "project-17" )
  ];
  return { foo: true, bar: "buzz", projectdirs };
}
