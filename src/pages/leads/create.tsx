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
        <TextInput source="firstName" label="İsim" />
        <TextInput source="lastName" label="Soyisim" />
        <TextInput source="email" label="Email" />
        <TextInput source="phone" label="Telefon" />
        <SelectInput
          source="status"
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
          label="Müşteri Tipi"
          choices={[
            { id: 0, name: "Tanımlanmadı" },
            { id: 1, name: "Dropshipping" },
            { id: 2, name: "Arbitraj" },
            { id: 3, name: "PrivateLabel" },
            { id: 4, name: "Suspend" },
          ]}
        />
        <TextInput source="price" label="Teklif" />
        {/* <TextInput source="call" label="Arama" />
        <TextInput source="images" label="Resimler" /> */}
      </SimpleForm>
    </Create>
  );
};
