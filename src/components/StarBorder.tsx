import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
    as,
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || 'button';

    return (
        <Component
            className={`relative inline-block overflow-hidden group ${className}`}
            {...(rest as any)}
            style={{
                padding: `${thickness}px`,
                ...(rest as any).style
            }}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 group-hover:scale-[10] group-hover:opacity-100 transition-all duration-500"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 group-hover:scale-[10] group-hover:opacity-100 transition-all duration-500"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div className="relative z-1 h-full w-full bg-[#1a1a1a] flex items-center justify-center text-white text-center rounded-[inherit] transition-colors duration-500 group-hover:bg-[#d4ff00] group-hover:text-black shadow-[inset_0_0_20px_rgba(212,255,0,0)] group-hover:shadow-[inset_0_0_20px_rgba(212,255,0,0.5)]">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
