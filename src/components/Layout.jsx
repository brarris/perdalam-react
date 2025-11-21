const Layout = ({ children }) => {
  return <main className="layout">{children}</main>;
};
// children merupakan turunan dari Layout pada App.jsx
// Layout berperan sebagai parent, component-component yang didalam parent yaitu children

export default Layout;
