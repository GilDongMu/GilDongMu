import React, { ChangeEvent, useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function IntroTextarea({ onChange, value }: { onChange: (value: string) => void, value: string }) {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    if (inputText.length <= 200) {
      setText(inputText);
      onChange(inputText);
    }
  };

  return (
    <div className="w-[756px] tablet:w-[672px] mobile:w-272 flex flex-col gap-4">
        <Label htmlFor="intro">자기소개</Label>
        <Textarea
          id="intro"
          value={text}
          onChange={handleChange}
          className="w-full h-137 bg-bg-02 resize-none placeholder:text-text-05 tablet:w-[672px] mobile:w-272 border border-line-020 rounded-12 px-16 py-16 focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white focus:border focus:border-line-01"
          placeholder="자기소개를 입력해 주세요"
        />
        <p className="text-sm text-gray-500 mt-1 self-end">{text?.length ?? 0} / 200</p>
      </div>
  );
}

export default IntroTextarea;