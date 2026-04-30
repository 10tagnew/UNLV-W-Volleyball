import { forwardRef } from "react";

interface VimeoBackgroundProps {
  videoId: string;
  className?: string;
  /** opacity override, 0–1 */
  opacity?: number;
}

/**
 * Full-bleed Vimeo background video that covers its container.
 * Uses Vimeo's ?background=1 to autoplay, loop, and mute with no controls.
 * The parent must have position:relative (or absolute/fixed) + overflow:hidden.
 */
const VimeoBackground = forwardRef<HTMLDivElement, VimeoBackgroundProps>(
  ({ videoId, className = "", opacity = 1 }, ref) => {
    const src = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&dnt=1#t=15s`;

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
            /* Cover the container in both orientations */
            width: "100vw",
            height: "56.25vw",   /* 16:9 at viewport width */
            minHeight: "100%",
            minWidth: "177.78vh", /* 16:9 at viewport height */
            transform: "translate(-50%, -50%)",
            border: "none",
          }}
        />
      </div>
    );
  }
);

VimeoBackground.displayName = "VimeoBackground";
export default VimeoBackground;
