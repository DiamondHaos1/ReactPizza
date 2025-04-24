import React from 'react';
function Card(props) {
  const [typesOption, setTypesOption] = React.useState(0);
  const [sizeOption, setSizeOption] = React.useState(0);
  const [buy, setBuy] = React.useState(false);
  const typesId = props.types.split(',');
  const size = props.size.split(',');
  const typesName = ['Тонке', 'Традиційне'];
  const orderCard = () => {
    return {
      price: props.price,
      img_src: props.imageSrc,
      title: props.title,
      types: typesOption,
      size: sizeOption,
    };
  };
  return (
    <div className="pizzaCard">
      <img src={'img/pizza/' + props.imageSrc} alt="pizza"></img>
      <div className="infoPizza">
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          {props.title}
        </h3>
        <div className="optionalPizza">
          <div className="oneButton">
            {typesId.map((typesId, index) => (
              <button
                onClick={() => setTypesOption(index)}
                style={{
                  ...(index === typesOption
                    ? { backgroundColor: '#585858', color: 'white' }
                    : ''),
                }}
              >
                {typesName[typesId]}
              </button>
            ))}
          </div>
          <div className="oneButton">
            {size.map((size, index) => (
              <button
                onClick={() => setSizeOption(index)}
                style={{
                  ...(index === sizeOption
                    ? { backgroundColor: '#585858', color: 'white' }
                    : ''),
                }}
              >
                {size} см.
              </button>
            ))}
          </div>
        </div>
        <div className="pricePizza">
          <h1>{props.price} грн.</h1>
          <button onClick={() => props.add(orderCard())}>+ Добавити</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
