type KittenProps = {
  width: number;
  height: number;
};

export default function Kitten({ width, height }: KittenProps) {
  return (
    <img alt="kitten!" src={`https://placekitten.com/${width}/${height}`} />
  );
}
