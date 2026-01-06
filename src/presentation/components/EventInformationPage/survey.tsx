import React, { useEffect, useState } from "react";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import { Checkbox } from "../common/checkbox";
import { Input } from "antd";

const Survey = () => {
  const [form] = Form.useForm();
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherValue, setOtherValue] = useState("");

  useEffect(() => {
    if (showOtherInput) {
    }
  }, [showOtherInput]);

  const handleCheckboxChange = (checkedValues) => {
    setShowOtherInput(checkedValues);

    if (!checkedValues) {
      setOtherValue("");
    }
  };

  const handleSubmit = (values) => {
    if (showOtherInput) {
      values.name = [otherValue];
    }
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-[20px] px-[16px]">
      <div className="flex flex-col gap-[12px]">
        <div className="text-xl font-medium">
          Khảo sát trải nghiệm sữa Vitadairy
        </div>
        <div className="text-sm font-normal text-neutral6">
          Bạn vui lòng điền đúng và đủ thông tin để được nhận quà từ BTC
        </div>
      </div>
      <Form
        form={form}
        className="flex flex-col gap-[20px]"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="usage"
          label="Bạn/gia đình bạn đang có sử dụng sữa tươi hàng ngày hay không?"
          labelFontSize={12}
        >
          <Radio.Group
            items={surveyOptions1}
            render={(item) => (
              <div className="text-sm font-normal text-neutral8">
                {item?.label}
              </div>
            )}
            className="flex flex-col gap-[12px]"
            allowUncheck
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Nhãn hiệu sữa tươi bạn/gia đình bạn đang sử dụng"
          labelFontSize={12}
        >
          <Checkbox.Group
            options={surveyOptions2}
            className="flex flex-col gap-[12px]"
            color="#F7B6D1"
            disabled={showOtherInput}
          />
        </Form.Item>
        <div className="-mt-[8px] flex items-center">
          <Checkbox
            className="whitespace-nowrap"
            onChange={(e) => handleCheckboxChange(e.target.checked)}
            color="#F7B6D1"
          >
            Mục khác:
          </Checkbox>
          <Input
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
            className="w-full"
            disabled={!showOtherInput}
            variant="underlined"
          />
        </div>
      </Form>
    </div>
  );
};

export { Survey };

const surveyOptions1 = [
  { label: "Có", value: "yes" },
  { label: "Không", value: "no" },
];

const surveyOptions2 = [
  { label: "Vitadairy", value: "Vitadairy" },
  { label: "Vinamilk", value: "Vinamilk" },
  { label: "TH Truemilk", value: "TH Truemilk" },
  { label: "Dalatmilk", value: "Dalatmilk" },
  { label: "Nutifood", value: "Nutifood" },
  { label: "Nestle", value: "Nestle" },
];
