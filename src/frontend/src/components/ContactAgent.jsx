import { useNavigate } from "react-router-dom";

const ContactAgent = () => {
    const navigate = useNavigate();

    return (
        <section className="section is-medium">
            <div className="columns ">
                <div className="column is-offset-1">
                    <h3 className="title is-3 has-text-primary">
                        Looking to sell?
                    </h3>
                    <p>
                        Contact our local property agent for a free
                        consultation.
                    </p>
                </div>
                <div className="column">
                    <button
                        onClick={() => navigate("/agent")}
                        className="button is-primary mr-2"
                    >
                        View Agents
                    </button>

                    <button
                        onClick={(e) => {
                            window.location.href =
                                "mailto:no-reply@propertyfinder.com";
                            e.preventDefault();
                        }}
                        className="button is-secondary"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactAgent;
