"use client";

import { SignIn } from "@clerk/nextjs";
import styles from "@/app/styles/auth.module.css";

export function CustomSignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.logo}>Scholarly</h1>
      </div>
      <div className={styles.rightPanel}>
        <SignIn 
          appearance={{
            elements: {
              rootBox: styles.formContainer,
              card: styles.formCard,
              formButtonPrimary: styles.customButton,
              socialButtonsBlockButton: styles.customButton,
            }
          }}
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/welcome"
        />
      </div>
    </div>
  );
}
