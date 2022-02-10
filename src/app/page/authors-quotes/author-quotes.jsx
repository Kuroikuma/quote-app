import { RandomSearch } from "../../components/random-search/random-search";
import "./author-quotes.css";
import React, { useState, useEffect } from "react";
import { Spinner } from "../../components/spinner/spinner";
import { Footer } from "../../components/footer/footer";
import { useParams } from "react-router-dom";
import { CardQuote } from "../../components/card-quote/card-quote";
import { authorQuotes } from "../../../assets/quote.services";

export const AuthorQuotes = () => {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(0);
  const [prevPage, setPrevPage] = useState(1);
  const [quotes, setQuotes] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    authorQuotes(params.author, currentPage)
      .then((quote) => {
        setQuotes(quote.data);
        console.log(quote.pagination);
        setCurrentPage(quote.pagination.currentPage);
        setNextPage(quote.pagination.nextPage);
        setTotalPage(quote.pagination.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, params.author]);

  const handleNextPage = () => {
    if (currentPage !== totalPage) {
      setLoading(true);
      setPrevPage(currentPage);
      setCurrentPage(nextPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handlePrevPage = () => {
    if (prevPage === 1) {
      setCurrentPage(prevPage);
    } else if (currentPage !== prevPage) {
      setCurrentPage(prevPage);
      setLoading(true);
      setPrevPage(prevPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <RandomSearch />
          <div className="containerAutorQuotes">
            <div className="containerAutorQuotes__title">
              <p>{params.author}</p>
            </div>
            {quotes &&
              quotes.map((item) => <CardQuote quote={item.quoteText} />)}
            <div className="containerAutorQuotes__pag">
              <button onClick={handlePrevPage}>prev</button>
              <p>
                {currentPage}/{totalPage}
              </p>
              <button onClick={handleNextPage}>next</button>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
