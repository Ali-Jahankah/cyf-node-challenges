import React from "react";
import "../../style/form.css";
const Form = () => {
  return (
    <>
      <article className="form_main">
        <section className="form_cont">
          <form className="form">
            <div>
              <input className="form_input" placeholder="Name..."></input>
            </div>

            <textarea
              className="form_input textarea"
              placeholder="Message..."
              rows={6}
            ></textarea>

            <button className="form_btn">Submit</button>
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
