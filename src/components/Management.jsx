import { useState } from "react";

function Management() {
  const [books, setBooks] = useState(0);
  const [pen, setPen] = useState(0);
  const [inkPen , setInkPen] = useState(0);
  const [noteBook, setNoteBook] = useState(0);
  const [total, setTotal] = useState(0)
  return (
    <div>
      <div className="items">
        <div className="books">
          <span>Books:</span>
          <button
            className="addBook"
            onClick={() => {
              setBooks(books+1);
              setTotal(total+1);
            }}
          >
            +
          </button>
          <button
            className="remBook"
            onClick={() => {
                setBooks(books-1);
                setTotal(total-1);
            }}
          >
            -
          </button>
          <span className="totalBooks">{books}</span>
        </div>
        <div className="books">
          <span>Pen:</span>
          <button
            className="addPen"
            onClick={() => {
              setPen(pen+1);
              
              setTotal(total+1);
            }}
          >
            +
          </button>
          <button
            className="remPen"
            onClick={() => {
                setPen(pen-1);
              
                setTotal(total-1);
            }}
          >
            -
          </button>
          <span className="totalPens">{pen}</span>
        </div>
        <div className="books">
          <span>Notebook:</span>
          <button
            className="addNotebook"
            onClick={() => {
                setNoteBook(noteBook +1)
              
                setTotal(total+1);
            }}
          >
            +
          </button>
          <button
            className="remNotebook"
            onClick={() => {
                setNoteBook(noteBook-1)
              
                setTotal(total-1);
            }}
          >
            -
          </button>
          <span className="totalNotebooks">{noteBook}</span>
        </div>
        <div className="books">
          <span>InkPen:</span>
          <button
            className="addInkPen"
            onClick={() => {
              setInkPen(inkPen +1);
              
              
                setTotal(total+1);
            }}
          >
            +
          </button>
          <button
            className="remInkPen"
            onClick={() => {
             setInkPen(inkPen -1);
             setTotal(total -1)
            }}
          >
            -
          </button>
          <span className="totalInkPen">{inkPen}</span>
        </div>
      </div>
      <h1>Total Items = {total}</h1>
    </div>
  );
}

export default Management;
