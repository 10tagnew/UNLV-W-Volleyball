import { forwardRef } from "react";

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
  opacity?: number;
}

/**
 * Full-bleed YouTube background video (autoplay, muted, looped, no controls).
 * Parent must have position:relative/absolute/fixed + overflow:hidden.
 */
const YouTubeBackground = forwardRef<HTMLDivElement, YouTubeBackgroundProps>(
  ({ videoId, className = "", opacity = 1 }, ref) => {
    const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=0`;

    return (
      <div
        ref={ref}
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        style={{ opacity }}
      >
        <iframe
          src={src}
          allow="autoplay; fullscreen"
          allowFullScreen={false}
          title="background video"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw",
            minHeight: "100%",
            minWidth: "177.78vh",
            transform: "translate(-50%, -50%)",
            border: "none",
          }}
        />
      </div>
    );
  }
);

YouTubeBackground.displayName = "YouTubeBackground";
export default YouTubeBackground;
