/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.scss';
import Card from './Card';

const App: React.FC = () => {
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const setQuestionValues = () => {
    let [first, second, answer] = [0, 0, 0];

    first = getRandomNumber(0, 10);
    second = getRandomNumber(0, 10);

    if (getRandomNumber(0, 1) === 0) {
      answer = first + second;
    } else {
      answer = first + second + getRandomNumber(-3, 3);
    }

    console.log({ first, second, answer });
    return { first, second, answer };
  };

  const [questions, setQuestions] = useState<Array<number>>([0]);
  const [card, setCard] = useState(setQuestionValues());

  const setNewCard = () => setCard(setQuestionValues());
  const updateQuestion = () => setQuestions([questions[0] + 1]);
  const onYes = () => console.log('Yes');
  const onNo = () => console.log('No');
  const onDestroy = () => {
    console.log('Change');
    setNewCard();
    updateQuestion();
  };

  return (
    <div className='App'>
      <div className='container game'>
        <div className='gameBoard'>
          <div className='container row width-25-percent text-align-center'>
            {questions.map((item, key) => (
              <div key={key}>
                <Card
                  title={`${card.first} + ${card.second}`}
                  content={`${card.answer}`}
                >
                  <a
                    href='#'
                    onClick={e => {
                      e.preventDefault();
                      onYes();
                      setTimeout(onDestroy, 400);
                    }}
                  >
                    Yes
                  </a>
                  <a
                    href='#'
                    className='delete-btn'
                    onClick={e => {
                      e.preventDefault();
                      onNo();
                      setTimeout(onDestroy, 400);
                    }}
                  >
                    No
                  </a>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
