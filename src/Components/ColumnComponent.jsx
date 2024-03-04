export const ColumnComponent = ({ className, children }) => {
  return <div className={`${className} text-danger d-flex justify-content-center align-items-center`}>{children}</div>;
  // return <div className={`${className} text-danger border border-primary d-flex justify-content-center align-items-center`}>{children}</div>;
};
