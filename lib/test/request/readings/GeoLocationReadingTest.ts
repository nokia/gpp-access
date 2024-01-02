/*
  (c) 2020 Open AR Cloud
  This code is licensed under MIT license (see LICENSE.md for details)
*/

import chai from 'chai';

import GeoLocationReading from '../../../request/readings/GeoLocationReading';

const expect = chai.expect;

const lat = 0.0;
const lon = 0.0;
const alt = 0;
const accuracy = 0;
const altAccuracy = 0;
const heading = 0;
const speed = 0;

const defaultJson = `"latitude":${lat},"longitude":${lon},"altitude":${alt},"accuracy":${accuracy},"altitudeAccuracy":${altAccuracy},"heading":${heading},"speed":${speed}}`;

let reading;

describe('GeoLocationReadingTest', () => {
    describe('constructor', () => {
        it('expect provided parameters', () => {
            reading = new GeoLocationReading(lat, lon, alt, accuracy, altAccuracy, heading, speed);
            expect(JSON.stringify(reading)).to.be.equal(`{${defaultJson}`);
        });
    });
});
