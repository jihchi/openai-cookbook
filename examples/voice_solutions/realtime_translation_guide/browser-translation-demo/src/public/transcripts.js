export function appendTranscriptText(element, text) {
  element.textContent += text;
  element.scrollTop = element.scrollHeight;
}

export function clearTranscriptElements(...elements) {
  for (const element of elements) {
    element.textContent = "";
  }
}
