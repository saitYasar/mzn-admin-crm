import { Edit, SelectInput, SimpleForm, TextInput, useShowController } from 'react-admin';

export const LeadsEdit = (props: any) => {

    const { record } = useShowController(props);
    console.log(record);
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="firstName" placeholder='İsim' />
                <TextInput source="lastName" placeholder='Soyisim' />
                <TextInput source="email" placeholder='Email' />
                <TextInput source="phone" placeholder='Telefon' />

                <SelectInput source="type" label="Müşteri Tipi" choices={[
                    { id: 0, name: "Tanımlanmadı" },
                    { id: 1, name: "Dropshipping" },
                    { id: 2, name: "Arbitraj" },
                    { id: 3, name: "PrivateLabel" },
                    { id: 4, name: "Suspend" },
                ]} />
                {
                    record?.status != 6 && <SelectInput source="status" label="Müşteri Durumu" choices={[
                        { id: "0", name: "Yeni" },
                        { id: "1", name: "Yeni {Bizden Gelen}" },
                        { id: "2", name: "İletişimde" },
                        { id: "3", name: "Takipte" },
                        { id: "4", name: "İlgili" },
                        { id: "5", name: "Pazarlıkta" },
                        { id: "7", name: "Kaybedildi" },
                        { id: "8", name: "Niteliksiz" },
                    ]} />
                }

                <TextInput source="call" placeholder='Arama' />
                <TextInput source="images" placeholder='Resimler' />
            </SimpleForm>
        </Edit>
    )

}
