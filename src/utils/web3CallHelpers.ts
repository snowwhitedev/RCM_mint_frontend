import { JsonRpcProvider, StaticJsonRpcProvider } from '@ethersproject/providers'
import { BigNumber, Contract, ethers, utils } from 'ethers'

import { getBalanceNumber } from './bigNumberHelper'

export const getGasPrice = async (provider: StaticJsonRpcProvider) => {
  const gasPrice = await provider.getGasPrice()
  return ethers.utils.formatUnits(gasPrice, 'gwei')
}

export const getEthBalanace = async (provider: JsonRpcProvider, account: string) => {
  const balance = await provider.getBalance(account)
  return getBalanceNumber(balance)
}

export const getNFTBalance = async (contract: Contract, account: string) => {
  const balance = await contract.balanceOf(account)
  return balance.toString()
}

export const getTotalSupply = async (contract: Contract) => {
  const totalSupply = await contract.totalSupply()
  return totalSupply
}

export const getWalletOfOwner = async (contract: Contract, account: string) => {
  const res = await contract.walletOfOwner(account)
  const walletOfOwner = res.map((item: BigNumber) => {
    return item.toNumber()
  })

  return walletOfOwner as number[]
}

export const checkIsApprovedForAll = async (account: string, contract: Contract, operator: string) => {
  return await contract.isApprovedForAll(account, operator)
}

export const setApprovalForAll = async (contract: Contract, operator: string, approved = true) => {
  const txHash = await contract.setApprovalForAll(operator, approved)
  const receipt = await txHash.wait()
  return receipt.status
}

export const publicMint = async (rcmPunksContract: Contract, to: string, amount: number) => {
  const txHash = await rcmPunksContract.publicMint(to, amount, { value: BigNumber.from(amount).mul(BigNumber.from(10).pow(16)) })
  const receipt = await txHash.wait()

  return { status: receipt.status, txHash: receipt.transactionHash }
}

export const whiteListMint = async (rcmPunksContract: Contract, amount: number, deadline: number, sig: string) => {
  const txHash = await rcmPunksContract.whiteListMint(amount, deadline, sig, {
    value: BigNumber.from(amount).mul(BigNumber.from(10).pow(15)),
  })
  const receipt = await txHash.wait()

  return { status: receipt.status, txHash: receipt.transactionHash }
}

export const getTotalMintAmount = async (rcmPunksContract: Contract) => {
  const res = await rcmPunksContract.totalSupply()
  return res.toString()
}

export const getWhiteListMintPrice = async (rcmPunksContract: Contract) => {
  return await rcmPunksContract.whiteListPrice()
}

export const getPublicMintPrice = async (rcmPunksContract: Contract) => {
  return await rcmPunksContract.publicPrice()
}
