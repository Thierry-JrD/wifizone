interface StatsCardProps {
    headerTitle: string;
    total: number;
    icon: string;
};

interface PackCardProps {
  type: string;
  maxRouter: number;
  price: number;
  expireDate: string;
  expireTime: string;
  status: string;
};

interface PackCardPileProps {
  icon: string;
  label: string;
  info: any;
};