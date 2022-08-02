import { useLocation, useParams } from 'react-router-dom';

import ContactList from "./ContactList";

const Contatcts = () => {
    let params = useParams();
    let location = useLocation();
    const { pageName } = params;
    switch (pageName) {
        case 'list':
            return <ContactList />
       
        default:
            return <ContactList />
    }
}

export default Contatcts