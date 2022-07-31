import * as CSS from 'csstype';
import { defaultTheme } from 'styles/themes';

type ColorOptions = keyof typeof defaultTheme.fontColors;
type AllColors = keyof typeof defaultTheme.colors;

export type SignatureCardButtonProps = {
  padding?: CSS.Property.Padding;
  margin?: number;
  width?: number;
  height?: number;
  radius?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: ColorOptions;
  backgroundColor?: AllColors;
  flexDirection?: CSS.Property.FlexDirection;
  flexWrap?: boolean;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  textAlign?: CSS.Property.TextAlign;
  textTransform?: CSS.Property.TextTransform;
};

export type IProps = {
  plan: string;
}
