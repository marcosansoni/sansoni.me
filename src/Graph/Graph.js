import React, { useRef, useEffect } from 'react';
import bezier from 'bezier-easing';
// import styled from 'styled-components';

// const Content = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: red;
//   position: relative;
// `;
//
// const Circle = styled.div`
//   width: ${(p) => `${p.size}px`};
//   height: ${(p) => `${p.size}px`};
//   background-color: black;
//   position: absolute;
//   right: ${(p) => `${p.right}px`};
//   bottom: ${(p) => `${p.bottom}px`};
//   border-radius: 100%;
// `;

const rectEquation = (x1, y1, x2, y2) => {
  const m = (y1 - y2) / (x1 - x2);
  return { m, q: y2 - m * x2 };
};

const coordinateYFromRect = (m, q, x) => m * x + q;

const Graph = () => {
  const canvasRef = useRef();

  const easing = bezier(0, 0, 1, 25);

  console.log(easing(1));

  // const object =

  // let vertices = [];
  const initialPoints = { x: 0, y: 0 };
  const finalPoints = { x: 100, y: 225 };

  const { m, q } = rectEquation(initialPoints.x, initialPoints.y, finalPoints.x, finalPoints.y);

  const speedFactor = 2;
  const totalVertices = Math.floor((finalPoints.x - initialPoints.x) / speedFactor);

  const vertices = Array.from(Array(totalVertices).keys())
    .map((cord) => {
      const x = cord * speedFactor + initialPoints.x;
      const y = coordinateYFromRect(m, q, x);
      return { x, y };
    });

  const circleRadius = Array.from(Array(10).keys()).map((i) => {
    console.log(easing(i / 10));

    return ({
      x: finalPoints.x,
      y: finalPoints.y,
      radius: easing(i / 10),
    });
  });

  const total = [...vertices, ...circleRadius];
  // const vertices = [{ x: 150, y: 150 }, { x: 200, y: 200 }, { x: 250, y: 250 }, { x: 300, y: 300 }];

  const drawCircle = (ctx, x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  const draw = (ctx, instant) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = '#000000';
    // ctx.beginPath();
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 10, 50, 50);
    //
    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';

    // ctx.fillRect(30, 30, 500, 50);
    const current = total[instant];
    const previous = total[instant - 1];

    if (current.radius) {
      drawCircle(ctx, current.x, current.y, current.radius);
    } else {
      ctx.beginPath();
      ctx.moveTo(previous.x, previous.y);
      ctx.lineTo(current.x, current.y);
      // ctx.moveTo(200, 200);
      // ctx.lineTo(250, 250);
      // ctx.moveTo(250, 250);
      //
      // ctx.lineTo(300, 300);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');

    // draw(context, 10);

    let frameCount = 1;
    let animationFrameId;

    console.log('Animation triggered');
    // Our draw came here
    const render = () => {
      console.log('render', frameCount);
      if (frameCount > total.length - 1) return;
      // if (frameCount === vertices.length) {
      //   drawCircle(context, 10);
      //   // animationFrameId = window.requestAnimationFrame(render);
      //   return;
      // }

      console.log('not returned');
      draw(context, frameCount);

      frameCount += 1;
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <canvas style={{ border: '1px solid black' }} ref={canvasRef} width={800} height={500} />
    </div>
  );
};

export default Graph;
