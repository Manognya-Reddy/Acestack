import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import "../styles/flashcard.css";

const flashcards = [
  {
    id: 1,
    question: "What is Polymorphism in OOPs?",
    answer: "Polymorphism allows objects of different classes to behave differently.",
    category: "OOPs",
  },
  {
    id: 2,
    question: "What is a Process in Operating Systems?",
    answer: "A process is a program in execution.",
    category: "OS",
  },
  {
    id: 3,
    question: "What is Normalization in DBMS?",
    answer: "Normalization reduces redundancy and improves data integrity.",
    category: "DBMS",
  },
  {
    id: 4,
    question: "Explain the OSI Model",
    answer: "It is a 7-layer networking model.",
    category: "CN",
  },
];

const categories = ["OOPs", "OS", "DBMS", "CN"];

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCards = selectedCategory
    ? flashcards.filter((card) => card.category === selectedCategory)
    : flashcards;

  const currentCard = filteredCards[currentIndex];

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prev) => (prev - 1 + filteredCards.length) % filteredCards.length
    );
  };

  const resetDeck = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h1>Interactive Flashcards</h1>
          <p>Practice and reinforce your knowledge</p>
        </div>
        <div className="category-bar">
          <button
            className={
              selectedCategory === null
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => selectCategory(null)}
          >
            All ({flashcards.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              className={
                selectedCategory === cat
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => selectCategory(cat)}
            >
              {cat} (
              {flashcards.filter((c) => c.category === cat).length})
            </button>
          ))}
        </div>
        <div
          className="flashcard-container"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
            <div className="flashcard-face flashcard-front">
              <span className="badge">{currentCard.category}</span>
              <p className="card-text">{currentCard.question}</p>
              <p className="hint">Click to reveal answer</p>
            </div>
            <div className="flashcard-face flashcard-back">
              <span className="badge">{currentCard.category}</span>
              <p className="card-text">{currentCard.answer}</p>
              <p className="hint">Click to see question</p>
            </div>
          </div>
        </div>

        <div className="controls">
          <button onClick={prevCard} className="btn">
            <ChevronLeft size={18} />
            Previous
          </button>

          <div className="middle-controls">
            <span>
              {currentIndex + 1} / {filteredCards.length}
            </span>
            <button onClick={resetDeck} className="btn icon-btn">
              <RotateCcw size={18} />
            </button>
          </div>

          <button onClick={nextCard} className="btn">
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
