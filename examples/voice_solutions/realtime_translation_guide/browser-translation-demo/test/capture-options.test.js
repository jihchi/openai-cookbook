import assert from "node:assert/strict";
import test from "node:test";

import { buildMicrophoneAudioConstraints } from "../src/public/capture-options.js";

test("buildMicrophoneAudioConstraints disables browser audio processing by default", () => {
  const constraints = buildMicrophoneAudioConstraints();

  assert.deepEqual(constraints, {
    echoCancellation: false,
    noiseSuppression: false,
    autoGainControl: false,
  });
});
