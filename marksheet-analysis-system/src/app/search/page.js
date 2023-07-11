"use client";
import React, { useState } from "react";
import supabase from "../supabase";
import ScoreTable from "../components/ScoreTable";
import { FcSearch } from "react-icons/fc";
import { toast } from "react-toastify";

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
        toast.error(error.message);
      }

      setResponse(data);
    } catch (error) {
      console.error("Error searching in database:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <main>
        <div className="flex w-full justify-center align-baseline">
          <input
            type="text"
            value={inputId}
            placeholder="Search by User Roll No./ID......"
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
    </>
  );
};

export default Search;
