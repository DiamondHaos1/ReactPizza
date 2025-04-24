import '../css/Category.css';
import React from 'react';
function Category() {
  const [option, setOption] = React.useState(0);
  const category = [
    'Всі',
    'Мясна',
    'Вегетеріанська',
    'Гріль',
    'Гостра',
    'Закрита',
  ];
  return (
    <div>
      <nav>
        {category.map((category, index) => (
          <button
            key={index}
            className="NoActive"
            onClick={() => setOption(index)}
            style={{
              ...(index === option
                ? { backgroundColor: '#222222', color: 'white' }
                : ''),
            }}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Category;
