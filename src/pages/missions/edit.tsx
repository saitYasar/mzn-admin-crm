import { Edit, SimpleForm, TextInput } from 'react-admin';

export const MissionEdit = (props: any) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="firstName" placeholder='İsim' />

                {/* <SelectInput source='role' label={"Rol"} choices={
                    SelectOptions
                } /> */}
            </SimpleForm>
        </Edit>
    )

}
