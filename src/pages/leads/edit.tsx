import {
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
  useShowController,
} from "react-admin";

export const LeadsEdit = (props: any) => {
  const { record } = useShowController(props);
  console.log(record);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="firstName" label="İsim" />
        <TextInput source="lastName" label="Soyisim" />
        <TextInput source="email" label="Email" />
        <TextInput source="phone" label="Telefon" />

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
        {record?.status != 6 && (
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
              { id: "7", name: "Kaybedildi" },
              { id: "8", name: "Niteliksiz" },
            ]}
          />
        )}

        <TextInput source="call" label="Arama" />
        <TextInput source="price" label="Teklif" />
        <TextInput source="images" label="Resimler" />
      </SimpleForm>
    </Edit>
  );
};
