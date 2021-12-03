import React, { memo } from 'react';
import Layout from '../Layout';

function SettingsPage() {
  return (
    <Layout.Container>
      <Layout.Title>Settings</Layout.Title>
      <Layout.Content>Something</Layout.Content>
      <Layout.Bottom>Something else</Layout.Bottom>
    </Layout.Container>
  );
}

export default memo(SettingsPage);
