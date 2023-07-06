"use client";
import React, { useState } from "react";
import supabase from "../supabase";
import ScoreTable from "../ScoreTable";
import Navbar from "../Navbar";
import { FcSearch } from "react-icons/fc";

const Search = () => {
  const [response, setResponse] = useState(null);

  const [inputId, setInputId] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!inputId) {
      return;
    }
    try {
      const { data, error } = await supabase
        .from("accounts")
        .select()
        .eq("id", inputId)
        .single();

      if (error) {
        window.alert("Something went wrong", error);
      }

      setResponse(data);
    } catch (error) {
      console.error("Error searching in database:", error.message);
      window.alert("Something went wrong", error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center font-bold text-4xl my-4">
        Academic Transcript Analyzer! 🚀
      </h1>
      <div className="text-gray-400 font-medium text-center">
        Transform images into text with image-to-text conversion application.
      </div>
      <div
        id="home"
        className="mx-auto flex-col mb-10 my-10 flex w-full max-w-screen-md flex-wrap py-2 px-2 sm:px-4 lg:max-w-screen-xl"
      >
        <main>
          <div className="flex w-full justify-center align-baseline">
            <input
              type="text"
              value={inputId}
              placeholder="Search by ID......"
              className="text-black bg-white border rounded-md border-gray-400  p-2"
              onChange={(event) => setInputId(event.target.value)}
            />

            <button
              className="w-10 border text-black rounded-md border-solid border-green-600 p-2 ml-4"
              type="submit"
              disabled={!inputId}
              onClick={handleSearch}
            >
              <FcSearch size={20} />
            </button>
          </div>
        </main>
        {response && (
          <div className="flex flex-col mb-4">
            <div className="font-bold">ID: {response?.id}</div>
            <div className="font-bold"> Name: {response?.name}</div>
          </div>
        )}
        {response && <ScoreTable scores={JSON.parse(response?.scores)} />}
      </div>
    </>
  );
};

export default Search;
