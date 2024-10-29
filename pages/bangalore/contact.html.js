import ContactUS from "../components/ContactUs/ContactUs"
import BangaloreLayout from "../components/Layout/BangaloreLayout"
function contact() {

    return (
        <BangaloreLayout locname={'bangalore'} phoneno={"988-6666-883"}>
            <ContactUS />
        </BangaloreLayout>
    )    
}

export default contact