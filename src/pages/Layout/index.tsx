import React from 'react';
import './index.scss';

const Container = (props: { children: React.ReactNode }) => {
  return <div className="layout-container">{props.children}</div>;
};

const Title = (props: { children: React.ReactNode }) => {
  return <div className="layout-title">{props.children}</div>;
};

const Content = (props: { children: React.ReactNode; useBottom?: boolean }) => {
  return (
    <div className={`layout-content ${props.useBottom ? 'use-bottom' : ''}`}>
      {props.children}
    </div>
  );
};

const Bottom = (props: { children: React.ReactNode }) => {
  return <div className="layout-bottom">{props.children}</div>;
};

export default {
  Container,
  Title,
  Content,
  Bottom
};
