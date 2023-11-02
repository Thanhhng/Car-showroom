type buttonPros = {
  onClick: () => {}
}
type VoidCallback = () => void;

export default function CarDetail({onClick}:buttonPros){
    return (
    <div className="modal">
      <div>
        <button onClick={onClick}>Close</button>
      </div>
    </div>
)
}