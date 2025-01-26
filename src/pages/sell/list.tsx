import {
  List,
  downloadCSV,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ShowButton,
  DateField,
  SelectField,
  EditButton,
  DeleteButton,
  SelectInput,
  DateInput,
  ImageField,
  ReferenceField,
  NumberField,
  BooleanField,
  ReferenceInput,
  BooleanInput,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput source="firstName" label="İsim" alwaysOn />
    <TextInput source="lastName" label="Soy isim" alwaysOn />
    <TextInput source="phone" label="phone" alwaysOn />
    <SelectInput
      source="serviceType"
      label="Hizmet Tipi"
      choices={[
        { id: 0, name: "Tanımlanmadı" },
        { id: 1, name: "Satış" },
        { id: 2, name: "Alış" },
      ]}
      alwaysOn
    />
    <ReferenceInput
      label="Satan Kişi"
      source="sellerId"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label="Satan Kişi" alwaysOn />
    </ReferenceInput>
    <BooleanInput source="isContainGuarantee" label="Garantili mi" alwaysOn />
    <BooleanInput source="isCompleted" label="Satıldı mı" alwaysOn />

    <DateInput
      label="Oluşturulma Tarihi Başlangıç"
      source="day__gte"
      alwaysOn
    />
    <DateInput label="Oluşturulma Tarihi Son" source="day__lte" alwaysOn />
  </Filter>
);

const exporter = (posts: any) => {
  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post; // omit backlinks and author
    postForExport.isim = post.firstName;
    postForExport.soyisim = post.username;
    postForExport.email = post.email;
    postForExport.telefon = post.phone;
    postForExport.rol = Role[post.role];
    delete postForExport.firstName;
    delete postForExport.role;
    delete postForExport.username;
    delete postForExport.phone;

    return postForExport;
  });
  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "users");
  });
};

export const SellList = (props: any) => (
  <List {...props} filters={<PostFilter />} exporter={exporter}>
    <Datagrid>
      <TextField source="id" label="İd" />
      <TextField source="firstName" label="İsim" />
      <TextField source="lastName" label="Soy isim" />
      <TextField source="phone" label="phone" />
      <DateField source="date" label="Oluşturma Tarihi" />
      <SelectField
        source="serviceType"
        label="Hizmet Tipi"
        choices={[
          { id: 0, name: "Tanımlanmadı" },
          { id: 1, name: "Dropshipping" },
          { id: 2, name: "Arbitraj" },
          { id: 3, name: "PrivateLabel" },
          { id: 4, name: "Suspend" },
        ]}
      />
      <ReferenceField label="Satan Kişi" source="sellerId" reference="users">
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="firstName"
        />{" "}
        <span> </span>
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="lastName"
        />
      </ReferenceField>
      <BooleanField source="isContainGuarantee" label="Garantili mi" />
      <TextField source="buyLocation" label="Satıldığı Lokasyon" />
      <NumberField source="bonusAmount" label="Alınan Tutar" />
      <NumberField source="remainigAmount" label="Kalan Tutar" />
      <NumberField source="totalAmount" label="Toplam Tutar" />

      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
