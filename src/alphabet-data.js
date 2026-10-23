// Letter-writing guides use a 400 × 300 canvas. Capitals/ascenders start at
// y=60, small letters at y=120, the baseline is y=240, and tails reach y=285.
// Points run in writing order, allowing the same data to power tracing and
// an animated pencil. Lowercase a and g use beginner-friendly single-storey forms.
const line = (...points) => points;
const curve = (start, first, second, end, steps = 24) =>
  Array.from({ length: steps + 1 }, (_, index) => {
    const t = index / steps;
    const u = 1 - t;
    return [0, 1].map((axis) =>
      u ** 3 * start[axis] + 3 * u ** 2 * t * first[axis]
      + 3 * u * t ** 2 * second[axis] + t ** 3 * end[axis]);
  });
const arc = (cx, cy, rx, ry, from, to, steps = 48) =>
  Array.from({ length: steps + 1 }, (_, index) => {
    const angle = (from + (to - from) * index / steps) * Math.PI / 180;
    return [cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)];
  });
const join = (...parts) => parts.flatMap((part, index) => index ? part.slice(1) : part);
const guide = (strokes, instructions) => ({ strokes, instructions });

export const ALPHABET = [
  {
    letter: 'A', word: 'apple', emoji: '🍎', sound: '/æ/', soundCue: 'ah, like in apple',
    upper: guide([
      line([200, 60], [125, 240]),
      line([200, 60], [275, 240]),
      line([155, 170], [245, 170]),
    ], ['Slide down to the left.', 'Go back to the top and slide down to the right.', 'Draw a bridge across the middle.']),
    lower: guide([
      arc(195, 180, 45, 60, 0, -360),
      line([240, 120], [240, 240]),
    ], ['Start on the right and curve round to make a little circle.', 'Start at the top right and draw a line down.']),
  },
  {
    letter: 'B', word: 'ball', emoji: '⚽', sound: '/b/', soundCue: 'b, like in ball',
    upper: guide([
      line([140, 60], [140, 240]),
      join(curve([140, 60], [290, 60], [290, 150], [140, 150]),
        curve([140, 150], [305, 150], [305, 240], [140, 240])),
    ], ['Draw a tall line down.', 'Start at the top. Make a small bump, then a bigger bump.']),
    lower: guide([
      line([150, 60], [150, 240]),
      arc(200, 180, 50, 60, 180, 540),
    ], ['Draw a tall line down.', 'Start halfway down and curve right, round, and back to the line.']),
  },
  {
    letter: 'C', word: 'cat', emoji: '🐱', sound: '/k/', soundCue: 'k, like in cat',
    upper: guide([arc(205, 150, 75, 90, -40, -320)],
      ['Start near the top right. Curve left, down, and round. Leave a gap.']),
    lower: guide([arc(205, 180, 55, 60, -40, -320)],
      ['Make a little curve left, down, and round. Leave a gap.']),
  },
  {
    letter: 'D', word: 'dog', emoji: '🐶', sound: '/d/', soundCue: 'd, like in dog',
    upper: guide([
      line([140, 60], [140, 240]),
      curve([140, 60], [310, 60], [310, 240], [140, 240]),
    ], ['Draw a tall line down.', 'Go back to the top and make one big curve to the bottom.']),
    lower: guide([
      arc(195, 180, 45, 60, 0, -360),
      line([240, 60], [240, 240]),
    ], ['Curve round to make a little circle.', 'Start high on the right and draw a tall line down.']),
  },
  {
    letter: 'E', word: 'egg', emoji: '🥚', sound: '/e/', soundCue: 'eh, like in egg',
    upper: guide([
      line([140, 60], [140, 240]),
      line([140, 60], [265, 60]),
      line([140, 150], [240, 150]),
      line([140, 240], [265, 240]),
    ], ['Draw a tall line down.', 'Draw the top arm to the right.', 'Draw a shorter arm in the middle.', 'Draw the bottom arm to the right.']),
    lower: guide([
      join(line([150, 175], [250, 175]),
        curve([250, 175], [250, 95], [140, 105], [145, 180]),
        curve([145, 180], [145, 245], [220, 260], [250, 218])),
    ], ['Go right across the middle, curve up and round, then finish with a smile.']),
  },
  {
    letter: 'F', word: 'fish', emoji: '🐟', sound: '/f/', soundCue: 'f, like in fish',
    upper: guide([
      line([140, 60], [140, 240]),
      line([140, 60], [265, 60]),
      line([140, 150], [240, 150]),
    ], ['Draw a tall line down.', 'Draw the top arm to the right.', 'Draw a shorter arm in the middle.']),
    lower: guide([
      join(curve([245, 75], [225, 45], [185, 55], [185, 100]), line([185, 100], [185, 240])),
      line([150, 130], [235, 130]),
    ], ['Curve over the top, then draw a tall line down.', 'Draw a little bridge across.']),
  },
  {
    letter: 'G', word: 'grapes', emoji: '🍇', sound: '/ɡ/', soundCue: 'g, like in grapes',
    upper: guide([
      join(arc(200, 150, 75, 90, -40, -360), line([275, 150], [220, 150])),
    ], ['Curve left, down, and round. Go up the right side, then draw a little line left.']),
    lower: guide([
      arc(195, 180, 45, 60, 0, -360),
      join(line([240, 120], [240, 245]),
        curve([240, 245], [240, 270], [220, 285], [195, 285]),
        curve([195, 285], [175, 285], [160, 275], [155, 260])),
    ], ['Curve round to make a little circle.', 'Draw down the right side, below the line, then curl left.']),
  },
  {
    letter: 'H', word: 'hat', emoji: '🎩', sound: '/h/', soundCue: 'h, like in hat',
    upper: guide([
      line([135, 60], [135, 240]), line([265, 60], [265, 240]), line([135, 150], [265, 150]),
    ], ['Draw a tall line down on the left.', 'Draw a tall line down on the right.', 'Join them with a bridge across the middle.']),
    lower: guide([
      line([150, 60], [150, 240]),
      join(curve([150, 170], [150, 105], [250, 105], [250, 170]), line([250, 170], [250, 240])),
    ], ['Draw a tall line down.', 'Start halfway down, curve up and over, then draw down.']),
  },
  {
    letter: 'I', word: 'igloo', emoji: '🛖', sound: '/ɪ/', soundCue: 'ih, like in igloo and in',
    upper: guide([
      line([200, 60], [200, 240]), line([150, 60], [250, 60]), line([150, 240], [250, 240]),
    ], ['Draw a tall line down.', 'Draw a little hat across the top.', 'Draw a little foot across the bottom.']),
    lower: guide([
      line([200, 120], [200, 240]), line([200, 80], [200, 85]),
    ], ['Draw a short line down.', 'Add a little dot above it.']),
  },
  {
    letter: 'J', word: 'juice', emoji: '🧃', sound: '/dʒ/', soundCue: 'j, like in juice',
    upper: guide([
      join(line([245, 60], [245, 185]), curve([245, 185], [245, 258], [140, 258], [140, 195])),
      line([180, 60], [280, 60]),
    ], ['Draw down, then curl left like a hook.', 'Draw a little hat across the top.']),
    lower: guide([
      join(line([225, 120], [225, 245]), curve([225, 245], [225, 285], [170, 285], [160, 260])),
      line([225, 80], [225, 85]),
    ], ['Draw down below the line, then curl left.', 'Add a little dot above it.']),
  },
  {
    letter: 'K', word: 'kite', emoji: '🪁', sound: '/k/', soundCue: 'k, like in kite',
    upper: guide([
      line([140, 60], [140, 240]), line([265, 60], [140, 160]), line([190, 120], [270, 240]),
    ], ['Draw a tall line down.', 'Start at the top right and slide to the middle of the tall line.', 'Start on the sloping arm and slide down to the right.']),
    lower: guide([
      line([150, 60], [150, 240]), line([245, 120], [150, 190]), line([190, 160], [250, 240]),
    ], ['Draw a tall line down.', 'Slide from the right to the middle of the tall line.', 'Slide down to the right to make a little leg.']),
  },
  {
    letter: 'L', word: 'lion', emoji: '🦁', sound: '/l/', soundCue: 'l, like in lion',
    upper: guide([line([140, 60], [140, 240], [270, 240])],
      ['Draw a tall line down, then turn right along the bottom.']),
    lower: guide([line([200, 60], [200, 240])], ['Draw one tall line from top to bottom.']),
  },
  {
    letter: 'M', word: 'moon', emoji: '🌙', sound: '/m/', soundCue: 'm, like in moon',
    upper: guide([
      line([125, 60], [125, 240]), line([125, 60], [200, 170], [275, 60], [275, 240]),
    ], ['Draw a tall line down.', 'Go back to the top. Slide down to the middle, up to the right, then straight down.']),
    lower: guide([
      line([125, 120], [125, 240]),
      join(curve([125, 165], [125, 105], [200, 105], [200, 165]), line([200, 165], [200, 240])),
      join(curve([200, 165], [200, 105], [275, 105], [275, 165]), line([275, 165], [275, 240])),
    ], ['Draw a short line down.', 'Make one little hill, then draw down.', 'Make a second little hill, then draw down.']),
  },
  {
    letter: 'N', word: 'nest', emoji: '🪺', sound: '/n/', soundCue: 'n, like in nest',
    upper: guide([
      line([135, 60], [135, 240]), line([135, 60], [265, 240]), line([265, 60], [265, 240]),
    ], ['Draw a tall line down.', 'Go back to the top and slide down to the right.', 'Draw another tall line down on the right.']),
    lower: guide([
      line([150, 120], [150, 240]),
      join(curve([150, 165], [150, 105], [250, 105], [250, 165]), line([250, 165], [250, 240])),
    ], ['Draw a short line down.', 'Make a little hill, then draw down.']),
  },
  {
    letter: 'O', word: 'orange', emoji: '🍊', sound: '/ɒ/', soundCue: 'o, like in orange',
    upper: guide([arc(200, 150, 75, 90, -90, -450)],
      ['Start at the top. Curve left, down, and all the way round.']),
    lower: guide([arc(200, 180, 50, 60, -90, -450)],
      ['Start at the top and curve all the way round to make a little circle.']),
  },
  {
    letter: 'P', word: 'penguin', emoji: '🐧', sound: '/p/', soundCue: 'p, like in penguin',
    upper: guide([
      line([140, 60], [140, 240]),
      curve([140, 60], [300, 60], [300, 160], [140, 160]),
    ], ['Draw a tall line down.', 'Go back to the top and make one round bump.']),
    lower: guide([
      line([150, 120], [150, 285]),
      arc(200, 180, 50, 60, 180, 540),
    ], ['Draw a line down below the baseline.', 'Start near the top and curve right, round, and back to the line.']),
  },
  {
    letter: 'Q', word: 'queen', emoji: '👸', sound: '/kw/', soundCue: 'kw, like in queen (q and u together)',
    upper: guide([
      arc(195, 145, 70, 85, -90, -450), line([215, 195], [275, 240]),
    ], ['Start at the top and curve all the way round.', 'Add a little tail sloping down to the right.']),
    lower: guide([
      arc(195, 180, 45, 60, 0, -360), line([240, 120], [240, 285]),
    ], ['Curve round to make a little circle.', 'Draw down the right side and keep going below the baseline.']),
  },
  {
    letter: 'R', word: 'rainbow', emoji: '🌈', sound: '/r/', soundCue: 'r, like in rainbow',
    upper: guide([
      line([140, 60], [140, 240]),
      curve([140, 60], [295, 60], [295, 155], [140, 155]),
      line([195, 155], [275, 240]),
    ], ['Draw a tall line down.', 'Go back to the top and make a round bump.', 'Add a leg sloping down to the right.']),
    lower: guide([
      line([165, 120], [165, 240]), curve([165, 175], [165, 125], [215, 105], [245, 135]),
    ], ['Draw a short line down.', 'Start halfway down and curve up and over to make a little shoulder.']),
  },
  {
    letter: 'S', word: 'sun', emoji: '☀️', sound: '/s/', soundCue: 's, like in sun',
    upper: guide([
      join(curve([265, 90], [215, 25], [115, 65], [140, 125]),
        curve([140, 125], [155, 160], [265, 145], [265, 200]),
        curve([265, 200], [265, 255], [155, 255], [130, 215])),
    ], ['Curve left around the top, slide through the middle, then curve left around the bottom.']),
    lower: guide([
      join(curve([245, 140], [215, 105], [145, 115], [150, 155]),
        curve([150, 155], [155, 185], [250, 180], [250, 215]),
        curve([250, 215], [250, 245], [175, 250], [145, 225])),
    ], ['Make a little curve at the top, slide through the middle, and curve back at the bottom.']),
  },
  {
    letter: 'T', word: 'turtle', emoji: '🐢', sound: '/t/', soundCue: 't, like in turtle',
    upper: guide([
      line([200, 60], [200, 240]), line([125, 60], [275, 60]),
    ], ['Draw a tall line down.', 'Draw a wide hat across the top.']),
    lower: guide([
      join(line([190, 75], [190, 210]), curve([190, 210], [190, 245], [225, 245], [245, 225])),
      line([145, 130], [245, 130]),
    ], ['Draw down, then curl a little to the right.', 'Draw a little bridge across near the top.']),
  },
  {
    letter: 'U', word: 'umbrella', emoji: '☂️', sound: '/ʌ/', soundCue: 'uh, like in umbrella',
    upper: guide([
      join(line([135, 60], [135, 185]), curve([135, 185], [135, 258], [265, 258], [265, 185]),
        line([265, 185], [265, 60])),
    ], ['Draw down, curve round the bottom, then go back up.']),
    lower: guide([
      join(line([150, 120], [150, 195]), curve([150, 195], [150, 255], [245, 255], [245, 195]),
        line([245, 195], [245, 120])),
      line([245, 120], [245, 240]),
    ], ['Draw down, curve round, and go back up.', 'Draw down again on the right.']),
  },
  {
    letter: 'V', word: 'violin', emoji: '🎻', sound: '/v/', soundCue: 'v, like in violin',
    upper: guide([line([125, 60], [200, 240], [275, 60])],
      ['Slide down to a point, then slide up to the right.']),
    lower: guide([line([145, 120], [200, 240], [255, 120])],
      ['Slide down to a little point, then slide up to the right.']),
  },
  {
    letter: 'W', word: 'whale', emoji: '🐋', sound: '/w/', soundCue: 'w, like in whale',
    upper: guide([line([120, 60], [155, 240], [200, 120], [245, 240], [280, 60])],
      ['Slide down, up, down, and up again. Make two points.']),
    lower: guide([line([120, 120], [155, 240], [200, 155], [245, 240], [280, 120])],
      ['Slide down, up, down, and up to make two little points.']),
  },
  {
    letter: 'X', word: 'box', emoji: '📦', soundPosition: 'end', sound: '/ks/', soundCue: 'ks, like at the end of box and six',
    upper: guide([
      line([130, 60], [270, 240]), line([270, 60], [130, 240]),
    ], ['Slide from the top left to the bottom right.', 'Cross over from the top right to the bottom left.']),
    lower: guide([
      line([145, 120], [255, 240]), line([255, 120], [145, 240]),
    ], ['Slide from the top left to the bottom right.', 'Cross over from the top right to the bottom left.']),
  },
  {
    letter: 'Y', word: 'yo-yo', emoji: '🪀', sound: '/j/', soundCue: 'y, like in yo-yo',
    upper: guide([
      line([125, 60], [200, 150]), line([275, 60], [200, 150], [200, 240]),
    ], ['Slide from the top left to the middle.', 'Slide from the top right to the middle, then draw straight down.']),
    lower: guide([
      line([140, 120], [205, 235]), line([265, 120], [180, 285]),
    ], ['Slide down from the left to the baseline.', 'Slide down from the right and keep going below the baseline.']),
  },
  {
    letter: 'Z', word: 'zebra', emoji: '🦓', sound: '/z/', soundCue: 'z, like in zebra',
    upper: guide([line([130, 60], [270, 60], [130, 240], [270, 240])],
      ['Go right across the top, slide down to the left, then go right across the bottom.']),
    lower: guide([line([145, 120], [255, 120], [145, 240], [255, 240])],
      ['Go right, slide down to the left, then go right again.']),
  },
];

const isPoint = (point) => Array.isArray(point) && point.length >= 2
  && Number.isFinite(point[0]) && Number.isFinite(point[1]);

function distanceSquaredToSegment(point, start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1,
    ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) / lengthSquared));
  return (point[0] - start[0] - t * dx) ** 2 + (point[1] - start[1] - t * dy) ** 2;
}

/**
 * Return the fraction (0–1) of guide ink covered by the child's drawing.
 * Length-weighted samples keep straight and curved guides equally fair.
 * Repeated scribbles in one place cannot increase the covered fraction, and
 * separate pen-down strokes never create imaginary connecting lines.
 */
export function traceCoverage(strokes, drawnStrokes, tolerance = 18) {
  if (!Array.isArray(strokes) || !Array.isArray(drawnStrokes)
    || !Number.isFinite(tolerance) || tolerance < 0) return 0;

  const drawnSegments = [];
  for (const stroke of drawnStrokes) {
    if (!Array.isArray(stroke)) continue;
    for (let index = 0; index < stroke.length; index += 1) {
      if (!isPoint(stroke[index])) continue;
      const previous = index > 0 && isPoint(stroke[index - 1]) ? stroke[index - 1] : stroke[index];
      drawnSegments.push([previous, stroke[index]]);
    }
  }
  if (!drawnSegments.length) return 0;

  const toleranceSquared = tolerance ** 2;
  const spacing = Math.max(1, Math.min(6, tolerance / 2));
  let totalLength = 0;
  let coveredLength = 0;
  for (const stroke of strokes) {
    if (!Array.isArray(stroke)) continue;
    for (let index = 1; index < stroke.length; index += 1) {
      const start = stroke[index - 1];
      const end = stroke[index];
      if (!isPoint(start) || !isPoint(end)) continue;
      const length = Math.hypot(end[0] - start[0], end[1] - start[1]);
      if (!length) continue;
      const sampleCount = Math.ceil(length / spacing);
      let coveredSamples = 0;
      for (let sample = 0; sample < sampleCount; sample += 1) {
        const t = (sample + 0.5) / sampleCount;
        const point = [start[0] + t * (end[0] - start[0]), start[1] + t * (end[1] - start[1])];
        if (drawnSegments.some(([a, b]) => distanceSquaredToSegment(point, a, b) <= toleranceSquared + 1e-8)) {
          coveredSamples += 1;
        }
      }
      totalLength += length;
      coveredLength += length * coveredSamples / sampleCount;
    }
  }
  return totalLength ? Math.min(1, coveredLength / totalLength) : 0;
}
