'use strict';

const mockfs = require('mock-fs')
    , chai   = require('chai')
    , assert = chai.assert
    , expect = chai.expect
    , fs     = require('fs');

const helpers = require('../lib/helpers');

describe('helpers.mkdirp', () => {
    it('should be able to make a directory path recursively', () => {
        mockfs({
            'stagingDir': {}
        });
        const targetPath = './stagingDir/var/logs';
        expect(fs.existsSync(targetPath)).to.equal(false);
        helpers.mkdirp(targetPath);
        expect(fs.existsSync(targetPath)).to.equal(true);
        mockfs.restore();
    });
});

describe('helpers.initialiseLog', () => {
    it('should be able to create a log file at a valid directory', () => {
        mockfs({
            'stagingDir': {}
        });
        const targetFile = './stagingDir/sample.log';
        expect(fs.existsSync(targetFile)).to.equal(false);
        helpers.initialiseLog(targetFile);
        expect(fs.existsSync(targetFile)).to.equal(true);
        mockfs.restore();
    });

    it('should be able to create a log file at a non-existent directory', () => {
        mockfs({
            'stagingDir': {}
        });
        const targetFile = './stagingDir/newDir/sample.log';
        expect(fs.existsSync(targetFile)).to.equal(false);
        helpers.initialiseLog(targetFile);
        expect(fs.existsSync(targetFile)).to.equal(true);
        mockfs.restore();
    });
    
    it('should fail when given an invalid directory', () => {
        mockfs({
            'stagingDir': {}
        });
        const targetFile = ['this isn\'t valid'];
        expect(fs.existsSync(targetFile)).to.equal(false);
        helpers.initialiseLog(targetFile);
        expect(fs.existsSync(targetFile)).to.equal(false);
        mockfs.restore();
    });

    it('should fail when given an null/undefined cosntructor value', () => {
        mockfs({
            'stagingDir': {}
        });
        expect(helpers.initialiseLog()).to.equal(false);
        mockfs.restore();
    });
    
    it('should return true when pointed to an existing log file', () => {
        mockfs({
            'test.log': 'test content'
        });
        const targetFile = './test.log';
        expect(fs.existsSync(targetFile)).to.equal(true);
        expect(helpers.initialiseLog(targetFile)).to.equal(true);
        expect(fs.existsSync(targetFile)).to.equal(true);
        mockfs.restore();
    });

});

