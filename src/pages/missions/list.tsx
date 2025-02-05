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
  ReferenceField,
  ReferenceInput,
  SelectInput,
  DateInput,
  EditButton,
  DeleteButton,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="İsim" source="firstName" alwaysOn />
    <TextInput label="Soyisim" source="username" alwaysOn />
    <ReferenceInput
      label="Oluşturan Kişi"
      source="baseUser"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label={"Oluşturan Kişi"} />
    </ReferenceInput>
    <ReferenceInput
      label="Atanan Kişi"
      source="targetUser"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label={"Atanan Kişi"} />
    </ReferenceInput>
    <DateInput
      label="Oluşturulma Tarihi Başlangıç"
      source="day__gte"
      alwaysOn
    />
    <DateInput label="Oluşturulma Tarihi Son" source="day__lte" alwaysOn />
  </Filter>
);

const exporter = async (posts: any, dataProvider: any) => {
  // Tüm baseUser ve targetUser ID'lerini topla
  const baseUserIds = posts.map((post: any) => post.baseUser).filter(Boolean);
  const targetUserIds = posts
    .map((post: any) => post.targetUser)
    .filter(Boolean);

  // dataProvider ile kullanıcı verilerini al
  const [baseUsers, targetUsers] = await Promise.all([
    dataProvider.getMany("users", { ids: baseUserIds }),
    dataProvider.getMany("users", { ids: targetUserIds }),
  ]);

  const baseUserMap = Object.fromEntries(
    baseUsers.data.map((user: any) => [
      user.id,
      `${user.firstName} ${user.lastName}`,
    ])
  );
  const targetUserMap = Object.fromEntries(
    targetUsers.data.map((user: any) => [
      user.id,
      `${user.firstName} ${user.lastName}`,
    ])
  );

  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post;

    // ID yerine kullanıcı adlarını ekle
    postForExport["Oluşturan Kişi"] =
      baseUserMap[post.baseUser] || "Bilinmiyor";
    postForExport["Atanan Kişi"] =
      targetUserMap[post.targetUser] || "Bilinmiyor";
    postForExport["Not"] = post.note;
    postForExport["Hedef Zaman"] = post.targetDate;
    postForExport["Oluşturulma Zamanı"] = post.createDate;

    delete postForExport.note;
    delete postForExport.targetDate;
    delete postForExport.createDate;
    delete postForExport.baseUser;
    delete postForExport.targetUser;

    return postForExport;
  });

  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "missions");
  });
};

export const MissionList = (props: any) => (
  <List
    {...props}
    filters={<PostFilter />}
    exporter={(posts) => exporter(posts, props.dataProvider)}
  >
    <Datagrid>
      <TextField source="id" label="İd" />
      <DateField source="createDate" label="Oluşturulma Tarihi" />
      <DateField source="endDate" label="Bitiş Tarihi" />
      <DateField source="targetDate" label="Atanma Tarihi" />
      <SelectField
        source="status"
        label="Durum"
        choices={[
          { id: "0", name: "Yeni Açıldı" },
          { id: "1", name: "İşlemde" },
          { id: "2", name: "Tamamlandı" },
        ]}
      />
      <TextField source="note" label="Not" />
      <ReferenceField
        label="Oluşturan Kişi"
        source="baseUser"
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
      <ReferenceField label="Atanan Kişi" source="targetUser" reference="users">
        <TextField
          source="firstName"
          style={{ textDecoration: "none", color: "inherit" }}
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
