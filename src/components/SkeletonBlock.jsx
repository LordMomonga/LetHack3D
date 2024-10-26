import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function SkeletonBlock({ baseColor = "#e5e5e5", highlightColor = "#f5f5f5", ...props }) {
    return (
        <SkeletonTheme
            baseColor={baseColor}
            highlightColor={highlightColor}
        >
            <Skeleton {...props} />
        </SkeletonTheme>
    )
}
