import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  // Internal navigation
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // External navigation
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}