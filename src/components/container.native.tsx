import React from 'react';
import ListItem from './listItem.native';

type ContainerProps = {
  data: any[];
};

const Container = ({data}: ContainerProps) => {
  return (
    <>
      {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </>
  );
};

export default Container;
