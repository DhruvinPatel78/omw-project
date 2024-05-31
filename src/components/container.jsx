const Container = ({ children, className }) => {
  return <div className={`max-w-1200 mx-auto p-4 ${className}`}>{children}</div>;
};
export default Container;
