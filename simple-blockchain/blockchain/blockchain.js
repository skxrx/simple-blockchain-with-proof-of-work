const hash = require('object-hash')

class Blockchain {
  constructor() {
    //Create chain
    this.chain = []

    //Transaction
    this.currentTransactions = []
  }

  addBlock(previousHash) {
    let block = {
      index: this.chain.length + 1,
      timestamp: Date.now(),
      transactions: this.currentTransactions,
      hash: null,
      previousHash,
    }
    //Add hash
    this.hash = hash(block)
    //Add block to chain
    this.chain.push(block)
    this.currentTransactions = []
    return block
  }

  addTransaction(sender, recipient, amount) {
    this.currentTransactions.push({ sender, recipient, amount })
  }

  lastBlock() {
    return this.chain.slice(-1)[0]
  }

  isEmpty() {
    return this.chain.length === 0 ? true : false
  }
}

module.exports = Blockchain
