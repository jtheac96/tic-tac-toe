export const Square = ({ 
  value,
  onSquareClick 
}: { 
  value: number | string | null, 
  onSquareClick: () => void 
}) => {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}