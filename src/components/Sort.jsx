import React from 'react';
import '../css/Sort.css';
function Sort(props) {
  const [sortWrapper, setSortWrapper] = React.useState(false);
  const [sortText, setSortText] = React.useState('популярності');
  const textArr = ['популярності', 'ціні', 'алфавіту'];
  return (
    <div>
      <ul className="textSort">
        <p>Сортування по: </p>
        <p
          style={{
            textDecoration: ' underline #FE5F1E',
            color: '#FE5F1E',
            textUnderlineOffset: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setSortWrapper(!sortWrapper)}
        >
          {sortText}
        </p>
      </ul>
      {sortWrapper ? (
        <div className="Box">
          {textArr.map((text, index) => (
            <p onClick={() => setSortText(text)}>{text}</p>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Sort;
