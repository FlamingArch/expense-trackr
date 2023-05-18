// reacts
import { useEffect, useRef } from "react";

// rrd imports
import { Form, useFetcher } from "react-router-dom";

// library imports
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React from "react";

const AddBudgetForm = ({ isVisible }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting && isVisible) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    isVisible && (
      <div
        style={{
          position: "fixed",
          display: "grid",
          placeContent: "center",
          inset: 0,

          backdropFilter: "blur(0rem) saturate(100%) brightness(50%)",
          webkitBackdropFilter: "blur(0rem) saturate(100%) brightness(50%)",
          zIndex: 20,
        }}
      >
        <div
          className="form-wrapper"
          style={{
            backdropFilter: "blur(2rem) saturate(150%) brightness(200%)",
            webkitBackdropFilter: "blur(2rem) saturate(150%) brightness(200%)",
            border: "none",
          }}
        >
          <h2 className="h3 medium" style={{ paddingBottom: "1rem" }}>
            Create budget
          </h2>
          <fetcher.Form method="post" className="grid-sm" ref={formRef}>
            <div className="grid-xs" style={{ gap: "0.5rem" }}>
              <label htmlFor="newBudget">Budget Name</label>
              <input
                type="text"
                name="newBudget"
                id="newBudget"
                placeholder="e.g., Groceries"
                required
                ref={focusRef}
              />
            </div>
            <div className="grid-xs" style={{ gap: "0.5rem" }}>
              <label htmlFor="newBudgetAmount">Amount</label>
              <input
                type="number"
                step="0.01"
                name="newBudgetAmount"
                id="newBudgetAmount"
                placeholder="e.g., $350"
                required
                inputMode="decimal"
              />
            </div>
            <input type="hidden" name="_action" value="createBudget" />
            <button
              type="submit"
              style={{ marginLeft: "auto", marginTop: "1rem" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Submitting…</span>
              ) : (
                <>
                  <CurrencyDollarIcon width={20} />
                  <span>Create budget</span>
                </>
              )}
            </button>
          </fetcher.Form>
        </div>
      </div>
    )
  );
};
export default AddBudgetForm;
