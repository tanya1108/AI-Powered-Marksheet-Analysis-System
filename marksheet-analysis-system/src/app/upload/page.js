"use client";
import React from "react";
import { useState } from "react";
import Tesseract from "tesseract.js";
import supabase from "../supabase";
import Image from "next/image";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ScoreTable from "../components/ScoreTable";
import { FcCamera } from "react-icons/fc";
import { SUBJECT_LIST } from "../constants";
import { toast } from "react-toastify";

const Home = () => {
  const [imagePath, setImagePath] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [text, setText] = useState("");
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    subjects: [],
  });
  const [enable, setEnable] = useState(false);
  const [converting, setConverting] = useState(false);

  const resetState = () => {
    setImagePath("");
    setImagePreview("");
    setText("");
    setStudentDetails([{ subject: "", score: "" }]);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImagePath(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleClick = async () => {
    setConverting(true);
    Tesseract.recognize(imagePath, "eng", {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err);
        setConverting(false);
      })
      .then((result) => {
        setText(result?.data?.text);

        const extractedText = result?.data?.text;

        // Extract name
        const nameRegex = /Name ?\s*([\w\s]+(?:\s+\w+))/i;
        const nameMatch = extractedText.match(nameRegex);
        const name = nameMatch ? nameMatch[1].trim() : "";

        // Extract ID / Roll No.
        const idRegex = /\b(ID|Rol[l]?|Roll No\.|R[o0]liNo)\s([^ ]+)/i;
        const idMatch = extractedText.match(idRegex);
        const id = idMatch ? idMatch[2] : "";

        const subjectsRegex = new RegExp(
          `(${SUBJECT_LIST.join("|")})[^\\d]*?(\\d+|\\b[A-Za-z]{2}\\b)`,
          "gi"
        );
        const subjectsMatches = [...extractedText.matchAll(subjectsRegex)];

        const subjectsAndMarks = subjectsMatches.map((match) => ({
          subject: match[1],
          score: match[2],
        }));

        setStudentDetails({
          name: name,
          ID: id,
          subjects: subjectsAndMarks,
        });
        setEnable(true);
        setConverting(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("accounts").insert([
        {
          name: studentDetails.name,
          id: String(studentDetails.ID),
          scores: JSON.stringify(studentDetails.subjects),
        },
      ]);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Data saved successfully!");
        resetState();
      }
    } catch (error) {
      window.alert("Something went wrong", error);
    }
  };

  return (
    <>
      <main>
        <div className="flex flex-row">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold mb-5">
              <div className="flex items-center">
                <div className="mr-2 justify-center">Upload a Image</div>
                <FcCamera size={32} />
              </div>
            </h2>
            <div className="p-10 border border-dashed border-spacing-2 rounded-lg border-gray-500 align-center flex">
              <input type="file" accept="image/*" onChange={handleChange} />
              {imagePath && (
                <div className="items-center flex">
                  <Image
                    src={imagePreview}
                    width={"500"}
                    height={"500"}
                    alt="image"
                  />
                </div>
              )}
            </div>

            {text && (
              <div className="my-5 flex-wrap">
                <h2 className="text-2xl font-bold my-3">Text</h2>
                <span className="text-black text-sm">{text}</span>
              </div>
            )}

            <div className="flex flex-col my-2">
              {imagePath && (
                <div>
                  <button
                    onClick={handleClick}
                    disabled={!imagePath || converting}
                    className={
                      imagePath
                        ? "w-40 border bg-blue-500 rounded-md border-solid border-blue-500 p-2 mt-2 text-black"
                        : "w-40 border bg-blue-500 rounded-md border-solid border-blue-500 p-2 mt-2 text-black cursor-not-allowed"
                    }
                  >
                    <CloudUploadOutlinedIcon className="-mt-1 mr-1" />
                    {converting ? "Converting..." : "Convert"}
                  </button>
                  {enable && (
                    <button
                      onClick={handleSubmit}
                      className="w-40 mx-2 border text-black rounded-md border-solid border-green-500 p-2 mt-2"
                    >
                      <SaveOutlinedIcon className="-mt-1 mr-1" />
                      Save
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {text && (
        <>
          <div className="my-2">
            <h2 className="text-2xl font-bold my-3">Details</h2>
            <div className="font-medium">
              Student Name: {studentDetails.name}
            </div>
            <div className="font-medium">ID: {studentDetails.ID}</div>
          </div>
          <ScoreTable scores={studentDetails.subjects} />
        </>
      )}
    </>
  );
};

export default Home;
