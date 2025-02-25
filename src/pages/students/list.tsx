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
  ReferenceField,
  DateInput,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import {
  ArbitrajStages,
  DropshippingStages,
  MusteriDurumu,
  PrivateLabelStages,
  SuspendStages,
} from "../../lib/enum/enums";
import CustomSelectField from "../../components/ra-ui/customSelect";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="İsim" source="firstName" alwaysOn />
    <TextInput label="Soyisim" source="username" alwaysOn />
    <SelectInput
      source="type"
      label="Müşteri Tipi"
      choices={[
        { id: "", name: "Tümü" },
        { id: 1, name: "Dropshipping" },
        { id: 2, name: "Arbitraj" },
        { id: 3, name: "PrivateLabel" },
        { id: 4, name: "Suspend" },
      ]}
      alwaysOn
    />
    <SelectInput
      source="leadUser"
      label="Atanma durumu"
      choices={[
        { id: "", name: "Tümü" },
        { id: "0", name: "Atanmamış" },
      ]}
      alwaysOn
    />
    <DateInput
      label="Oluşturulma Tarihi Başlangıç"
      source="day__gte"
      alwaysOn
    />
    <DateInput label="Oluşturulma Tarihi Son" source="day__lte" alwaysOn />
  </Filter>
);

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

const exporter = (posts: any) => {
  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post; // omit backlinks and author
    postForExport.isim = post.firstName;
    postForExport.soyisim = post.lastName;
    postForExport.email = post.email;
    postForExport.telefon = post.phone;
    postForExport.durum = MusteriDurumu[post.status];
    delete postForExport.firstName;
    delete postForExport.stage;
    delete postForExport.lastName;
    delete postForExport.phone;
    delete postForExport.images;
    return postForExport;
  });
  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "users");
  });
};

export const StudentList = (props: any) => {
  const filter = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("role");
  return (
    <List
      {...props}
      filters={<PostFilter />}
      exporter={exporter}
      filter={isAdmin !== "2" && { leadUser: filter }}
    >
      <Datagrid>
        <TextField source="id" label="İd" />
        <TextField source="firstName" label="İsim" />
        <TextField source="lastName" label="Soyisim" />
        <TextField source="email" label="email" />
        <TextField source="phone" label="Telefon" />
        <SelectField
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
        <DateField source="createDate" label="Oluşturulma Tarihi" />
        <ReferenceField
          label="Atanan Danışman"
          source="leadUser"
          reference="users"
        >
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
        <ReferenceField
          label="Onaylayan Danışman"
          source="confirmUser"
          reference="users"
        >
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
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
