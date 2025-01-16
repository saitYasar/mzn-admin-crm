import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';


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

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="firstName" placeholder='İsim' />
                <TextInput source="lastName" placeholder='Soyisim' />
                <TextInput source="username" placeholder='Kullanıcı Adı' />
                <TextInput source="email" placeholder='Email' />
                <TextInput source="phone" placeholder='Telefon' />
                <TextInput source="password" placeholder='Telefon' />
                <SelectInput source='role' label={"Rol"} choices={
                    SelectOptions
                } />
            </SimpleForm>
        </Create>
    )
}
