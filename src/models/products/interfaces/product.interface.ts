export interface Product {
  id: number;
  title: string;
  category: string;
  categoryShortname: string;
  localizedTitle: string;
  description: string;
  instructions: {
    start: string;
    stop: string;
    note: string;
    dosage: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
