import "./card-quote.css";

export const CardQuote = (props) => {
  const {
    quote = "“The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.“",
  } = props;
  return (
    <>
      <div className="containerCardQuote">
        <p>{quote}</p>
      </div>
    </>
  );
};
