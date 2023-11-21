export interface Product {
  id: number;
  title: string;
  localizedTitle: string;
  description: string;
  instructions: {
    start: string;
    stop: string;
    note: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
