import { useNavigate } from 'react-router-dom'

export const Breadcrumbs = ({ items }) => {
  const navigate = useNavigate()

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="breadcrumb-item">
          {item.clickable ? (
            <>
              <button
                onClick={() => navigate(item.path)}
                className="breadcrumb-link"
              >
                {item.label}
              </button>
              {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
            </>
          ) : (
            <>
              <span className="breadcrumb-current">{item.label}</span>
            </>
          )}
        </div>
      ))}
    </nav>
  )
}
