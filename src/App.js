import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card.jsx';
import Header from './components/Header.jsx';
import Category from './components/Category.jsx';
import Sort from './components/Sort.jsx';

function App() {
  const [data, setData] = React.useState([]);
  const [dataAdd, setDataAdd] = React.useState([]);
  function getData(order) {
    setDataAdd(order);
    console.log(dataAdd);
    axios
      .post('http://obsoblbase.local/postData.php', {
        price: dataAdd.price,
        img_src: dataAdd.img_src,
        title: dataAdd.title,
        types: dataAdd.types,
        size: dataAdd.size,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }
  React.useEffect(() => {
    // Выполняем GET-запрос к вашему PHP API
    axios
      .get('http://obsoblbase.local/getData.php')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <div className="backround">
        <Header></Header>
        <div className="topBody">
          <Category></Category>
          <Sort></Sort>
        </div>
        <h1 style={{ margin: '0px 0px 20px 70px' }}>Всі піци</h1>

        <div className="gridItem">
          <>
            {data.map((item, index) => (
              <Card
                add={(orderCard) => getData(orderCard)}
                key={index}
                title={item.title}
                imageSrc={item.img_src}
                types={item.types}
                size={item.size}
                price={item.price}
              ></Card>
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
