import React from "react";
import Link from "next/link";

function speakerlist() {
  return (
    <div className="h-full w-screen flex items-center gap-10 flex-col p-2 bg-base-200">
      <h1 className="text-3xl ml-6 w-full text-black text-left font-semibold">
        Invite An Expert{" "}
      </h1>
      <p className="text-xl ml-6 w-full text-gray-600 text-left ">
        <span style={{ color: "#8B0000" }}>
          Most panels you attend will be missing a woman.
        </span>
        <br></br>
        <br></br> Even in 2024, women leaders are woefully underrepresented in
        public forums. We asked decision-makers a simple question, why do we not
        see enough women on stage? Basis the insights, we went back to home to
        create
        <span style={{ color: "#8B0000" }}>
          an easy-to-access database of women experts across multiple
          industries, available for speaking opportunities.
        </span>
        <br></br> <br></br>
        You can also{" "}
        <Link
          href={"/speakers/new"}
          className="font-bold italic link link-primary"
        >
          be a speaker!
        </Link>
      </p>
      <div className="h-full w-3xl flex-wrap flex justify-center items-center gap-10 flex-row">
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
      </div>
    </div>
  );

  function Cardss() {
    return (
      <div>
        <div className="card w-[400px] h-[200px] card-side bg-base-100 shadow-xl ">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Prachi Agarwal</h2>
            <p>Co-founder and CEO at Sama</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default speakerlist;
