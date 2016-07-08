const MetaCoinWhisked = require('../environments/test/contracts/MetaCoin.sol.js')
const Pudding = require('ether-pudding')

// load Web3, pudding, and contracts
Pudding.setWeb3(web3)
MetaCoinWhisked.load(Pudding)

contract('MetaCoin', function(accounts) {
  it('should return answer from .deployed() contract', function() {
    const meta = MetaCoin.deployed()
    return meta.GetAnswer()
      .then(data => assert.equal(data.toString(), '42'))
  })
})

describe('MetaCoinWhisked', function() {
  const accounts = web3.eth.accounts

  it('should return answer from whisked contract', function() {
    return MetaCoinWhisked.new({ from: accounts[0] })
      .then(meta => meta.GetAnswer())
      .then(data => assert.equal(data.toString(), '42'))
  })
})
