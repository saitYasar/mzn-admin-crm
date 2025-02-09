import {
  Create,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const MissionCreate = (props: any) => {
  const SelectOptions = [
    { id: 1, name: "Dropshipping" },
    { id: 2, name: "DropshippingLider" },
    { id: 3, name: "Arbitraj" },
    { id: 4, name: "ArbitrajLider" },
    { id: 5, name: "Satis" },
    { id: 6, name: "SatisLider" },
    { id: 7, name: "SosyalMedya" },
    { id: 8, name: "SosyalMedyaLider" },
    { id: 9, name: "PrivateLabel" },
    { id: 10, name: "PrivateLabelLider" },
    { id: 11, name: "Suspend" },
    { id: 12, name: "SuspendLider" },
    { id: 13, name: "Admin" },
  ];
  const transform = (formData: any) => ({
    targetDate: formData.targetDate,
    missionType: formData.missionType,
    status: formData.status,
    note: formData.note,
    baseUser: localStorage.getItem("id"),
    targetUser: formData.targetUser,
  });

  return (
    <Create transform={transform} {...props}>
      <SimpleForm>
        <DateInput fullWidth source="targetDate" label="Atanma Tarihi" />
        <DateInput fullWidth source="endDate" label="Bitiş Tarihi" />

        <SelectInput
          source="status"
          fullWidth
          label="Durum"
          choices={[
            { id: "0", name: "Yeni Açıldı" },
            { id: "1", name: "İşlemde" },
            { id: "2", name: "Tamamlandı" },
          ]}
        />
        <TextInput fullWidth source="note" label="Not" />
        <ReferenceInput
          fullWidth
          label="Atanan Kişi"
          source="targetUser"
          reference="users"
        >
          <SelectInput
            fullWidth
            optionText={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
