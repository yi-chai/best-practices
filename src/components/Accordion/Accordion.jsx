export default function Accordion({ children, className, ...props }) {
  return <ul className={className}>{children}</ul>;
}
