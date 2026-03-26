const PageContainer = ({ children }) => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default PageContainer;
