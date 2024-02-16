import { formatAmountToCurrency } from "@/utilities/transform-to-currency";

type CardProps = {
  title: string;
  description: string;
  amount: number;
};

export const Card = ({ title, description, amount }: CardProps) => {
  return (
    <div className="container  bg-white p-6 rounded-lg">
      <span>
        <h1 className="font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-400">{description}</p>

        <h1 className="mt-4 text-3xl font-semibold text-gray-800">
          {formatAmountToCurrency(amount)}
        </h1>
      </span>
    </div>
  );
};
