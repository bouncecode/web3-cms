/**
 * @author BounceCode, Inc.
 * @packageDocumentation
 */

import React from 'react';
import AdminLayout from '../../../client/layouts/DashboardLayout';
import UserTable from '../../../client/components/User/UserTable';

function UsersPage() {
  return (
    <>
      <h1>사용자 관리</h1>
      <UserTable />
    </>
  );
}

UsersPage.Layout = AdminLayout;

export default UsersPage;
