import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

export const UserEdit = (props: any) => {
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
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="firstName" label="İsim" />
        <TextInput source="lastName" label="Soyisim" />
        <TextInput source="username" label="Kullanıcı Adı" />
        <TextInput source="email" label="Email" />
        <TextInput source="phone" label="Telefon" />
        <TextInput source="password" label="Telefon" />
        <SelectInput source="role" label={"Rol"} choices={SelectOptions} />
      </SimpleForm>
    </Edit>
  );
};
