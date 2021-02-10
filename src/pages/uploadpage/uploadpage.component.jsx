import './uploadpage.styles.scss';

const UploadPage = () => {
    const {currentUser}= this.props
        const {history} = this.props;   
        if (currentUser && (currentUser.typingPattern !== '')) {
            return(
                <link to ='/uploaddocs'>UPLOAD DOCS</link>
            ) 
        } else {
            return(
                <link to ='/login'>UPLOAD DOCS</link>
            ) 
        }   
}   
    
export default UploadPage; 
  