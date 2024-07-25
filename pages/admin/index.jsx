import UsersTable from "@/components/organisms/tables/UsersTable";
import { getMessages } from "@/services/authService";
import React from "react";

export default function page() {
  

  return (
    <div className='w-full h-screen mt-60'>
      <UsersTable />
    </div>
  );
}
