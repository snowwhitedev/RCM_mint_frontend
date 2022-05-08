import React, { useCallback, useState } from 'react'

import { notifyToast } from 'config/toast'
import { useActiveWeb3React, useGetRCMPunksContract } from 'hooks'
import { fetchSignature } from 'utils/api'
import { publicMint, whiteListMint } from 'utils/web3CallHelpers'

export const useMint = () => {
  const { account } = useActiveWeb3React()
  const [mintAmount, setMintAmount] = useState<number>(0)

  const contract = useGetRCMPunksContract(true, false)
  const handleMint = useCallback(async () => {
    if (!contract || !account) return
    try {
      await publicMint(contract, account, mintAmount)
    } catch (error) {
      console.log(error)
    }
  }, [account, contract, mintAmount])

  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMintAmount(Number(e.target.value))
  }, [])

  return { mintAmount, handleMint, handleOnChange }
}

export const useWhiteListMint = () => {
  const { account } = useActiveWeb3React()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [whiteListMintAmount, setWhiteListMintAmount] = useState<number>(0)

  // const { handleWhiteListMint } = useWhiteListMint()
  const contract = useGetRCMPunksContract(true, false)

  const handleWhiteListMint = useCallback(async () => {
    if (!contract) return
    try {
      setIsLoading(true)
      const res = await fetchSignature(account, whiteListMintAmount)
      if (res.status === false) {
        notifyToast({ id: 'Error', type: 'error', content: res.message })
      } else {
        const { signature, deadline } = res

        const result = await whiteListMint(contract, whiteListMintAmount, deadline, signature)
        console.log('result', result)
        // notifyToast({ id: 'Success', type: 'success', content: `signature: ${signature}` })
      }
    } catch (error) {
      console.log(error)
      notifyToast({ id: 'Error', type: 'error', content: 'API call failed' })
      throw Error('API call was failed')
    } finally {
      setIsLoading(false)
    }
  }, [account, contract, whiteListMintAmount])

  const handleOnChangeWhiteListMint = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setWhiteListMintAmount(Number(e.target.value))
  }, [])

  return { isLoading, whiteListMintAmount, handleWhiteListMint, handleOnChangeWhiteListMint }
}
