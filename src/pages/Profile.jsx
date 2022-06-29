import React from "react";
import ProfileInfo from './../components/profile/ProfileInfo';
import AdminMenu from './../components/profile/AdminMenu';

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"))


  return (
    <>
    <ProfileInfo user={user}/>
    {user.role === "admin" && <AdminMenu user={user}/>}
    </>
  );
}

export default Profile;
