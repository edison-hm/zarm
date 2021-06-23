import React from 'react';
import classnames from 'classnames';
import { BaseBadgeProps } from './interface';

export interface BadgeProps extends BaseBadgeProps, React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
}

function Badge(props: BadgeProps) {
  const { prefixCls, className, theme, shape, text, children, ...restProps } = props;
  return (
    <span
      className={classnames(
        prefixCls,
        {
          [`${prefixCls}--${theme}`]: !!theme,
          [`${prefixCls}--${shape}`]: shape,
          [`${prefixCls}--sup`]: !!children,
        },
        className,
      )}
    >
      {children}
      <sup className={`${prefixCls}__content`} {...restProps}>
        {shape !== 'dot' && text}
      </sup>
    </span>
  );
}

Badge.displayName = 'Badge';

Badge.defaultProps = {
  prefixCls: 'za-badge',
  shape: 'dot',
  theme: 'danger',
};

export default Badge;
