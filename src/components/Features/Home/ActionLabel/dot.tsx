import ActionFade from "../ActionFade";

interface Props {
  className?: string;
  innerClassName?: string;
  nBackground?: number;
}
const Dot: React.FC<Props> = ({ className, innerClassName, nBackground }) => {
  return (
    <div className={`${className}`}>
      {nBackground == undefined && (
        <ActionFade
          className={`w-3 h-3 rounded-full ${innerClassName}`}
          comp1={
            <div
              className={`w-3 h-3 rounded-full ${innerClassName}`}
              style={{
                backgroundImage:
                  "linear-gradient(70deg, #9945FF -7.78%, #14F195 106.39%)",
              }}
            />
          }
          comp2={
            <div
              className={`w-3 h-3 rounded-full ${innerClassName}`}
              style={{
                backgroundImage:
                  "linear-gradient(70deg, #ffffff -7.78%, #ffffff 106.39%)",
              }}
            />
          }
        />
      )}
      {nBackground == 0 && (
        <div
          className={`w-3 h-3 rounded-full ${innerClassName}`}
          style={{
            backgroundImage:
              "linear-gradient(70deg, #9945FF -7.78%, #14F195 106.39%)",
          }}
        />
      )}
      {nBackground == 1 && (
        <div
          className={`w-3 h-3 rounded-full ${innerClassName}`}
          style={{
            backgroundImage:
              "linear-gradient(70deg, #ffffff -7.78%, #ffffff 106.39%)",
          }}
        />
      )}
    </div>
  );
};

export default Dot;
