import ActionFade from "../ActionFade";

interface Props {
  className?: string;
}
const SmallDot: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ActionFade
        className="w-2 h-2 rounded-full"
        comp1={
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(70deg, #9945FF -7.78%, #14F195 106.39%)",
            }}
          />
        }
        comp2={
          <div
            className="w-2 h-2 rounded-full"
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

export default SmallDot;
