import React from "react";
import TwitterLogin from "react-twitter-login";

export default props => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey="ZCLTXz3svCdaPjY3uNnagbVAm"
      consumerSecret="ie9n3UTSn6EFu634HSE8sgx5EHiT6Ly2sf0Zga9D8Ji67Tb057"
      callbackUrl="http://gregraphics.net/twitter"
      buttonTheme="dark"
    />
  );
};

// http://gregraphics.net/?oauth_token=G_FmaQAAAAABA7_wAAABcmQJWGg&oauth_verifier=U19CMRZbHVyRFgyo5ZCu821YUOEiKibo

// https://md0qm.csb.app/?oauth_token=30TE1AAAAAABA7_wAAABcmQLsrw&oauth_verifier=eru4l6GONPKPbvv0vtjb4xTDosewW9Z2
