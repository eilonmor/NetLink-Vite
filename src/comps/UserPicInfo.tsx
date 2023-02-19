import { Footer } from "./Footer";
import { Header } from "./Header";

export function UserPicInfo(){
    return(
        <>
            <Header />
            <div className="container-sm">
                <h3 className="text-center m-4">Personal ditails:</h3>
                <div className="form-floating m-5">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
                    <label htmlFor="floatingTextarea2">Wirte about yourself</label>
                </div>
                <h6>Upload photo</h6>
                <div className="input-group m-3" style={{width: 'auto'}}>
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
            </div>
            <Footer />
        </>
    )
}