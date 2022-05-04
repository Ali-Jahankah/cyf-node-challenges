import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "../../style/form.css";
const Form = () => {
  const context = useContext(UserContext);

  return (
    <>
      <article className="form_main">
        <section className="form_cont">
          <form className="form" onSubmit={() => context.formHandler()}>
            <div>
              <input
                className="form_input"
                placeholder="Name..."
                onKeyDown={(event) => context.inputHandler(event, 20)}
                onPaste={(e) => e.preventDefault()}
              ></input>
              <span style={{ color: "red" }}>{context.nameErrorMessage}</span>
            </div>

            <textarea
              className="form_input textarea"
              placeholder="Message..."
              rows={6}
              onKeyDown={(event) => context.inputHandler(event, 100)}
            ></textarea>
            <span style={{ color: "red" }}>{context.textErrorMessage}</span>
            <button className="form_btn" type="submit">
              Submit
            </button>
          </form>
        </section>

        <section className="search_cont">
          <div className="search_div">
            <input
              type="text"
              className="search_input"
              placeholder="Search by ID..."
            />
            <button className="search_btn">Search ID</button>
          </div>
        </section>
      </article>
    </>
  );
};

export default Form;
