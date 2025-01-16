import { Layout } from 'react-admin';
import { MyAppBar } from '../appbar';


export const CustomLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />;