import Image from "next/image";
import React from "react";
import news from "@/src/assets/images/news.png";
import NewsIcon from "@/src/assets/icons/news";
import Button from "@/src/components/button";
import { TextInput } from "@mantine/core";
function NewsLetter() {
  return (
    <div className=" bg-grayBack">
      <div className=" max-w-screen-2xl mx-auto py-8 flex items-center gap-4 px-20">
        <div>
          <h2 className="text-[42px] mb-1 font-Bold">Stay informed</h2>
          <h3 className="text-[22px] font-Bold mb-3">
            Subscribe to our newsletter to receive news about okoRent
          </h3>
          <p className="text-lg font-Regular mb-7">
            You stay informed about all the news from okoRent such as new
            announcements that may interest you, etc. Never spam.
          </p>
          <form className="flex items-center gap-3">
            <TextInput
              placeholder="Your First Name"
              classNames={{
                input:
                  " text-black rounded-xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className="h-[56px]  w-[320px] duration-200 min-h-[56px] bg-white rounded-xl border border-green text-grayMedium"
            />
            <TextInput
              placeholder="Your Email"
              classNames={{
                input:
                  " text-black rounded-xl text-grayMedium bg-transparent  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className="h-[56px]  w-[320px] duration-200 min-h-[56px] bg-transparent rounded-xl border-none border-green text-grayMedium"
            />
            <Button className={"w-fit !px-7 h-[56px] "}>Subscribe</Button>
          </form>
        </div>

        <div className="max-w-[630px] w-full h-auto">
          <NewsIcon />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
