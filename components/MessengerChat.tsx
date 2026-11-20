"use client";
import { useEffect } from "react";
import { BUSINESS } from "@/lib/constants";

// Extract page ID from the Facebook URL
// e.g. https://www.facebook.com/Dreamcleanshine → Dreamcleanshine
const PAGE_ID = BUSINESS.facebook.split("/").filter(Boolean).pop() ?? "";

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: {
      init: (opts: object) => void;
      CustomerChat?: { show: (opts: { shouldShowDialog: boolean }) => void };
    };
  }
}

export default function MessengerChat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB?.init({ xfbml: true, version: "v19.0" });
    };

    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        // @ts-expect-error — FB custom attributes
        attribution="biz_inbox"
        page_id={PAGE_ID}
        theme_color="#F42D88"
        logged_in_greeting="Hi! How can Dream Clean Shine help you today?"
        logged_out_greeting="Hi! How can Dream Clean Shine help you today?"
      />
    </>
  );
}
