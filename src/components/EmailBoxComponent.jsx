import { FOLDERS } from "../data/constants";

function EmailBoxComponent({ currentFolder, onSelectFolder }){
    return(
        <div className="border-right" style={{ width: '180px', flexShrink: 0}}>
            <ul className="list-unstyled mb-0">
                {FOLDERS.map((folder)=>{
                    const isActive = folder === currentFolder;

                    return(
                        <li key={folder}>
                            <button
                                type="button"
                                onClick={()=>onSelectFolder(folder)}
                                className={`btn btn-block text-left rounded-0 text-capitalize ${
                                    isActive ? 'btn-primary' : 'btn-light'
                                }`}
                            >
                                {folder}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default EmailBoxComponent;