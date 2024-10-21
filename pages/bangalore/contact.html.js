import ContactUS from "../components/ContactUs/ContactUs"
import BangaloreLayout from "../components/Layout/BangaloreLayout"
function contact() {

    return (
        <BangaloreLayout locname={'bangalore'} phoneno={"912-912-2525"}>
            <ContactUS />
        </BangaloreLayout>
    )
}

export default contact