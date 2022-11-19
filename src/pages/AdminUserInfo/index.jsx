import React from "react";
import AdminNavBar from "../../components/AdminNavBar";
import styled from "./index.module.css";
import { Button, FormLabel, Input, FormControl, Icon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function AdminUserInfo() {
  return (
    <>
      <AdminNavBar />
      {/* User details section */}
      <section
        className={`${styled["general-info"]} ${styled["main-section"]}`}
      >
        <FormControl>
          <div>
            <FormLabel>User General Info</FormLabel>
            <Button>
              {/* TODO: This should be changed to Save changes and disabled field should be enabled after click */}
              <EditIcon />
            </Button>
          </div>

          <div>
            <label className={`${styled["form-label"]}`} htmlFor="id">
              User ID
            </label>
            <Input id="id" disabled />
          </div>

          <div>
            <label className={`${styled["form-label"]}`} htmlFor="name">
              Name
            </label>
            <Input id="name" />
          </div>
          <div>
            <label className={`${styled["form-label"]}`} htmlFor="age">
              Age
            </label>
            <Input id="age" type="number" />
          </div>
          <div>
            <label className={`${styled["form-label"]}`} htmlFor="nic">
              NIC
            </label>
            <Input id="nic" />
          </div>
        </FormControl>
      </section>

      {/* Login info Section */}
      <section
        className={`${styled["general-info"]} ${styled["main-section"]}`}
      >
        <FormControl>
          <div>
            <FormLabel>User General Info</FormLabel>
            <Button>
              <EditIcon />
            </Button>
          </div>

          <div>
            <label className={`${styled["form-label"]}`} htmlFor="username">
              Username
            </label>
            <Input id="username" disabled />
          </div>

          <div>
            <label className={`${styled["form-label"]}`} htmlFor="password">
              Password
            </label>
            <Input id="password" disabled />
          </div>
        </FormControl>
      </section>
    </>
  );
}
