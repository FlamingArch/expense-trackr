import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { m } from "framer-motion";

// assets

const Intro = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        flexGrow: 1,
        padding: "1.5rem",
        gap: "1.5rem",
        height: "90VH",
      }}
    >
      <div
        style={{
          padding: "1.5rem",
          background: "hsla(220, 50%, 50%, 0.1)",
          borderRadius: "2rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "900" }}>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <h2 style={{ lineHeight: "1.3" }} className="medium">
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </h2>
        <Form
          method="post"
          style={{
            display: "grid",
            gap: "1rem",
            alignItems: "stretch",
            gridTemplateColumns: "1fr auto",
          }}
        >
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
            style={{
              borderRadius: "1rem",
            }}
          />
          <input
            style={{ width: "0px" }}
            type="hidden"
            name="_action"
            value="newUser"
          />
          <button
            type="submit"
            style={{
              fontSize: "1rem",
              padding: "1rem 2.5rem",
              borderRadius: "1rem",
            }}
            className="primary"
          >
            <UserPlusIcon width={20} />
            <span>Start</span>
          </button>
        </Form>
      </div>
      <div
        style={{
          display: "grid",
          flexGrow: 1,
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          src={
            "https://unsplash.com/photos/-C-jTjc0g7I/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg0NDM3NTAwfA&force=true&w=1920"
          }
          alt="Person with money"
        />
      </div>
    </div>
  );
};
export default Intro;
