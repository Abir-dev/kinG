import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function SuccessPage() {
  const navigate = useNavigate();
  useEffect(() => {
    // Optionally, you could add a timer to auto-redirect after a few seconds
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,_rgba(0,245,255,0.12),_rgba(136,0,255,0.12),_transparent_100%)] bg-black px-4">
      <img
        src="/success.gif"
        alt="Success"
        className="w-64 h-64 object-contain mb-8 drop-shadow-xl rounded-xl"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-neon-cyan mb-4 text-center">
        Registration Successful!
      </h1>
      <p className="text-lg md:text-2xl text-muted-foreground mb-6 text-center max-w-xl">
        Thank you for registering with Kin-G Technology.<br />
        Your payment has been received and your spot is secured.<br />
        We look forward to seeing you in the course!
      </p>
      <Button
        variant="outline"
        size="lg"
        className="text-lg font-semibold px-8 py-4 flex items-center gap-2 border-neon-cyan/50 hover:bg-neon-cyan/10"
        onClick={() => navigate('/')}
      >
        <span className="inline-block">Back to Home</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-6-6l6 6-6 6" />
        </svg>
      </Button>
    </div>
  );
}
