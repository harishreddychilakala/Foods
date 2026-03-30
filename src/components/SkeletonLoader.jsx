export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-badge"></div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text" style={{ width: '70%' }}></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  )
}

export const SkeletonLoader = ({ count = 6 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  )
}
