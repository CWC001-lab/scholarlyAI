"use client";

import { SignUp } from "@clerk/nextjs";
import styles from "@/app/styles/auth.module.css";

export function CustomSignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.logo}>Scholarly</h1>
      </div>
      <div className={styles.rightPanel}>
        <SignUp 
          appearance={{
            elements: {
              rootBox: styles.formContainer,
              card: styles.formCard,
              formButtonPrimary: styles.customButton,
              socialButtonsBlockButton: styles.customButton,
            }
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/welcome"
        />
      </div>
    </div>
  );
}
