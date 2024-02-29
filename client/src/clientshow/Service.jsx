import serviceimg1 from "../images/service1.avif";
import serviceimg2 from "../images/cloud.jpg";
import serviceimg3 from "../images/cyber.jpg";
import serviceimg4 from "../images/app.avif";
import serviceimg5 from "../images/iot.avif";
import serviceimg6 from "../images/data.jpg";
import serviceimg7 from "../images/service1.avif";
import serviceimg8 from "../images/service1.avif";
 const imageall=[serviceimg1,serviceimg2,serviceimg3,serviceimg4,serviceimg5,serviceimg6,serviceimg7,serviceimg8]

import { useAuth } from "../store/auth";

const Service = () => {
    const { services,user } = useAuth();

    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h2 className="main-heading">Services </h2>
                    <p>{user.username} </p>
                </div>
                <div className="container grid grid-three-cols">
                    {services.map((service, index) => (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={imageall[index]} alt="service-info" />
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <p>{service.provider}</p>
                                    <p>{service.price}</p>
                                </div>
                                <h2>{service.service}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Service;
