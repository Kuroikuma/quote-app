import { RandomSearch } from "../../components/random-search/random-search";
import React, { useState, useEffect, useContext } from "react";
import ReRenderContext from "../../context/reRender.context";
import "./home.css";
import { Spinner } from "../../components/spinner/spinner";
import { CardQuote } from "../../components/card-quote/card-quote";
import { randomQuote } from "../../../assets/quote.services";
import arrow from "../../../assets/right-arrow.png";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/footer";

export const Home = () => {
  const { reRender } = useContext(ReRenderContext);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    randomQuote()
      .then((quote) => {
        setQuote(quote.data[0].quoteText);
        setGenre(quote.data[0].quoteGenre);
        setAuthor(quote.data[0].quoteAuthor);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reRender]);

  const handlerHoverChange = () => {
    setHover(!hover);
  };
  const navigateAuthorQuotes = () => {
    navigate(`/author/${author}`);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <RandomSearch />
          <div className="containerHome">
            <CardQuote quote={quote} />
            <div
              onClick={navigateAuthorQuotes}
              onMouseEnter={handlerHoverChange}
              onMouseLeave={handlerHoverChange}
              className={
                hover
                  ? "containerHome__CardAuthor show"
                  : "containerHome__CardAuthor"
              }
            >
              <div
                className={
                  hover
                    ? "containerHome__CardAuthor__info show"
                    : "containerHome__CardAuthor__info"
                }
              >
                <p>{author}</p>
                <p>{genre}</p>
              </div>
              <img src={arrow} alt="rightarrow" />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
