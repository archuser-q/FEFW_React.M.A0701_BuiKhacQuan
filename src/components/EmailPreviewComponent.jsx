function EmailPreviewComponent({ emails, selectedEmailId, onSelectEmail}){ 
    return(
        <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
            <table className="table table-hover mb-0">
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Subject</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email)=>{
                        const isSelected = email._id === selectedEmailId;

                        return(
                            <tr
                                key={email._id}
                                onClick={()=>onSelectEmail(email._id)}
                                className={isSelected ? 'bg-primary text-white': ''}
                                style={{cursor:'pointer'}}
                            >
                                <td>{email.from}</td>
                                <td>{email.subject}</td>
                                <td>{new Date(email.date).toLocaleDateString()}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EmailPreviewComponent