import { Meteor } from 'meteor/meteor';
import { run } from '../imports/server/geotiff.js';

Meteor.startup(() => {
  run();
});
