import ActionFade from "../ActionFade";

interface Props {
  className?: string;
}
const Dot: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ActionFade
        className="w-4 h-4 rounded-full"
        comp1={
          <div
            className="w-4 h-4 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(70deg, #9945FF -7.78%, #14F195 106.39%)",
            }}
          />
        }
        comp2={
          <div
            className="w-4 h-4 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(70deg, #ffffff -7.78%, #ffffff 106.39%)",
            }}
          />
        }
      />
    </div>
  );
};

export default Dot;
