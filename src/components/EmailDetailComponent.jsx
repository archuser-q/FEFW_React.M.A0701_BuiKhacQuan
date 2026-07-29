function EmailDetailComponent({ email }) {
    const paragraphs = email.body.split('\n').filter((line) => line.trim() !== '');
    const formattedDate = new Date(email.date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
    return (
        <div>
            <div className="bg-secondary text-white p-3 d-flex justify-content-between align-items-start text-left">
            <div>
                <h5 className="mb-1">{email.subject}</h5>
                <div className="small">
                    {email.from} <span className="mx-1">&rarr;</span> {email.to}
                </div>
            </div>
            <div className="text-left">
                <div className="mb-2">{formattedDate}</div>
                    <button type="button" className="btn btn-primary btn-sm mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                            className="mr-1"
                        >
                            <path d="M268.2 82.4C280.2 87.4 288 99 288 112L288 192L400 192C497.2 192 576 270.8 576 368C576 481.3 494.5 531.9 475.8 542.1C473.3 543.5 470.5 544 467.7 544C456.8 544 448 535.1 448 524.3C448 516.8 452.3 509.9 457.8 504.8C467.2 496 480 478.4 480 448.1C480 395.1 437 352.1 384 352.1L288 352.1L288 432.1C288 445 280.2 456.7 268.2 461.7C256.2 466.7 242.5 463.9 233.3 454.8L73.3 294.8C60.8 282.3 60.8 262 73.3 249.5L233.3 89.5C242.5 80.3 256.2 77.6 268.2 82.6Z" />
                        </svg>
                        Reply
                    </button>
                    <button type="button" className="btn btn-primary btn-sm mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                            className="mr-1"
                        >
                            <path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1Z" />
                        </svg>
                        Forward
                    </button>
                    <button type="button" className="btn btn-primary btn-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 640 640"
                            fill="currentColor"
                            className="mr-1"
                        >
                            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4Z" />
                        </svg>
                        Delete
                    </button>
                </div>
            </div>
            <div className="p-4 text-left">
                {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}

export default EmailDetailComponent;