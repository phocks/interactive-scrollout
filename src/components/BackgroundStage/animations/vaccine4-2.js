const animate = function(ks) {
  const tl = ks
    .animate(
      "#Edge",
      [
        {
          p: "d",
          t: [0, 1000],
          v: [
            "path('M153.7,24.3C153.7,24.3,153.7,82.1,153.7,153.4C153.7,224.6,153.7,282.4,153.7,282.4L153.7,24.3Z')",
            "path('M153.7,24.3C139.6,24.3,128.1,82.1,128.1,153.4C128.1,224.6,139.6,282.4,153.7,282.4L153.7,24.3Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#Inside-left-mask",
      [
        {
          p: "d",
          t: [0, 1000],
          v: [
            "path('M153.7,34.5C153.7,34.5,153.7,87.8,153.7,153.4C153.7,219,153.7,272.2,153.7,272.2L153.7,34.5Z')",
            "path('M153.7,34.5C140.7,34.5,130.2,87.8,130.2,153.4C130.2,219,140.7,272.2,153.7,272.2L153.7,34.5Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#Edge1",
      [
        {
          p: "d",
          t: [0, 1000],
          v: [
            "path('M153.7,24.3C153.7,24.3,153.7,88.5,153.7,159.7C153.7,230.9,153.7,282.4,153.7,282.4L153.7,24.3Z')",
            "path('M153.7,24.3C213.1,24.3,261.4,82.1,261.4,153.4C261.4,224.6,213.1,282.4,153.7,282.4L153.7,24.3Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#oldStrandC",
      [{ p: "opacity", t: [958, 1000], v: [1, 0], e: [[0], [0]] }],
      "#Inside-right-mask",
      [
        {
          p: "d",
          t: [0, 1000],
          v: [
            "path('M153.7,34.5C153.7,34.5,153.7,87.8,153.7,153.4C153.7,219,153.7,272.2,153.7,272.2L153.7,34.5Z')",
            "path('M153.7,34.5C208.9,34.5,253.7,88.2,253.7,154.4C253.7,220.5,208.9,274.2,153.7,274.2L153.7,34.5Z')"
          ],
          e: [[1, 0, 0, 0.6, 1], [0]]
        }
      ],
      "#To-fade-out",
      [{ p: "opacity", t: [0, 1000], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#To-fade-out-2",
      [{ p: "opacity", t: [0, 1000], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#To-fade-out-3",
      [{ p: "opacity", t: [0, 1000], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#To-fade-out-4",
      [{ p: "opacity", t: [0, 1000], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#To-fade-out-5",
      [{ p: "opacity", t: [0, 1000], v: [1, 0], e: [[1, 0, 0, 0.6, 1], [0]] }],
      "#Edge-elements",
      [{ p: "opacity", t: [875, 1000], v: [0, 1], e: [[0], [0]] }],
      "#newStrandC",
      [
        {
          p: "mpath",
          t: [1000, 2000],
          v: ["0%", "100%"],
          e: [[1, 0, 0, 0.6, 1], [0]],
          mp: "M272.9,743.9L384.3,799.7"
        },
        {
          p: "rotate",
          t: [1000, 2000],
          v: [0, -23],
          e: [[1, 0, 0, 0.6, 1], [0]]
        },
        { p: "opacity", t: [917, 958], v: [0, 1], e: [[0], [0]] }
      ],
      "#_a0",
      [{ p: "strokeOpacity", t: [1000, 2000], v: [0, 0.8], e: [[0], [0]] }],
      "#_a1",
      [{ p: "strokeOpacity", t: [1000, 2000], v: [0, 0.8], e: [[0], [0]] }],
      "#_a2",
      [{ p: "strokeOpacity", t: [1000, 2000], v: [0, 0.8], e: [[0], [0]] }],
      "#_a3",
      [{ p: "strokeOpacity", t: [1000, 2000], v: [0, 0.8], e: [[0], [0]] }],
      "#_a4",
      [{ p: "opacity", t: [2000, 3000], v: [0, 1], e: [[0], [0]] }],
      { autoremove: false }
    )
    .range(0, 3000);
  if (
    document.location.search
      .substr(1)
      .split("&")
      .indexOf("global=paused") >= 0
  )
    ks.globalPause();

  return tl;
};

module.exports = animate;
