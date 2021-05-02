import React, {useState} from 'react'
import Questions from './Questions'
import SingleQuestion from './SingleQuestion'

function App() {
  const[question, setQuestion] = useState(Questions);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about React</h3>
        <section className="info">
          {question.map((q) => {
              return (
               <SingleQuestion key={q.id} {...q} />
          )})}
        </section>
      </div>
    </main>
  );
}

export default App;
