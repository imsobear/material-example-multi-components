import * as React from 'react';

type ComponentProps = {
  type: string,
};

export default function Button(props: ComponentProps) {
  const { type, ...others } = props;

  return (
    <div className="button" {...others}>Button: {type}</div>
  );
}
