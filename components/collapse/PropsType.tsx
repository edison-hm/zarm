export interface BaseCollapseProps {
  activeIndex?: string | number | Array<string | number>;
  defaultActiveIndex?: string | number | Array<string | number>;
  activeKey?: string | number | Array<string | number>;
  defaultActiveKey?: string | number | Array<string | number>;
  multiple?: boolean;
  animated?: boolean;
  open?: boolean;
  onChange: (key: number) => void;
}

export interface BaseCollapseItemProps {
  title: string | JSX.Element;
  index: string;
  activeIndex?: Array<string>;
  animated?: boolean;
  open?: boolean;
  onItemChange?: (key: string) => void;
}
