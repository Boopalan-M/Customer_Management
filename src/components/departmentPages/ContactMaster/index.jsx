import { useLocation, useParams } from 'react-router-dom';

import ContactList from "./ContactList";
import ContactForm from'./ContactForm';

const Contatcts = () => {
    let params = useParams();
    let location = useLocation();
    const { pageName } = params;
    console.log(pageName,params,"checking Pagenamee")
    switch (pageName) {
        case 'list':
            return <ContactList />
            case 'add':
                return (
                    <ContactForm
                        formType={'Add'}
                    />
                )
                case 'update':
                    return (
                        <ContactForm
                            formType={'Update'}
                            editState={location.state}
                        />
                    )
                    case 'duplicate':
                        return (
                            <ContactForm
                                formType={'Duplicate'}
                                editState={location.state}
                            />
                        )
        default:
            return <ContactList />
    }
}

export default Contatcts