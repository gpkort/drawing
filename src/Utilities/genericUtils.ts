export const createCanvas = (height: number, width: number) => {
  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  document.body.appendChild(canvas);

  return canvas;
};

export const testSegments = {
  "image_height": 3126,
  "image_width": 2500,
  "vectors": [
    {
      "start": {
        "x": 1195,
        "y": 883
      },
      "end": {
        "x": 1032,
        "y": 815
      }
    },
    {
      "start": {
        "x": 1195,
        "y": 883
      },
      "end": {
        "x": 1358,
        "y": 951
      }
    },
    {
      "start": {
        "x": 1032,
        "y": 815
      },
      "end": {
        "x": 706,
        "y": 679
      }
    },
    {
      "start": {
        "x": 706,
        "y": 679
      },
      "end": {
        "x": 489,
        "y": 543
      }
    },
    {
      "start": {
        "x": 1358,
        "y": 951
      },
      "end": {
        "x": 1630,
        "y": 951
      }
    },
    {
      "start": {
        "x": 1630,
        "y": 951
      },
      "end": {
        "x": 1847,
        "y": 883
      }
    },
    {
      "start": {
        "x": 1195,
        "y": 883
      },
      "end": {
        "x": 978,
        "y": 1495
      }
    },
    {
      "start": {
        "x": 978,
        "y": 1495
      },
      "end": {
        "x": 1250,
        "y": 2106
      }
    },
    {
      "start": {
        "x": 1250,
        "y": 2106
      },
      "end": {
        "x": 1304,
        "y": 2650
      }
    },
    {
      "start": {
        "x": 1195,
        "y": 883
      },
      "end": {
        "x": 1195,
        "y": 1563
      }
    },
    {
      "start": {
        "x": 1195,
        "y": 1563
      },
      "end": {
        "x": 1250,
        "y": 2174
      }
    },
    {
      "start": {
        "x": 1250,
        "y": 2174
      },
      "end": {
        "x": 1304,
        "y": 2718
      }
    },
    {
      "start": {
        "x": 1358,
        "y": 543
      },
      "end": {
        "x": 1250,
        "y": 543
      }
    }
  ]
}
