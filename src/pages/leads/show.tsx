import { DateField, SelectField, Show, SimpleShowLayout, TextField, useShowController } from 'react-admin';
import VerificateLeads from '../../components/ra-ui/verificateLeads';

export const LeadsShow = (props: any) => {

    const { record } = useShowController(props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" label="İd" />
                <TextField source="firstName" label="İsim" />
                <TextField source="lastName" label="Soyisim" />
                <TextField source="email" label="email" />
                <TextField source="phone" label="Telefon" />
                <SelectField source="status" label="Müşteri Durumu" choices={[
                    { id: "0", name: "Yeni" },
                    { id: "1", name: "Yeni" },
                    { id: "2", name: "İletişimde" },
                    { id: "3", name: "Takipte" },
                    { id: "4", name: "İlgili" },
                    { id: "5", name: "Pazarlıkta" },
                    { id: "6", name: "Satış Tamamlandı" },
                    { id: "7", name: "Kaybedildi" },
                    { id: "8", name: "Niteliksiz" },
                ]} />
                <SelectField source="type" label="Müşteri Tipi" choices={[
                    { id: 0, name: "Tanımlanmadı" },
                    { id: 1, name: "Dropshipping" },
                    { id: 2, name: "Arbitraj" },
                    { id: 3, name: "PrivateLabel" },
                    { id: 4, name: "Suspend" },
                ]} />
                <DateField source="createDate" label="Oluşturulma Tarihi" />
                {record?.status != "6" && <VerificateLeads data={record} />}

            </SimpleShowLayout>
        </Show>
    )
}