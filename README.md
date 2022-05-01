# ethereum
Web3.0, Ethereum and more

### DApp

A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.

There is another layer sitting in the middle between frontend app and smart contract which makes communication possible.

### Smart Contract

Like lambda where it defines business rules. For example, in a simple transaction app, it might include business logic to handle money transfer/deposit/withdrawal.

Code is written in Solidity.

Once deployed, each smart contract will be given a token/id to uniquelly identify it. Deployment/interactions with smart contracts require user to pay in ethers. The amount aligns with contract's size.

#### How to update Smart Contract

Smart Contract is immutable meaning it cannot be modified once deployed. This nature makes update challenging. One way to circumvent it is to use a proxy pattern.

1. Define an address in the state. Have contract A point to another contract B where business rules is defined
2. When update is needed, in the updated contract C, modify the state to re-point from B to C.
3. Now your call is still made to contract A however it delegates the call to contract C.

### Ethereum

A platform where you can deploy your smart contracts. It's powered by blockchain. Any addition of blocks to the chain will be handled by a node of the network and changes will be propagated and synced to other nodes on the same network.

### Web3.0

DApp embodies the core of Web3.0. A different model than Web2.0 where servers are centralised.

See [more](https://codluck.com/the-architecture-of-a-web-3-0-application-dapps/)
