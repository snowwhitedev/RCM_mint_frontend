import { AppState } from 'state'
import { useAppSelector } from 'state/hooks'

export const useSignature = () => {
  return useAppSelector((state: AppState) => state.mintReducer.signature)
}
