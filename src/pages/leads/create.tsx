import { Create, SelectInput, SimpleForm, TextInput } from "react-admin";

export const LeadsCreate = (props: any) => {
  const transform = (formData: any) => ({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    status: formData.status,
    type: formData.type,
    price: formData.price,
    call: "1",
    images: "",
  });
  return (
    <Create transform={transform} {...props}>
      <SimpleForm>
        <TextInput source="firstName" fullWidth label="İsim" />
        <TextInput source="lastName" fullWidth label="Soyisim" />
        <TextInput source="email" fullWidth label="Email" />
        <TextInput source="phone" fullWidth label="Telefon" />
        <SelectInput
          source="status"
          fullWidth
          label="Müşteri Durumu"
          choices={[
            { id: "0", name: "Yeni" },
            { id: "1", name: "Yeni {Bizden Gelen}" },
            { id: "2", name: "İletişimde" },
            { id: "3", name: "Takipte" },
            { id: "4", name: "İlgili" },
            { id: "5", name: "Pazarlıkta" },
            { id: "6", name: "Satış Tamamlandı" },
            { id: "7", name: "Kaybedildi" },
            { id: "8", name: "Niteliksiz" },
          ]}
        />
        <SelectInput
          source="type"
          fullWidth
          label="Müşteri Tipi"
          choices={[
            { id: 0, name: "Tanımlanmadı" },
            { id: 1, name: "Dropshipping" },
            { id: 2, name: "Arbitraj" },
            { id: 3, name: "PrivateLabel" },
            { id: 4, name: "Suspend" },
          ]}
        />
        <TextInput fullWidth source="price" label="Teklif" />
        {/* <TextInput source="call" label="Arama" />
        <TextInput source="images" label="Resimler" /> */}
      </SimpleForm>
    </Create>
  );
};
