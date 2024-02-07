import { DotIcon } from "lucide-react";
import React from "react";

const InstructorPart = () => {
  return (
    <div className=" w-[40.565rem] h-fit mx-auto mt-12 flex flex-col items-start justify-start gap-4 px-6">
      <h1 className=" font-bold text-4xl text-slate-900">Instructor Terms</h1>
      <p className=" italic">
        These Instructor Terms were last updated May 3, 2021.
      </p>
      <p>
        When you sign up to become an instructor on the Udemy platform, you
        agree to abide by these Instructor Terms ("Terms"). These Terms cover
        details about the aspects of the Udemy platform relevant to instructors
        and are incorporated by reference into our Terms of Use, the general
        terms that govern your use of our Services. Any capitalized terms that
        aren't defined in these Terms are defined as specified in the Terms of
        Use.
      </p>
      <p>
        As an instructor, you are contracting directly with Udemy, Inc. (a
        Delaware corporation in the United States), regardless of whether
        another Udemy subsidiary facilitates payments to you.
      </p>
      <h2 className=" mt-10 font-bold text-2xl text-Udemygray-500">
        1. License to Udemy
      </h2>
      <p>
        You grant Udemy the rights detailed in the Terms of Use to offer,
        market, and otherwise exploit your Submitted Content. This includes the
        right to add captions or otherwise modify Submitted Content to ensure
        accessibility. You also authorize Udemy to sublicense these rights to
        your Submitted Content to third parties, including to students directly
        and through third parties such as resellers, distributors, affiliate
        sites, deal sites, and paid advertising on third-party platforms.
      </p>
      <p>
        Unless otherwise agreed (including within our Promotions Policy), you
        have the right to remove all or any portion of your Submitted Content
        from the Services at any time. Except as otherwise agreed, Udemy's right
        to sublicense the rights in this section will terminate with respect to
        new users 60 days after the Submitted Content's removal. However, (1)
        rights given to students before the Submitted Content's removal will
        continue in accordance with the terms of those licenses (including any
        grants of lifetime access) and (2) Udemy's right to use such Submitted
        Content for marketing purposes shall survive termination.
      </p>
      <p>
        We may record and use all or any part of your Submitted Content for
        quality control and for delivering, marketing, promoting, demonstrating,
        or operating the Services. You grant Udemy permission to use your name,
        likeness, voice, and image in connection with offering, delivering,
        marketing, promoting, demonstrating, and selling the Services, your
        Submitted Content, or Udemy's content, and you waive any rights of
        privacy, publicity, or other rights of a similar nature, to the extent
        permissible under applicable law.
      </p>
      <h2 className=" mt-10 font-bold text-2xl text-Udemygray-500">
        2. Trust & Safety
      </h2>
      <p>
        You agree to abide by Udemy's Trust & Safety policies, Restricted Topics
        policy, and other content quality standards or policies prescribed by
        Udemy from time to time. You should check these policies periodically to
        ensure that you comply with any updates to them. You understand that
        your use of the Services is subject to Udemy's approval, which we may
        grant or deny at our sole discretion.
      </p>
    </div>
  );
};

export default InstructorPart;
