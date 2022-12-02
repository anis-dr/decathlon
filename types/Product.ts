export interface Product {
  decathlon_id: number;
  name: string;
  super_model_id: string;
}

export interface SportsList {
  decathlon_id: number;
  name: string;
}

export interface Type {
  decathlon_id: number;
  name: string;
}

export interface Item {
  brand_label: string;
  color_label: string;
  country_code: string[];
  image_url: string;
  product: Product;
  season_years_list: string[];
  sports_list: SportsList[];
  type: Type;
}
