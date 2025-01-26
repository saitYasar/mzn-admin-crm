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
  SelectInput,
  DateInput,
  ReferenceField,
  ReferenceInput,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role, Type } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <SelectInput
      source="type"
      label="Bildirim Tipi"
      choices={[
        { id: 1, name: "Şikayet" },
        { id: 2, name: "Öneri" },
        { id: 3, name: "Övgü" },
      ]}
      alwaysOn
    />

    <DateInput
      label="Oluşturulma Tarihi Başlangıç"
      source="day__gte"
      alwaysOn
    />
    <DateInput label="Oluşturulma Tarihi Son" source="day__lte" alwaysOn />
    <ReferenceInput
      label="HakKında"
      source="targetUser"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label="HakKında" />
    </ReferenceInput>
    <ReferenceInput
      label="Bildirimi Alan"
      source="userId"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label="Bildirimi Alan" alwaysOn />
    </ReferenceInput>
  </Filter>
);

const exporter = (posts: any) => {
  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post; // omit backlinks and author
    postForExport.mail = post.email;
    postForExport.musteri_ismi = post.customerName;
    postForExport.musteri_soyismi = post.customerSurname;
    postForExport.note = post.note;
    postForExport.tip = Type[post.type];
    postForExport.olusturma_tarihi = post.createDate;
    postForExport.state = post.state;
    postForExport.didWriteOnComplaint = post.didWriteOnComplaint;
    postForExport.hoca_not = post.teacherNote;
    postForExport.telefon = post.phone;
    postForExport.rol = Role[post.role];
    delete postForExport.firstName;
    delete postForExport.role;
    delete postForExport.email;
    delete postForExport.customerName;
    delete postForExport.customerSurname;
    delete postForExport.note;
    delete postForExport.type;
    delete postForExport.createDate;
    delete postForExport.state;
    delete postForExport.didWriteOnComplaint;
    delete postForExport.teacherNote;
    delete postForExport.username;
    delete postForExport.phone;

    return postForExport;
  });
  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "users");
  });
};
export const FeedbackList = (props: any) => {
  const filter = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("role");
  return (
    <List
      {...props}
      filters={<PostFilter />}
      exporter={exporter}
      filter={isAdmin !== "2" && { targetUser: filter }}
    >
      <Datagrid>
        <TextField source="id" label="İd" />
        <TextField source="customerName" label="İsim" />
        <TextField source="customerSurname" label="Soy İsim" />
        <TextField source="note" label="Note" />
        <SelectField
          source="type"
          label="Bildirim Tipi"
          choices={[
            { id: 1, name: "Şikayet" },
            { id: 2, name: "Öneri" },
            { id: 3, name: "Övgü" },
          ]}
        />
        <DateField source="createDate" label="Oluşturulma Tarihi" />

        <ReferenceField label="HakKında" source="targetUser" reference="users">
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
        <SelectField
          source="state"
          label="Durum"
          choices={[
            { id: 1, name: "Geldi" },
            { id: 2, name: "İlgilendim" },
            { id: 3, name: "Çözüm Bulamadım" },
            { id: 4, name: "Çözüldü" },
          ]}
        />
        <ReferenceField
          label="Bildirimi Alan"
          source="userId"
          reference="users"
        >
          <TextField
            source="firstName"
            style={{ textDecoration: "none", color: "inherit" }}
          />{" "}
          <span> </span>
          <TextField
            source="lastName"
            style={{ textDecoration: "none", color: "inherit" }}
          />
        </ReferenceField>
        <BooleanField
          source="didWriteOnComplaint"
          label={"Şikayet Vara yazıldı mı"}
        />
        <TextField source="teacherNote" placeholder="Öğretmen Açıklama" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
