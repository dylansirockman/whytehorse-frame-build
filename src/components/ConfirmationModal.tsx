import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  refId?: string;
  title?: string;
  message?: string;
  onViewNextSteps?: () => void;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
}

const ConfirmationModal = ({
  open,
  onOpenChange,
  refId,
  title = "Request received",
  message = "Thanks—your residential framing quote is on its way. We'll contact you within 24 hours.",
  onViewNextSteps
}: ConfirmationModalProps) => {
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [timeLeft, setTimeLeft] = useState(3000);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const confettiRef = useRef<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout>();

  const colors = ['#10B981', '#FB923C', '#1F2937', '#23D3A0'];

  // Generate confetti particles
  const generateConfetti = () => {
    const particles: Confetti[] = [];
    for (let i = 0; i < 8; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 30 + 35,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * -3 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1
      });
    }
    setConfetti(particles);

    // Animate confetti
    let frame = 0;
    const animateConfetti = () => {
      frame++;
      setConfetti(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.vx,
        y: particle.y + particle.vy,
        vy: particle.vy + 0.1, // gravity
        opacity: Math.max(0, 1 - frame / 60) // fade out over 60 frames
      })));

      if (frame < 60) {
        confettiRef.current = setTimeout(animateConfetti, 16);
      } else {
        setConfetti([]);
      }
    };

    // Check for reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      confettiRef.current = setTimeout(animateConfetti, 16);
    }
  };

  // Auto-dismiss timer
  useEffect(() => {
    if (open && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 100) {
            onOpenChange(false);
            return 0;
          }
          return prev - 100;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [open, isPaused, timeLeft, onOpenChange]);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setShowCheckmark(false);
      setConfetti([]);
      setTimeLeft(3000);
      setIsPaused(false);
      
      // Start checkmark animation
      timerRef.current = setTimeout(() => {
        setShowCheckmark(true);
        // Start confetti after checkmark completes
        setTimeout(generateConfetti, 450);
      }, 200);
    } else {
      // Reset state when closed
      setShowCheckmark(false);
      setConfetti([]);
      setTimeLeft(3000);
      setIsPaused(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (confettiRef.current) clearTimeout(confettiRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [open]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-md mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-0 p-0 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-labelledby="confirmation-title"
        aria-describedby="confirmation-message"
        style={{
          animation: open 
            ? 'scale-in 260ms cubic-bezier(0.4, 0, 0.2, 1)' 
            : 'scale-out 180ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md -z-10" />
        
        {/* Confetti particles */}
        {confetti.map(particle => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              transform: 'translateZ(0)' // Force GPU acceleration
            }}
          />
        ))}

        <div className="relative p-8 text-center">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close confirmation"
          >
            <X className="h-4 w-4 text-construction-gray" />
          </button>

          {/* Success icon */}
          <div className="mx-auto w-16 h-16 mb-6 relative">
            <div className="w-full h-full rounded-full bg-construction-green/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-construction-green"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 24,
                    strokeDashoffset: showCheckmark ? 0 : 24,
                    transition: 'stroke-dashoffset 450ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </svg>
              
              {/* Glow effect */}
              {showCheckmark && (
                <div 
                  className="absolute inset-0 rounded-full bg-construction-green/20"
                  style={{
                    animation: 'pulse 300ms ease-out 450ms'
                  }}
                />
              )}
            </div>
          </div>

          {/* Content */}
          <h2 
            id="confirmation-title"
            className="text-2xl font-bold text-construction-dark mb-3 font-poppins"
          >
            {title}
          </h2>
          
          <p 
            id="confirmation-message"
            className="text-construction-gray text-base leading-relaxed mb-2"
          >
            {message}
          </p>

          {/* Reference ID */}
          {refId && (
            <p className="text-sm text-construction-gray/70 mb-6">
              Ref #: <span className="font-mono font-medium">{refId}</span>
            </p>
          )}

          {/* Auto-dismiss progress bar */}
          <div className="w-full bg-construction-light/20 rounded-full h-1 mb-6 overflow-hidden">
            <div 
              className="h-full bg-construction-green transition-all duration-100 ease-linear rounded-full"
              style={{ 
                width: `${(timeLeft / 3000) * 100}%`,
                opacity: isPaused ? 0.5 : 1
              }}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <Button
              onClick={handleClose}
              variant="outline"
              size="sm"
              className="px-6 border-construction-light text-construction-gray hover:bg-construction-light/10"
            >
              Close
            </Button>
            
            {onViewNextSteps && (
              <Button
                onClick={onViewNextSteps}
                variant="hero"
                size="sm"
                className="px-6 bg-gradient-to-b from-[#23D3A0] to-[#10B981] text-white shadow-lg hover:brightness-105"
              >
                View next steps
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;