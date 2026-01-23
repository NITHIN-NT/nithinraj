import React, { useEffect, useRef } from 'react';

const BackgroundElements = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        // Soft Gradient Orbs
        const orbs = [
            { x: 0.2, y: 0.2, radius: 400, color: 'rgba(59, 130, 246, 0.08)', vx: 0.0005, vy: 0.0007 },
            { x: 0.8, y: 0.8, radius: 500, color: 'rgba(139, 92, 246, 0.08)', vx: -0.0006, vy: -0.0004 },
            { x: 0.5, y: 0.5, radius: 350, color: 'rgba(14, 165, 233, 0.07)', vx: 0.0004, vy: -0.0008 }
        ];

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            orbs.forEach(orb => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                if (orb.x < 0 || orb.x > 1) orb.vx *= -1;
                if (orb.y < 0 || orb.y > 1) orb.vy *= -1;

                const gradient = ctx.createRadialGradient(
                    orb.x * canvas.width, orb.y * canvas.height, 0,
                    orb.x * canvas.width, orb.y * canvas.height, orb.radius
                );
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2,
                pointerEvents: 'none',
                background: '#ffffff'
            }}
        />
    );
};

export default BackgroundElements;
