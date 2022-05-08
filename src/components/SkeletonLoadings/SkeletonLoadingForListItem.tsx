import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import { FlexRow } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'

const SkeletonUserListItem: React.FC = () => {
  return (
    <SkeletonTheme baseColor={themeColor.background3} highlightColor={themeColor.background6} borderRadius={themeBorderRadius.regular}>
      <FlexRow padding={'12px'} border={themeColor.border5} borderRadius={themeBorderRadius.small}>
        <FlexRow rowWidth={'24%'} justifyContent={'center'}>
          <Skeleton width={200} height={30} borderRadius={themeBorderRadius.small} />
        </FlexRow>
        <FlexRow rowWidth={'16%'} justifyContent={'center'}>
          <Skeleton width={50} height={30} borderRadius={themeBorderRadius.small} />
        </FlexRow>
        <FlexRow rowWidth={'16%'} justifyContent={'center'}>
          <Skeleton width={50} height={30} borderRadius={themeBorderRadius.small} />
        </FlexRow>
        <FlexRow rowWidth={'34%'} padding={'0 12px'} justifyContent={'flex-start'} alignItems={'flex-end'}>
          {[...Array(5).keys()].map((id) => (
            <Skeleton key={id} width={50} height={50} circle />
          ))}
        </FlexRow>
      </FlexRow>
    </SkeletonTheme>
  )
}

export default SkeletonUserListItem
