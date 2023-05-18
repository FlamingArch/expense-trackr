import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";
import React from "react";

// assets

const Intro = () => {
  return (
    <div className="intro">
      <div className="flex flex-col" style={{ gap: "3rem" }}>
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
      <img
        src={
          "https://unsplash.com/photos/-C-jTjc0g7I/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg0NDM3NTAwfA&force=true&w=1920"
        }
        alt="Person with money"
        style={{
          borderRadius: "32px",
          height: "90vh",
        }}
      />
    </div>
  );
};
export default Intro;
