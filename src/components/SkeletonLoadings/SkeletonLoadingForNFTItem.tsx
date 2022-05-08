import React from 'react'

import { isMobile } from 'react-device-detect'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { FlexColumn, FlexRow } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonNFTItem: React.FC<{ isGridView: boolean }> = ({ isGridView }) => {
  return (
    <SkeletonTheme baseColor={themeColor.background3} highlightColor={themeColor.background6} borderRadius={themeBorderRadius.regular}>
      {isGridView ? (
        <FlexColumn colWidth={isMobile ? '100%' : '10%'}>
          <Skeleton width={120} height={120} borderRadius={themeBorderRadius.regular} />
        </FlexColumn>
      ) : (
        <FlexColumn>
          <FlexRow padding={'12px'} border={themeColor.border1} borderRadius={themeBorderRadius.small}>
            <FlexRow rowWidth={'fit-content'}>
              <Skeleton width={50} height={50} circle />
              <Skeleton width={100} height={30} borderRadius={themeBorderRadius.small} />
            </FlexRow>
            <Skeleton width={200} height={30} borderRadius={themeBorderRadius.small} />
            <FlexRow rowWidth={'fit-content'}>
              <Skeleton width={30} height={30} circle />
            </FlexRow>
          </FlexRow>
        </FlexColumn>
      )}
    </SkeletonTheme>
  )
}

export default SkeletonNFTItem
