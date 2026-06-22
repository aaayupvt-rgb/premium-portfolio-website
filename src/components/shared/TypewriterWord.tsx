"use client";

import { useEffect, useState } from "react";

const words = [
  "DESIGNS.",
  "RESULTS.",
];

export default function TypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: NodeJS.Timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 3500);
    }

    else if (deleting && text === "") {
      setDeleting(false);

      setWordIndex(
        (prev) => (prev + 1) % words.length
      );
    }

    else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? currentWord.slice(
                  0,
                  prev.length - 1
                )
              : currentWord.slice(
                  0,
                  prev.length + 1
                )
          );
        },
        deleting ? 60 : 120
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <>
      {text}
      <span className="animate-pulse">|</span>
    </>
  );
}