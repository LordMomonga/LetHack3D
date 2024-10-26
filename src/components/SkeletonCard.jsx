import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function SkeletonCard({ count }) {
    return (
        <SkeletonTheme
            baseColor="#e5e5e5"
            highlightColor="#f5f5f5"
        >
            <div
                className="bg-white rounded-xl"
                style={{
                    padding: 10,
                    animationDelay: `${count}00ms`
                }}
            >
                <div className="rounded-lg image">
                    <Skeleton
                        height={140}
                        width={'100%'}
                    />
                </div>
                <div className="details">
                    <h3 className="rounded-lg name">
                        <Skeleton
                            height={15}
                            width={'100%'}
                        />
                    </h3>
                    <p className="rounded-lg price">
                        <Skeleton
                            height={15}
                            width={'80%'}
                        />
                    </p>
                    <div className="rounded-lg action">
                        <Skeleton
                            height={20}
                            width={'40%'}
                        />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}
