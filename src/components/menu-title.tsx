export default function MenuTitle({ text }) {
  return (
    <div className="flex items-start gap-6 self-stretch">
      <p className="text-text-primary font-poppins text-base font-semibold">
        {text}
      </p>
    </div>
  );
}
