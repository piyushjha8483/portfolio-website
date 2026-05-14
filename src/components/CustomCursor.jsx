import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const follow = (e) => {
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80);
    };
    const over = (e) => {
      setHovering(!!(e.target.closest('a') || e.target.closest('button')));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', follow);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', follow);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px) scale(${hovering ? 2 : 1})`,
          display: window.innerWidth < 768 ? 'none' : 'block',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          transform: `translate(${follower.x - 18}px, ${follower.y - 18}px) scale(${hovering ? 1.5 : 1})`,
          display: window.innerWidth < 768 ? 'none' : 'block',
        }}
      />
    </>
  );
};

export default CustomCursor;
