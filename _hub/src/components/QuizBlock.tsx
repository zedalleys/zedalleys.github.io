import { useState } from 'react';
import type { QuizQuestion } from '../types';
import { shuffle } from '../lib/shuffle';

interface QuizBlockProps {
  quiz: QuizQuestion[];
  onPass: () => void;
}

/** Per-question display order, as a list of original option indices. */
type OptionOrders = Record<string, number[]>;

function buildOrders(quiz: QuizQuestion[]): OptionOrders {
  const orders: OptionOrders = {};
  for (const q of quiz) {
    orders[q.id] = shuffle(q.options.map((_, i) => i));
  }
  return orders;
}

export function QuizBlock({ quiz, onPass }: QuizBlockProps) {
  // Answers are keyed by question id and stored as *original* option
  // indices, so the correctness checks and `correctIndex` comparisons
  // below don't care how the options are currently arranged on screen.
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});
  const [checked, setChecked] = useState(false);
  // Option order is randomised per mount and re-randomised on "Try again",
  // so a failed retry isn't just "remember which button I clicked".
  const [optionOrders, setOptionOrders] = useState<OptionOrders>(() => buildOrders(quiz));

  const allAnswered = quiz.every((q) => answers[q.id] !== undefined);
  const allCorrect = checked && quiz.every((q) => answers[q.id] === q.correctIndex);

  function selectOption(questionId: string, optionIndex: number) {
    if (checked && allCorrect) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    if (checked) setChecked(false);
  }

  function handleCheck() {
    setChecked(true);
  }

  function handleRetry() {
    setAnswers({});
    setChecked(false);
    setOptionOrders(buildOrders(quiz));
  }

  return (
    <div className="quiz-block">
      <h3 className="quiz-block__title">Quick check</h3>
      {quiz.map((question, qi) => {
        const selected = answers[question.id];
        const isCorrect = checked && selected === question.correctIndex;
        const isWrong = checked && selected !== undefined && selected !== question.correctIndex;
        const order = optionOrders[question.id] ?? question.options.map((_, i) => i);

        return (
          <div key={question.id} className="quiz-question">
            <p className="quiz-question__prompt">{qi + 1}. {question.question}</p>
            <div className="quiz-question__options">
              {order.map((optionIndex) => {
                const option = question.options[optionIndex];
                const isSelected = selected === optionIndex;
                const showAsCorrect = checked && optionIndex === question.correctIndex;
                const showAsIncorrect = checked && isSelected && optionIndex !== question.correctIndex;
                return (
                  <button
                    key={optionIndex}
                    type="button"
                    className={[
                      'quiz-option',
                      isSelected ? 'quiz-option--selected' : '',
                      showAsCorrect ? 'quiz-option--correct' : '',
                      showAsIncorrect ? 'quiz-option--incorrect' : '',
                    ].join(' ').trim()}
                    onClick={() => selectOption(question.id, optionIndex)}
                    disabled={checked && allCorrect}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {(isCorrect || isWrong) && (
              <p className={`quiz-question__feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
                {isCorrect ? '✓ Correct — ' : '✕ Not quite — '}
                {question.explanation}
              </p>
            )}
          </div>
        );
      })}

      <div className="quiz-block__actions">
        {!checked || !allCorrect ? (
          <button type="button" className="btn btn--primary" onClick={handleCheck} disabled={!allAnswered}>
            Check answers
          </button>
        ) : null}
        {checked && !allCorrect && (
          <button type="button" className="btn btn--ghost" onClick={handleRetry}>
            Try again
          </button>
        )}
        {checked && allCorrect && (
          <button type="button" className="btn btn--primary" onClick={onPass}>
            Complete step →
          </button>
        )}
      </div>
    </div>
  );
}
