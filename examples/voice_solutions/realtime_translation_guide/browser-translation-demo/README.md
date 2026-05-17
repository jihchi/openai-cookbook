# Browser Realtime Translation Demo

This is a small browser demo for one-way live translation from microphone audio.
The server creates a short-lived OpenAI Realtime Translation client secret, and
the browser uses WebRTC to send captured microphone audio and play translated
speech with original and translated captions.

## Setup

Create a local `.env` file in this demo folder using `.env.example` as the list
of required variables.

Required:

```bash
OPENAI_API_KEY=your-openai-api-key
```

Optional:

```bash
OPENAI_TRANSLATION_MODEL=gpt-realtime-translate
OPENAI_INPUT_TRANSCRIPTION_MODEL=gpt-realtime-whisper
PORT=5173
HOST=127.0.0.1
```

## Run

From the cookbook repo root:

```bash
cd examples/voice_solutions/realtime_translation_guide/browser-translation-demo
npm install
npm run dev
```

Open the local URL printed by the server. Pick the language you want to hear,
start translation, allow microphone access, and speak into your microphone.

## Audio output

The app captures microphone audio and sends it to Realtime Translation over
WebRTC. It does not locally monitor the microphone, which avoids echo and
feedback. The Audio mix slider controls translated speech playback volume.

## Validation

From the cookbook repo root:

```bash
cd examples/voice_solutions/realtime_translation_guide/browser-translation-demo
npm test
```

To run a live API smoke test:

```bash
npm run smoke
```

## Notes

- The browser uses `getUserMedia()` so the user explicitly grants microphone
  access.
- WebRTC handles browser audio transport, so the browser does not need to
  resample microphone audio or manually send PCM chunks.
