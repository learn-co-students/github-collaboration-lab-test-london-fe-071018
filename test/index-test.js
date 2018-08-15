

const jsdom = require('jsdom');
const path = require('path');
var chai = require('chai');
chai.use(require('chai-fs'));

describe('this lab', () => {

    it('has a folder named my-repository', () => {
      chai.assert.isDirectory('./my-repository',  'no folder name "my-repository" was found');
    })

    it('has a README.md file in the my-repository folder', () => {
      chai.assert.pathExists('./my-repository/README.md',  'no README.md file found within "/my-repository"');
    })

})

describe('the local repository', () => {

})
