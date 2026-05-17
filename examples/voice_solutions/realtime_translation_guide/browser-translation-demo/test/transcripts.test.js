import assert from "node:assert/strict";
import test from "node:test";

import { appendTranscriptText, clearTranscriptElements } from "../src/public/transcripts.js";

function createTranscriptElement() {
  return {
    textContent: "",
    scrollHeight: 42,
    scrollTop: 0,
  };
}

test("appendTranscriptText appends text and scrolls to the bottom", () => {
  const element = createTranscriptElement();

  appendTranscriptText(element, "Hello");
  appendTranscriptText(element, ", world");

  assert.equal(element.textContent, "Hello, world");
  assert.equal(element.scrollTop, 42);
});

test("clearTranscriptElements clears all provided transcript elements", () => {
  const original = createTranscriptElement();
  const translated = createTranscriptElement();
  original.textContent = "Bonjour";
  translated.textContent = "Hello";

  clearTranscriptElements(original, translated);

  assert.equal(original.textContent, "");
  assert.equal(translated.textContent, "");
});
