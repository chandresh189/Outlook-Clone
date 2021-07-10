import { connect } from "react-redux"
import SendMail from '../components/SendMail'
import { Actions } from "../Action"
import { AddToList } from "../Service/Reducer/Constants";
import { RemoveFromList } from "../Service/Reducer/Constants";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addToListHandeler: data=>dispatch(AddToList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SendMail)

// export default Mails;