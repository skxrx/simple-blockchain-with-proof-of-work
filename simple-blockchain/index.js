const hash = require('object-hash')
const Blockchain = require('./blockchain/blockchain.js')

const blockchain = new Blockchain()

const PROOF = 228
const validProof = (proof) => {
  const guessHash = hash(proof)
  console.log(`hashing: ${guessHash}`)
  return guessHash === hash(PROOF)
}
const proofOfWork = () => {
  let proof = 0
  while (true) {
    if (!validProof(proof)) {
      proof++
    } else break
  }
  return proof
}

if (proofOfWork() === PROOF) {
  blockchain.addTransaction('testSender', 'testName', 10)
  let previousHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null
  blockchain.addBlock(previousHash)
}

console.log(`### ${proofOfWork()} <||> ${PROOF}`)
console.log(`chain: `, blockchain.chain)
console.log('block added')
