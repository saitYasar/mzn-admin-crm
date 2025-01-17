import React from "react";
import { useRecordContext, SelectField } from "react-admin";
import {
  ArbitrajStages,
  DropshippingStages,
  MusteriDurumu,
  PrivateLabelStages,
  SuspendStages,
} from "../../lib/enum/enums";
const CustomSelectField = (props: any) => {
  const record = useRecordContext();
  if (!record) return null;
  const getStages = (condition: string) => {
    switch (condition) {
      case "dropshipping":
        return DropshippingStages;
      case "privateLabel":
        return PrivateLabelStages;
      case "arbitraj":
        return ArbitrajStages;
      case "suspend":
        return SuspendStages;
      default:
        return [];
    }
  };

  return (
    <SelectField
      source="stage"
      label="Öğrenci Durumu"
      choices={getStages(record.type)} // record'daki type alanını dinamik olarak kullanıyoruz
      {...props}
    />
  );
};

export default CustomSelectField;
