import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';


export const LeadsCreate = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="firstName" placeholder='İsim' />
                <TextInput source="lastName" placeholder='Soyisim' />
                <TextInput source="email" placeholder='Email' />
                <TextInput source="phone" placeholder='Telefon' />
                <SelectInput source="status" label="Müşteri Durumu" choices={[
                    { id: "0", name: "Yeni" },
                    { id: "1", name: "Yeni {Bizden Gelen}" },
                    { id: "2", name: "İletişimde" },
                    { id: "3", name: "Takipte" },
                    { id: "4", name: "İlgili" },
                    { id: "5", name: "Pazarlıkta" },
                    { id: "6", name: "Satış Tamamlandı" },
                    { id: "7", name: "Kaybedildi" },
                    { id: "8", name: "Niteliksiz" },
                ]} />
                <SelectInput source="type" label="Müşteri Tipi" choices={[
                    { id: 0, name: "Tanımlanmadı" },
                    { id: 1, name: "Dropshipping" },
                    { id: 2, name: "Arbitraj" },
                    { id: 3, name: "PrivateLabel" },
                    { id: 4, name: "Suspend" },
                ]} />
                <TextInput source="call" placeholder='Arama' />
                <TextInput source="images" placeholder='Resimler' />
            </SimpleForm>
        </Create>
    )
}
