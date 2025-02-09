import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";

export const UserCreate = (props: any) => {
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
    firstName: formData.firstName,
    lastName: formData.lastName,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    role: formData.role,
  });

  return (
    <Create {...props} transform={transform}>
      <SimpleForm>
        <TextInput source="firstName" label="İsim" fullWidth />
        <TextInput source="lastName" label="Soyisim" fullWidth />
        <TextInput source="username" label="Kullanıcı Adı" fullWidth />
        <TextInput source="email" label="Email" fullWidth />
        <TextInput source="phone" label="Telefon" fullWidth />
        <TextInput source="password" label="Şifre" fullWidth />
        <SelectInput
          fullWidth
          source="role"
          label={"Rol"}
          choices={SelectOptions}
        />
      </SimpleForm>
    </Create>
  );
};
