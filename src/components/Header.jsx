function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
          <img src="/img/logo.png" alt="Logo" />
          <ul>
            <h1>REACT PIZZA</h1>
            <h5>самая вкусная пицца во вселенной</h5>
          </ul>
        </div>
        <div className="headerRight">
          <p style={{ marginLeft: '30px' }}>520</p>
          <ul>
            <img src="/img/cart.png" alt="2" />
            <p style={{ marginRight: '20px' }}> 3</p>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
