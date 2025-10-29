// ...Footer component...
export default function Footer() {
  return (
    <footer className="mt-20 bg-sageGreen text-white text-center py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-4">
        <p className="text-xl font-heading">
          “Turning crisis into clarity for families and caregivers.”
        </p>
        <p className="text-sm opacity-90">
          SAGE Promise — 100% Free · 100% Local · 100% Compassionate
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Use</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <p className="text-xs opacity-70 mt-6">© {new Date().getFullYear()} SAGE Senior Advisors</p>
      </div>
    </footer>
  );
}
